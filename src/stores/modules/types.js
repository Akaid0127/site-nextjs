import { observable, action } from 'mobx'
import { typesGet } from "../../utils/data";

class TypesStore {
	@observable typesArr = [
		// 初始化数据
		{ id: 1, type_item: "后台未连接", type_disabled: "false" },
	]

	@action.bound async getTypesArr() {
		let response = await typesGet()
			.then((response) => { return response })
			.catch((err) => { console.log("请求失败", err); })

		if (response !== undefined) {
			// 后台已开启，改变初始化store
			this.typesArr = response.data
			return new Promise((resolve, reject) => {
				resolve(response.data)
			});
		} else {
			// 后台未开启，返回初始化store
			console.log("server not run")
			return new Promise((resolve, reject) => {
				resolve(this.typesArr)
			});
		}
	}

	constructor(rootStore) {
		this.rootStore = rootStore
	}
}

export default TypesStore