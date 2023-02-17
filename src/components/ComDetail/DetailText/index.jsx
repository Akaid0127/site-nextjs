import React, { Component } from 'react'
// react渲染md
import ReactMarkdown from 'react-markdown'
// 添加了对删除线、表、任务列表和URL的支持
import remarkGfm from 'remark-gfm'
// mobx观察
import { inject, observer } from 'mobx-react'
// nextImage
import Image from 'next/image'
// 获取文章内容
import { articleGetTxt } from '../../../utils/data'
import detailTextCss from './index.module.scss'

// 详情页文章组件
@inject("ArticlesStore", "UsersStore")
@observer
class DetailText extends Component {
 
	state = {
		currentArticle: {
			"id": 1,
			"user_id": 1,
			"type_id": 4,
			"click_num": 797,
			"like_num": 102,
			"talk_num": 12,
			"article_time": "2023-1-2",
			"article_title": "Ajax",
			"article_content": "http://localhost:3000/Ajax.md",
			"article_img": "http://localhost:3000/arti01.png",
			"article_status": "approved",
			"article_abs": "Ajax即Asynchronous Javascript And XML（异步JavaScript和XML）在 2005年被Jesse James Garrett提出的新术语。"
		},
		currentUser: {
			id: 1,
			name: "橄榄小番茄",
			description: "优秀前端搬砖工",
			user_level: 5,
			user_img: "http://localhost:3000/user01.png"
		},
		mdArticle: "",
	}
	
	// 获取文章、文章详情、作者
	mdShow = () => {
		const {  ArticlesStore, UsersStore } = this.props
		const thePath = window.location.pathname
		const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)
		const id = lastItem
		if (id !== 0) {
			ArticlesStore.getArticle(id)
				.then((result) => {
					// 获取md文本
					articleGetTxt(result[0].article_content)
						.then((response) => { this.setState({ mdArticle: response.data }) })
					// 获取用户详情
					UsersStore.getUser(result[0].user_id)
						.then((response) => {
							this.setState({ currentUser: response[0] })
						})
					// 更新文章详情
					this.setState({ currentArticle: result[0], })

				})
		}
	}
	

	// nextImage loader函数
	myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}
	
	
	componentDidMount() {
		this.mdShow()
	}

	render() {
		const { currentArticle, currentUser, mdArticle } = this.state
		return (
			<div className={detailTextCss.DetailText}>
				<div className={detailTextCss.detailTextContent} >
					<div className={detailTextCss.title}>
						<h1>{currentArticle.article_title}</h1>
					</div>
					<div className={detailTextCss.user}>
						<div className={detailTextCss.image}>
							<Image
								className={detailTextCss.radius}
								loader={this.myLoader}
								priority={true}
								src={currentUser.user_img}
								alt={""}
								width={50}
								height={50}
							/>
						</div>
						<div className={detailTextCss.detail}>
							<div className={detailTextCss.name}>{currentUser.name}</div>
							<div className={detailTextCss.describle}>
								<div className={detailTextCss.time}>{currentArticle.article_time}</div>
								<div className={detailTextCss.num}> ·  阅读 {currentArticle.click_num}</div>
							</div>
						</div>
					</div>

					<div className={detailTextCss.cover}>
						<img
							className={detailTextCss.coverImg}
							loader={this.myLoader}
							src={currentArticle.article_img}
							
						/>
						
					</div>
					<div className={detailTextCss.md} >
						<ReactMarkdown
							className="markdown-body"
							children={mdArticle}
							remarkPlugin s={[remarkGfm]}
						/>
						
					</div>

				</div>
			</div>
		)
	}
}

export default DetailText
