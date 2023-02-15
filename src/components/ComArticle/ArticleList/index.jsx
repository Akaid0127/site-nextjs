import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ArticleItem from './ArticleItem'
import articleListCss from './index.module.scss'

// 主页文章简略显示组件
@inject("ArticlesStore")
@observer
class ArticleList extends Component {
	state = {
		artiList: []
	}

	componentDidMount() {
		const { ArticlesStore } = this.props
		ArticlesStore.getArticlesArr()
			.then((result) => {
				this.setState({
					artiList: ArticlesStore.articlesArr
				})
			})
	}

	render() {
		const { artiList } = this.state
		const { ListData } = this.props
		return (
			<div className={articleListCss.ArticleList}>
				<div className={articleListCss.articleListContent} >
					<ul className={articleListCss.sift}>
						<li>推荐</li><li>最新</li><li>热榜</li>
					</ul>
					{
						(ListData.length === 0 ? artiList : ListData).map((item) => {
							return <ArticleItem key={item.id} content={item} />
						})
					}
				</div>
			</div>
		)
	}
}

export default ArticleList