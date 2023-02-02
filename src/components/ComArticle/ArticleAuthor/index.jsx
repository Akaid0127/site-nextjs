import React, { Component } from 'react'
import articleAuthorCss from './index.module.scss'

export default class ArticleAuthor extends Component {
	render() {
		return (
			<div className={articleAuthorCss.ArticleAuthor}>
				<div className={articleAuthorCss.articleAuthorContent} >
					ArticleAuthor
				</div>
			</div>
		)
	}
}
