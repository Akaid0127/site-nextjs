import AdminStore from "./modules/admin"
import ArticlesStore from "./modules/articles"
import NavStore from "./modules/nav"
import TypesStore from "./modules/types"
import UsersStore from "./modules/users"

class RootStore {
	constructor() {
		this.AdminStore = new AdminStore(this)
		this.ArticlesStore = new ArticlesStore(this)
		this.NavStore = new NavStore(this)
		this.TypesStore = new TypesStore(this)
		this.UsersStore = new UsersStore(this)
	}
}

export default RootStore