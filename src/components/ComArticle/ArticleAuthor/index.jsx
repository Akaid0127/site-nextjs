import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import UserItem from './UserItem'
import articleAuthorCss from './index.module.scss'

// 主页作者榜组件
@inject("UsersStore")
@observer
class ArticleAuthor extends Component {
	state = {
		// 作者榜用户
		topUsers: []
	}

	componentDidMount() {
		const { UsersStore } = this.props
		UsersStore.getTopArr()
			.then((result) => {
				this.setState({
					topUsers: result
				})
			})
	}

	render() {
		const { topUsers } = this.state
		return (
			<div className={articleAuthorCss.ArticleAuthor}>
				<div className={articleAuthorCss.articleAuthorContent} >
					<div className={articleAuthorCss.title}>
						🎖️作者榜
					</div>
					<div className={articleAuthorCss.list}>
						{
							topUsers.map((item) => {
								return <UserItem key={item.id} content={item.user} />
							})
						}
					</div>
					<div className={articleAuthorCss.bottom}>
						完整榜单
					</div>
				</div>
			</div>
		)
	}
}

export default ArticleAuthor
