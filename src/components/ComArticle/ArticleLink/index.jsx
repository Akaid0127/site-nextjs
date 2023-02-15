import React, { Component } from 'react'
import Image from 'next/image'
import qrcodeImg from '../../../../public/static/qrcode1.png'
import articleLinkCss from './index.module.scss'

// 主页掘金链接组件
export default class ArticleLink extends Component {
	render() {
		return (
			<div className={articleLinkCss.ArticleLink}>
				<div className={articleLinkCss.articleLinkContent} >
					<div className={articleLinkCss.img}>
						<Image
							src={qrcodeImg}
							alt=""
							width={60}
							height={60}
							priority={true} />
					</div>
					<div className={articleLinkCss.txt}>
						<div className={articleLinkCss.top}>下载稀土掘金APP</div>
						<div className={articleLinkCss.bottom}>一个帮助开发者成长的社区</div>
					</div>
				</div>
			</div>
		)
	}
}
