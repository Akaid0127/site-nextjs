import React, { Component } from 'react'
import articleSortCss from './index.module.scss'

export default class ArticleSort extends Component {
	render() {
		return (

			<div className={articleSortCss.ArticleSort}>
				<div className={articleSortCss.articleSortContent}>
					ArticleSort
				</div>
			</div>
		)
	}
}
