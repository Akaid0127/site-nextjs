import React, { Component } from 'react'
// 引入组件
import HomeNav from '../../components/HomeNav';
import ArticleAd from '../../components/ComArticle/ArticleAd'
import ArticleAuthor from '../../components/ComArticle/ArticleAuthor'
import ArticleLink from '../../components/ComArticle/ArticleLink'
import ArticleList from '../../components/ComArticle/ArticleList'
import ArticleSort from '../../components/ComArticle/ArticleSort'
import recommendCss from './index.module.scss'

// 页面1-主页
export default class Recommend extends Component {
	state = {
		ListData: []
	}

	// 获取分类得到的文章list
	getChildData = (msg) => {
		this.setState({
			ListData: msg
		})
	}

	render() {
		const { ListData } = this.state
		return (
			<div className={recommendCss.Recommend}>
				<div className={recommendCss.recommendContent}>
					<div>
						<HomeNav></HomeNav>
					</div>
					<div className={recommendCss.top}>
						{/* 文章分类 */}
						<ArticleSort getListData={this.getChildData}></ArticleSort>
					</div>
					<div className={recommendCss.mainContent}>
						<div className={recommendCss.middle}>
							{/* 文章简介列表 */}
							<ArticleList ListData={ListData}></ArticleList>
						</div>
						<div className={recommendCss.right}>
							{/* 右侧按顺序依次为广告、链接、作者榜 */}
							<div className={recommendCss.right1}><ArticleAd></ArticleAd></div>
							<div className={recommendCss.right2}><ArticleLink></ArticleLink></div>
							<div className={recommendCss.right3}><ArticleAuthor></ArticleAuthor></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
