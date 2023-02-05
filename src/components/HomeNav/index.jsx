import React, { Component } from 'react'
import Image from 'next/image'
import { SearchOutlined, BellFilled, BulbOutlined } from '@ant-design/icons'
import homeNavCss from './index.module.scss'

import logoLigher from "../../../public/static/juejinlogo.png"

export default class HomeNav extends Component {
	state = {
		// nextjs不支持动态载入，因为需要计算渲染时间
		imageLogo: logoLigher,
		tagList: [
			{ id: 1, nav_item: "首页", nav_mark: false, mark_name: "" },
			{ id: 2, nav_item: "沸点", nav_mark: false, mark_name: "" },
			{ id: 3, nav_item: "课程", nav_mark: false, mark_name: "" },
			{ id: 4, nav_item: "直播", nav_mark: false, mark_name: "" },
			{ id: 5, nav_item: "活动", nav_mark: false, mark_name: "" },
			{ id: 6, nav_item: "竞赛", nav_mark: false, mark_name: "" },
			{ id: 7, nav_item: "商城", nav_mark: false, mark_name: "" },
			{ id: 8, nav_item: "App", nav_mark: false, mark_name: "" },
			{ id: 9, nav_item: "插件", nav_mark: false, mark_name: "" },
		]
	}

	changeTheme = () => {
		console.log("this is changeTheme")
	}

	render() {
		const { imageLogo, tagList } = this.state
		return (
			<div className={homeNavCss.HomeNav}>
				<div className={homeNavCss.homeNavContent}>
					<div className={homeNavCss.log}>
						<Image src={imageLogo} alt="" height={22} />
					</div>
					<div className={homeNavCss.tag}>
						{
							tagList.map((item) => {
								return <div key={item.id}>{item.nav_item}</div>
							})
						}
					</div>
					<div className={homeNavCss.search}>
						<input type="text" placeholder="探索稀土掘金" />
						<span><SearchOutlined /></span>
					</div>

					<div className={homeNavCss.add}>
						<button>创作者中心</button>
						<div className={homeNavCss.sel}>
							<div className={homeNavCss.tri}></div>
						</div>
					</div>

					<div className={homeNavCss.bell}>
						<span ><BellFilled className={homeNavCss.icon} /></span>
					</div>

					<div className={homeNavCss.theme}>
						<span onClick={this.changeTheme}><BulbOutlined className={homeNavCss.icon} /></span>
					</div>
				</div>
			</div>
		)
	}
}
