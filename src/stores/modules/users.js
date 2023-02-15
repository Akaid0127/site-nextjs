import { observable, action } from 'mobx'
import { topGet,userGetByID } from "../../utils/data";

class UsersStore {
	@observable usersArr = []
	@observable topUsersArr = []

	// 获取作者榜
	@action.bound async getTopArr() {
		let response = await topGet()
			.then((response) => { return response })
			.catch((err) => { console.log("请求失败", err); })

		if (response !== undefined) {
			// 后台已开启，改变初始化store
			this.topUsersArr = response.data
			return new Promise((resolve, reject) => {
				resolve(response.data)
			});
		} else {
			// 后台未开启，返回初始化store
			console.log("server not run")
			return new Promise((resolve, reject) => {
				resolve(this.topUsersArr)
			});
		}
	}

	// 根据id获取用户
	@action.bound async getUser(userID) {
		let response = await userGetByID(userID)
			.then((response) => { return response })
			.catch((err) => { console.log("请求失败", err); })

		if (response !== undefined) {
			return new Promise((resolve, reject) => {
				resolve(response.data)
			});
		} else {
			console.log("server not run")
		}
	}

	constructor(rootStore) {
		this.rootStore = rootStore
	}
}

export default UsersStore