import React, { Component } from 'react'
import { useState } from 'react'
// antd图标
import { SearchOutlined, BellFilled, BulbOutlined, BulbFilled, DownOutlined } from '@ant-design/icons'
// mobx
import { inject, observer } from 'mobx-react'
// 组件
import DropDown from '../../components/Other/DropDown'
import homeNavCss from './index.module.scss'


//主题切换组件
function Theme() {
	const [isActive, setIsActive] = useState(false);
	const changeDark = () => {
		setIsActive(!isActive)
		document.documentElement.setAttribute('data-theme', 'dark')
		console.log('dark theme');
	}
	const changeLight = () => {
		setIsActive(!isActive)
		document.documentElement.setAttribute('data-theme', 'light');
		console.log('white theme');
	}
	return (
		<div className={homeNavCss.theme}>
			<span >
				{isActive ?
					<BulbOutlined onClick={changeLight} className={homeNavCss.icon} /> :
					<BulbFilled onClick={changeDark} className={homeNavCss.icon} />}
			</span>
			{/* <span onClick={this.changeTheme}><BulbOutlined className={homeNavCss.icon} /></span> */}
		</div>
	);
}

// 顶部导航栏组件
@inject("NavStore")
@observer
class HomeNav extends Component {
	state = {
		// nextjs不支持动态载入，因为需要计算渲染时间
		//  imageLogo: logoLigher,
		tagList: [],
	}

	componentDidMount() {
		const { NavStore } = this.props
		NavStore.getNavArr()
			.then((result) => {
				this.setState({
					tagList: result ? result : NavStore.navArr
				})
			})

	}

	render() {
		const { tagList } = this.state

		return (
			<div className={homeNavCss.HomeNav}>
				<div className={homeNavCss.homeNavContent}>
					<div className={homeNavCss.log}>
						{/* <Image src={imageLogo} alt="" height={22} />  */}
						<div className={homeNavCss.img} />
					</div>

					<div className={homeNavCss.tag}>
						{
							tagList.map((item) => {
								return (
									<div className={homeNavCss.tagItem} key={item.id}>
										{item.nav_item}
										{
											item.nav_mark === true ? (
												<div className={homeNavCss.stamp}>{item.mark_name}</div>
											) : null
										}
									</div>
								)
							})
						}
					</div>

					<div className={homeNavCss.drop}>
						<DropDown txtName={"所有标签"} dropList={tagList} dropItemName={"nav_item"}></DropDown>
					</div>

					<div className={homeNavCss.search}>
						<input type="text" placeholder="探索稀土掘金" />
						<span><SearchOutlined /></span>
					</div>

					<div className={homeNavCss.add}>
						<button>创作者中心</button>
						<div className={homeNavCss.sel}>
							<div className={homeNavCss.tri}></div>
						</div>
					</div>

					<div className={homeNavCss.bell}>
						<span ><BellFilled className={homeNavCss.icon} /></span>
					</div>

					<Theme />
				</div>
			</div >
		)
	}
}
export default HomeNav