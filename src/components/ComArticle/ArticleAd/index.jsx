import React, { Component } from 'react'
import articleAdCss from './index.module.scss'

// 主页广告组件
export default class ArticleAd extends Component {
	render() {
		return (
			<div className={articleAdCss.ArticleAd}>
				<div className={articleAdCss.articleAdContent} >
					<div className={articleAdCss.ad} >
						广告
					</div>
				</div>
			</div>
		)
	}
}
