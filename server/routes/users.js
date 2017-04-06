let express = require('express');
let router = express.Router();
let fetch = require('node-fetch');
let Promise = require('bluebird');
let log = require('../helper/logger');

let DataQuery = require('../dao/userAccess')

router.post('/register', function (req, respond) {
	let github = global.github,
		code = req.body.code

	log(code)

	fetch("https://github.com/login/oauth/access_token",{
		method: 'POST',
		headers: {
			"Accept": "application/json",
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: "client_id="+global.config.clientID+"&client_secret="+global.config.clientSecret+"&code="+code
	}).then(res => res.json()).then(res => {
		return new Promise(function (resolve, reject) {
			log(res.access_token)
			/**
			 * authenticate is sync operation
			 */
			let token = res.access_token

			if(token === undefined){
				reject("undefined token")
			}

			github.authenticate({
				type: "oauth",
				token: token
			})

			github.users.get(
				{}, function (err, res) {
					if(err) reject("get user info error or timeout")
					resolve({res:res,token:token})
			})
		})
	}).then(function (obj) {
		return DataQuery.chkUserExist(obj)
	}).then(function (obj) {
		return DataQuery.addUser(obj.res.data.id, obj.token)
	}).then(function (gid, key) {
		respond.cookie('gid', gid, { maxAge: 30*24*60*60*1000 })
		respond.cookie('key',key, { maxAge: 30*24*60*60*1000, httpOnly: true })
		respond.send("OK").end();
	}).catch(e=>{
		log(e,1)
		respond.send(e).end()
	})

}).post('/login', function (req, respond) {
	let github = global.github,
		gid = req.cookies['gid'],
		key = req.cookies['key'];

	if(typeof key === "undefined" || typeof gid === "undefined"){
		respond.write("no key or gid in cookie")
		return
	}

	DataQuery.chkLogin(gid,key)
	.then(function (token) {
		github.authenticate({
			type: "oauth",
			token: token
		})
		respond.send("login success")
	}).catch(function (err) {
		log(err,1)
		respond.send(err)
	})
}).get('/redirect', function (req, res) {
	res.redirect("https://github.com/login/oauth/authorize?scope=admin&client_id="+global.config.clientID)
}).get('/test', (req, res) => {

	res.send("123")
})

module.exports = router;