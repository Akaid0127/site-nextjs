import { observable, action } from 'mobx'
import { navGet } from "../../utils/data";

class NavStore {
	@observable navArr = [
		// 初始化数据
		{ id: 1, nav_item: "后台未开启", nav_mark: false, mark_name: "" },
	]

	@action.bound async getNavArr() {
		let response = await navGet()
			.then((response) => { return response })
			.catch((err) => { console.log("请求失败", err); })

		if (response !== undefined) {
			// 后台已开启，改变初始化store
			this.navArr = response.data
			return new Promise((resolve, reject) => {
				resolve(response.data)
			});
		} else {
			// 后台未开启，返回初始化store
			console.log("server not run")
			return new Promise((resolve, reject) => {
				resolve(this.navArr)
			});
		}
	}

	constructor(rootStore) {
		this.rootStore = rootStore
	}
}

export default NavStore