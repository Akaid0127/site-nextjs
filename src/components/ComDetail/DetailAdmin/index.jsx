import React, { Component } from 'react'
// nextImage
import Image from 'next/image'
import detailAdminCss from './index.module.scss'

// 详情页管理员卡片组价
export default class DetailAdmin extends Component {
	state = {
		currentAdmin: {
			id: 1,
			name: "高启强",
			position: "CMS系统管理员",
			admin_img: "http://localhost:3000/admin01.png"
		}
	}

	// nextImage loader函数
	myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	render() {
		const { currentAdmin } = this.state
		return (
			<div className={detailAdminCss.DetailAdmin}>
				<div className={detailAdminCss.detailAdminContent} >
					<div className={detailAdminCss.image}>
						<Image
							className={detailAdminCss.radius}
							loader={this.myLoader}
							priority={true}
							src={currentAdmin.admin_img}
							alt={""}
							width={50}
							height={50}
						/>
					</div>
					<div className={detailAdminCss.detail}>
						<div className={detailAdminCss.name}>{currentAdmin.name}</div>
						<div className={detailAdminCss.describle}>
							{currentAdmin.position}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

