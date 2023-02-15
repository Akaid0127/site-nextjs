import { observable, action } from 'mobx'
import { articlesGet, articleGetByID } from "../../utils/data";

class ArticlesStore {
	@observable articlesArr = []
	@observable articlesArrByType = []
	@observable currentArti = {}

	@action.bound async getArticlesArr() {
		let response = await articlesGet()
			.then((response) => { return response })
			.catch((err) => { console.log("请求失败", err); })

		if (response !== undefined) {
			// 后台已开启，改变初始化store
			this.articlesArr = response.data
			return new Promise((resolve, reject) => {
				resolve(response.data)
			});
		} else {
			// 后台未开启，返回初始化store
			console.log("server not run")
			return new Promise((resolve, reject) => {
				resolve(this.articlesArr)
			});
		}
	}

	// 根据id获取文章
	@action.bound async getArticle(userID) {
		let response = await articleGetByID(userID)
			.then((response) => { return response })
			.catch((err) => { console.log("请求失败", err); })

		if (response !== undefined) {
			this.currentArti = response.data[0]
			return new Promise((resolve, reject) => {
				// 设置当前文章
				resolve(response.data)
			});
		} else {
			console.log("server not run")
		}
	}

	// 根据type获取文章
	@action.bound async getArticlesByType(typeID) {
		let response = await articlesGet()
			.then((response) => { return response })
			.catch((err) => { console.log("请求失败", err); })

		if (response !== undefined) {
			// 后台已开启，改变初始化store
			return new Promise((resolve, reject) => {
				let data = response.data.filter((item) => {
					let result = false;
					// 这里不能用原数组迭代
					if (typeof (typeID) === "number") {
						let resArr = [...item.type_id]
						if (resArr.includes(typeID)) {
							result = true;
						}
					} else if (typeof (typeID) === "object") {
						let tempArr = [...typeID]
						let resArr = [...item.type_id]
						tempArr.forEach(item => {
							if (resArr.includes(item) && item !== 1) {
								result = true;
							}
						});
					}
					return result
				})
				this.articlesArrByType = data
				resolve(data)
			});
		} else {
			// 后台未开启，返回初始化store
			console.log("server not run")
			return new Promise((resolve, reject) => {
				resolve(this.articlesArrByType)
			});
		}
	}

	constructor(rootStore) {
		this.rootStore = rootStore
	}
}

export default ArticlesStore