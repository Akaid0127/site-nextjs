import React, { Component } from 'react'
// 转换路由组件
import { withRouter } from 'next/router'
// mobx观察
import { inject, observer } from 'mobx-react'
// NextImage
import Image from 'next/image'
// antd图标
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
// ID获取用户
import { userGetByID } from '../../../../utils/data'
// ID获取类型
import { typeGetByID } from '../../../../utils/data'
import articleItemCss from './index.module.scss'


@inject("ArticlesStore")
@observer
class ArticleItem extends Component {
	state = {
		// 初始化
		artiCard: {
			id: 1,
			user_id: 1,
			type_id: 4,
			click_num: 797,
			like_num: 102,
			talk_num: 12,
			article_time: "2023-1-2",
			article_title: "Ajax",
			article_content: "https://github.com/Akaid0127/studyHouse/blob/main/Ajax.md",
			article_img: "http://localhost:3000/arti01.png",
			article_status: "approved",
			article_abs: "Ajax即Asynchronous Javascript And XML（异步JavaScript和XML）在 2005年被Jesse James Garrett提出的新术语。"
		},

		userName: "",
		typeName: ""

	}

	// 文章详情跳转
	gotoDetailed = () => {
		const { artiCard } = this.state
		const { ArticlesStore } = this.props
		// 设置文章信息后跳转
		ArticlesStore.getArticle(artiCard.id).then(
			this.props.router.push(`/${artiCard.id}`, undefined, { shallow: true })
		)
	}

	// next image loader函数
	myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	dataInit = () => {
		// this.setState 也属于异步操作，同步打印值无效,可以将第二个参数设置为逻辑函数打印
		this.setState({
			artiCard: this.props.content
		}, () => {
			const { artiCard } = this.state
			userGetByID(artiCard.user_id)
				.then((response) => {
					this.setState({
						userName: response.data[0].name
					})
				})
				.catch((err) => {
					console.log("请求失败", err);
				})

			typeGetByID(artiCard.type_id)
				.then((response) => {
					this.setState({
						typeName: response.data[0].type_item
					})
				})
				.catch((err) => {
					console.log("请求失败", err);
				})
		})

	}
	componentDidMount() {
		this.dataInit()
	}

	render() {
		const { artiCard, userName, typeName } = this.state
		return (
			<div className={articleItemCss.ArticleItem} onClick={this.gotoDetailed}>
				<div className={articleItemCss.articleItemContent} >
					<div className={articleItemCss.top}>
						<div className={articleItemCss.userName}>{userName}</div>
						<div className={articleItemCss.typeName}>{typeName}</div>
					</div>
					<div className={articleItemCss.content}>
						<div className={articleItemCss.left}>
							<div className={articleItemCss.title}>
								{artiCard.article_title}
							</div>
							<div className={articleItemCss.abstract}>
								{artiCard.article_abs}
							</div>
							<div className={articleItemCss.status}>
								<div>
									<i><EyeOutlined /></i>
									{artiCard.click_num}
								</div>
								<div>
									<i><LikeOutlined /></i>
									{artiCard.like_num}
								</div>
								<div>
									<i><MessageOutlined /></i>
									{artiCard.talk_num}
								</div>

							</div>
						</div>
						<div className={articleItemCss.picture}>
							{/* 
								priority	图像将被视为高优先级和预加载
								loader		用于解析图像URL的自定义函数
							*/}
							<Image
								loader={this.myLoader}
								priority={true}
								src={artiCard.article_img}
								alt={""}
								width={130}
								height={86} />
						</div>
					</div>
				</div>
			</div>

		)
	}
}

// 转为路由组件暴露
export default withRouter(ArticleItem)


