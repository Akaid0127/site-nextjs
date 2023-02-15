import Head from 'next/head'
import React, { Component } from 'react'
// 引入首页
import Recommend from './recommend';


export default class Home extends Component {

	bodyScale = () => {
		let devicewidth = document.documentElement.clientWidth; //获取当前分辨率下的可是区域宽度
		let widthScale = devicewidth / 1707; // 分母——设计稿的尺寸
		document.body.style.zoom = widthScale; //放大缩小相应倍数
		let heightScale = document.documentElement.clientHeight;
		document.body.style.height = heightScale;
	}

	componentDidMount() {
		this.bodyScale()
	}

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
						<div className='Home'>
							<div className='home-content'>
								{/* Recommend首页 */}
								<Recommend></Recommend>
							</div>
						</div>
				</main>
			</>
		)
	}
}

