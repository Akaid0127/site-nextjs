import React, { Component } from 'react'
// mobx观察
import { inject, observer } from 'mobx-react'
// 引入antd
import { Anchor, Link } from 'antd'
// 获取文章内容
import { articleGetTxt } from '../../../utils/data'
import detailDirectCss from './index.module.scss'

// 详情页文章目组件
@inject("ArticlesStore")
@observer
class DetailDirect extends Component {
	state = {
		mdArticle: "",
		titleArr: []
	}

	// 获取文章
	mdGet = () => {
		const { ArticlesStore } = this.props
		const thePath = window.location.pathname
		const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)
		const id = lastItem
		if (id !== 0) {
			ArticlesStore.getArticle(id)
				.then((result) => {
					// 获取md文本
					articleGetTxt(result[0].article_content)
						.then((response) => {
							this.setState({ mdArticle: "\n" + response.data }, () => {
								this.addAnchor()
							})
						})
				})
		}
	}

	// 给md文章添加锚点
	addAnchor = () => {
		// 获取md文章内容
		let artiMd = document.getElementsByClassName('markdown-body')[0];
		let index = 0;
		let titleArrNew = [];
		for (let item of artiMd.childNodes) {
			if (item.nodeName === 'H1' || item.nodeName === 'H2') {
				// 添加a标签
				let tag_a = document.createElement('a');
				tag_a.setAttribute('id', '#' + index);
				tag_a.setAttribute('href', '#' + index);
				tag_a.innerText = ' ';
				let title = {
					href: '#' + index,
					title: item.innerText,
					key: index,
				};
				titleArrNew.push(title);
				item.appendChild(tag_a);
				index++;
			}
		}
		this.setState({
			titleArr: titleArrNew
		})
	}


	// 点击锚点
	handleClick = (e, link)=>{
		e.preventDefault();
		console.log("link.href", document.getElementById(link.href))
		if (link.href) {
			// 获取节点
			let element = document.getElementById(link.href);
			// 滚动至节点
			element && element.scrollIntoView({ block: 'start', behavior: 'smooth' });
		}
	}


	componentDidMount() {
		this.mdGet()
	}

	render() {
		const { titleArr } = this.state
		return (
			<div className={detailDirectCss.DetailDirect}>
				<div className={detailDirectCss.detailDirectContent} >
					<div className={detailDirectCss.title}>目录</div>
					<div className={detailDirectCss.markdownNav}>
						<Anchor
							affix={false}
							onClick={this.handleClick}
							items={titleArr}
						>
						</Anchor>
					</div>
				</div>
			</div>
		)
	}
}

export default DetailDirect
