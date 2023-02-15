import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import detailRelatedCss from './index.module.scss'

//详情页相关文章组价 
@inject("ArticlesStore")
@observer
class DetailRelated extends Component {
	state = {
		artiList: [
		]
	}

	// 获取同类型文章
	typeListGet = () => {
		const { ArticlesStore } = this.props
		const thePath = window.location.pathname
		const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)
		const id = lastItem
		if (id !== 0) {
			ArticlesStore.getArticle(id)
				.then((result) => {
					// 根据type查找文章
					ArticlesStore.getArticlesByType(result[0].type_id)
						.then((result) => {
							this.setState({
								artiList: result ? result : ArticlesStore.articlesArrByType
							})
						})
				})
		}
	}

	componentDidMount() {
		this.typeListGet()
	}

	render() {
		const { artiList } = this.state
		return (
			<div className={detailRelatedCss.DetailRelated}>
				<div className={detailRelatedCss.detailRelatedContent} >
					<div className={detailRelatedCss.head}>相关文章</div>
					{
						artiList.map((item) => {
							return (
								<div key={item.id} className={detailRelatedCss.item}>
									<div className={detailRelatedCss.artiName}>{item.article_title}</div>
									<div className={detailRelatedCss.artistatus}>
										<div className={detailRelatedCss.like}>{item.like_num}点赞</div>
										<div className={detailRelatedCss.spot}>·</div>
										<div className={detailRelatedCss.comment}>{item.talk_num}评论</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default DetailRelated