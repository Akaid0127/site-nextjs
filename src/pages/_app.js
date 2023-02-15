// 引入Mobx
import { Provider } from 'mobx-react'
import RootStore from '../stores'

import '@/styles/globals.scss'
import './index.scss'

// 将 rootStore 声明在App创建之外
const rootStore = new RootStore();

export default function App({ Component, pageProps }) {
	return (
		// 通过结构赋值传递store
		<Provider {...rootStore}>
			{/* 根标签 */}
			<Component {...pageProps} />
		</Provider>
	)
}



