import React, { Component } from 'react'
import Image from 'next/image'
import userItemCss from './index.module.scss'

export default class UserItem extends Component {
	state = {
		// 初始值
		user: {
			id: 1,
			name: "橄榄小番茄",
			description: "优秀前端搬砖工",
			user_level: 5,
			user_img: "http://localhost:3000/user01.png"
		}
	}

	// next image loader函数
	myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	componentDidMount() {
		const { content } = this.props
		this.setState({
			user: content
		})
	}
	render() {
		const { user } = this.state
		return (
			<div className={userItemCss.UserItem}>
				<div className={userItemCss.userItemContent} >
					<div className={userItemCss.image}>
						<Image
							loader={this.myLoader}
							priority={true}
							src={user.user_img}
							alt={""}
							width={50}
							height={50}
							className={userItemCss.radius} />
					</div>
					<div className={userItemCss.detail}>
						<div className={userItemCss.name}>{user.name}</div>
						<div className={userItemCss.describle}>{user.description}</div>
					</div>
				</div>
			</div>
		)
	}
}

