import React, { Component } from 'react'
import ArticleItem from './ArticleItem'
import articleListCss from './index.module.scss'

export default class ArticleList extends Component {
	render() {
		return (
			<div className={articleListCss.ArticleList}>
				<div className={articleListCss.articleListContent} >
					<ul className={articleListCss.sift}>
						<li>推荐</li><li>最新</li><li>热榜</li>
					</ul>
					<ArticleItem></ArticleItem>
					<ArticleItem></ArticleItem>
					<ArticleItem></ArticleItem>
					<ArticleItem></ArticleItem>
					<ArticleItem></ArticleItem>
					<ArticleItem></ArticleItem>
					<ArticleItem></ArticleItem>
					<ArticleItem></ArticleItem>
					<ArticleItem></ArticleItem>

				</div>
			</div>
		)
	}
}
