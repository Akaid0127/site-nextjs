import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// 组件
import DropDown from '../../Other/DropDown'
import articleSortCss from './index.module.scss'

// 主页标签管理组件
@inject("TypesStore","ArticlesStore")
@observer
class ArticleSort extends Component {

	state = {
		tagList: [],
	}

	listChange=(TypeItem)=>{
		const { ArticlesStore } = this.props
		ArticlesStore.getArticlesByType(TypeItem).then((result)=>{
			this.props.getListData(result)
		})
	}

	componentDidMount() {
		const { TypesStore, ArticlesStore } = this.props
		
		TypesStore.getTypesArr()
			.then((result) => {
				this.setState({
					tagList: result ? result : TypesStore.typesArr
				})
			})
	}

	render() {
		const { tagList } = this.state
		return (

			<div className={articleSortCss.ArticleSort}>
				<div className={articleSortCss.articleSortContent}>
					<div className={articleSortCss.tag}>
						{
							tagList.map((item) => {
								return <div key={item.id} onClick={this.listChange.bind(this, item.id)}>{item.type_item}</div>
							})
						}
					</div>

					<div className={articleSortCss.drop}>
						<DropDown txtName={"所有分类"} dropList={tagList} dropItemName={"type_item"}></DropDown>
					</div>
					<div className={articleSortCss.tagManage}>标签管理</div>
				</div>
			</div>
		)
	}
}

export default ArticleSort
