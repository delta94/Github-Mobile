import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Icon, Layout, Menu, Affix, Button} from "antd";
import "./Trending.scss";
import {changeRouter} from "../views/HomeRedux";
import {changeLang, changeSpan, fetchTrending} from "../views/TrendingRedux"
import Filter from "../components/Common/Filter";

const {Content} = Layout
const SubMenu = Menu.SubMenu

@withRouter
@connect((state=>({
	route: state.common.route,
	trending: state.trending
})), {changeRouter, changeSpan, changeLang, fetchTrending})
export default class Trending extends Component{
	changeSpan(e){
		const { location, children, trending: {language, span} } = this.props

		//I don't like the design of selection, so it's replaced with menu
		if(['daily','weekly','monthly'].indexOf(e.key) > -1){
			this.props.changeSpan(e.key)
			setTimeout(()=>{this.props.fetchTrending('repo', language, this.props.trending.span)},0)
		}
	}

	render = () => {
		const { location, children } = this.props
		let route = location.pathname.split('/'),
			language = route[2] || '',
			p = location.search.match(/span=(\w*)/),
			span = p ? p[1] : 'daily',
			developer = false

		if(route[2] === 'developers'){
			language = route[3] || ''
			developer = true
		}

		return (
			<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 400 }}>
				<h1>Trending in open source</h1>
				<h3>See what the GitHub community is most excited about today.</h3>
				<div className="trending">
					<section className="t-left-part">
						<Menu
							selectedKeys={[developer ? 'dev' : 'repo']}
							mode="horizontal"
						    onClick={::this.changeSpan}
						>
							<Menu.Item key="repo">
								<Link to={'/trending'} style={{color: developer ? '' : '#108ee9'}}><Icon type="book" />Repository</Link>
							</Menu.Item>
							<Menu.Item key="dev">
								<Link to={'/trending/developers'} style={{color: developer ? '#108ee9' : ''}}><Icon type="user" />Developer</Link>
							</Menu.Item>
							<SubMenu title={<span><Icon type="filter" />Time</span>}>
								<Menu.Item key="daily"><Link to={`/trending${developer ? '/developers' : ''}/${language}?span=daily`}>by Daily</Link></Menu.Item>
								<Menu.Item key="weekly"><Link to={`/trending${developer ? '/developers' : ''}/${language}?span=weekly`}>by Weekly</Link></Menu.Item>
								<Menu.Item key="monthly"><Link to={`/trending${developer ? '/developers' : ''}/${language}?span=monthly`}>by Monthly</Link></Menu.Item>
							</SubMenu>
						</Menu>
						{children}
					</section>
					<Affix>
						<section className="t-right-part">
							<Filter type="filter" data={['123','234','345']} />
						</section>
					</Affix>

				</div>
			</Content>
		)
	}
}