import React, { Component } from 'react'
import { LikeFilled, MessageFilled, StarFilled, ThunderboltFilled, WarningFilled, PlusSquareFilled } from '@ant-design/icons'
import Head from 'next/head'
// 引入组件
import HomeNav from '../../components/HomeNav';
import DetailText from '../../components/ComDetail/DetailText'
import DetailAdmin from '../../components/ComDetail/DetailAdmin'
import DetailRelated from '../../components/ComDetail/DetailRelated'
import DetailDirect from '../../components/ComDetail/DetailDirect'
import particularCss from './index.module.scss'


/*
	遗留
	跳转屏闪
*/

// 页面2-文章详情页
export default class Particular extends Component {

	// bodyScale = () => {
	// 	let devicewidth = document.documentElement.clientWidth; //获取当前分辨率下的可是区域宽度
	// 	let widthScale = devicewidth / 1707; // 分母——设计稿的尺寸
	// 	document.body.style.zoom = widthScale; //放大缩小相应倍数
	// 	let heightScale = document.documentElement.clientHeight;
	// 	document.body.style.height = heightScale;
	// }

	// componentDidMount() {
	// 	this.bodyScale()
	// }

	render() {
		return (
			<>
				<Head>
					<title>稀土掘金</title>
					<meta name="description" content="掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main>
					<div className={particularCss.Particular}>
						<div className={particularCss.particularContent}>
							<div className={particularCss.top}>
								{/* 顶部导航 */}
								<HomeNav></HomeNav>
							</div>
							<div className={particularCss.main}>
								<div className={particularCss.left}>
									{/* 文章点赞、浏览量等状态栏 */}
									<div className={particularCss.top}>
										<div><LikeFilled /></div>
										<div><MessageFilled /></div>
										<div><StarFilled /></div>
										<div><ThunderboltFilled /></div>
									</div>
									<div className={particularCss.line}></div>
									<div className={particularCss.bottom}>
										<div><WarningFilled /></div>
										<div><PlusSquareFilled /></div>
									</div>
								</div>
								<div className={particularCss.middle}>
									{/* 文章md */}
									<DetailText ></DetailText>
								</div>
								<div className={particularCss.right}>
									<div className={particularCss.right1}>
										{/* 管理员信息卡片 */}
										<DetailAdmin></DetailAdmin>
									</div>
									<div className={particularCss.right2}>
										{/* 相关文章 */}
										<DetailRelated></DetailRelated>
									</div>
									<div className={particularCss.right3}>
										{/* 文章目录 */}
										<DetailDirect></DetailDirect>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</>
		)
	}
}
