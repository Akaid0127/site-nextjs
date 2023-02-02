import React, { Component } from 'react'
import articleLinkCss from './index.module.scss'

export default class ArticleLink extends Component {
	render() {
		return (
			<div className={articleLinkCss.ArticleLink}>
				<div className={articleLinkCss.articleLinkContent} >
					ArticleLink
				</div>
			</div>
		)
	}
}
