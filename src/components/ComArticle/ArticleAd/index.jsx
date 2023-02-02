import React, { Component } from 'react'
import articleAdCss from './index.module.scss'

export default class ArticleAd extends Component {
	render() {
		return (
			<div className={articleAdCss.ArticleAd}>
				<div className={articleAdCss.articleAdContent} >
					ArticleAd
				</div>
			</div>
		)
	}
}
