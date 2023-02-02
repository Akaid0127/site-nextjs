import React, { Component } from 'react'
import { withRouter } from 'next/router'
import articleItemCss from './index.module.scss'

class ArticleItem extends Component {
	gotoDetailed = () => {
		// /123value为文章ID
		this.props.router.push('/123', undefined, { shallow: true })
	}

	render() {
		return (
				<div className={articleItemCss.ArticleItem} onClick={this.gotoDetailed}>
					<div className={articleItemCss.articleItemContent} >
						ArticleItem
					</div>
				</div>

		)
	}
}

// 转为路由组件暴露
export default withRouter(ArticleItem)


