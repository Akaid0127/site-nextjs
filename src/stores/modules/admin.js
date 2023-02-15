import { observable } from 'mobx'

class AdminStore {
	@observable adminArr = []
	
	constructor(rootStore) {
		this.rootStore = rootStore
	}
}

export default AdminStore