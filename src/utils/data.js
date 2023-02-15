import axios from "./request";

// 获取用户
export const usersGet = () => {
	return axios({
		url: '/users',
		method: "get",
	})
}

// id获取用户
export const userGetByID = (userID) => {
	return axios({
		url: '/users',
		method: "get",
		params: {
			id: userID
		}
	})
}

// 获取作者榜用户
export const topGet = () => {
	return axios({
		url: '/topUsers',
		method: "get",
	})
}


// 获取管理员
export const adminGet = () => {
	return axios({
		url: '/admin',
		method: "get",
	})
}


// 获取顶部导航栏标签
export const navGet = () => {
	return axios({
		url: '/nav',
		method: "get",
	})
}

// 获取文章类型标签
export const typesGet = () => {
	return axios({
		url: '/types',
		method: "get",
	})
}

// id获取名称
export const typeGetByID = (typeID) => {
	return axios({
		url: '/types',
		method: "get",
		params: {
			id: typeID
		}
	})
}

// 获取文章
export const articlesGet = () => {
	return axios({
		url: '/articles',
		method: "get",
	})
}

// id获取文章
export const articleGetByID = (artiID) => {
	return axios({
		url: '/articles',
		method: "get",
		params: {
			id: artiID
		}
	})
}


// 获取文章内容
export const articleGetTxt = (artiUrl) => {
	const artiUrlPath = artiUrl.split("http://localhost:3000/")[1]
	return axios({
		url: `/${artiUrlPath}`,
		method: "get",
	})
}
