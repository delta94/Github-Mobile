require('colors');

module.exports = (function () {
	return function (str, tag) {
		var color = "blue"
		switch (tag){
			case 1:
				color = "red"
				console.error("[ ERROR ] ==> "[color] + str)
				break
			default:
				color = "green"
				console.log("[ LOG ] ==> "[color] + str)
		}
		return true
	}
})(process.env.NODE_ENV)