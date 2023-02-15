import React, { Component } from 'react'
import dropCss from "./index.module.scss"
import { DownOutlined } from '@ant-design/icons'

// 下拉组价
export default class DropDown extends Component {
	constructor(props) {
		super(props);
		this.ListRef = React.createRef();
	}

	openDrop = () => {
		const listHeight = this.ListRef.current.style.height
		this.ListRef.current.style.height = (listHeight === "180px" ? "0" : "180px")
	}

	render() {
		const { txtName, dropList, dropItemName } = this.props
		return (
			<div className={dropCss.drop}>
				<div className={dropCss.dropContent}>
					<div className={dropCss.select} onClick={this.openDrop}>
						<span>{txtName}</span>
						<DownOutlined className={dropCss.downOutlined} />
					</div>
					<div className={dropCss.optionsList} ref={this.ListRef}>
						{/* 变量拼接 eval()*/}
						{
							dropList.map((item) => {
								return <div className={dropCss.option} key={item.id}>{eval("item." + dropItemName)}</div>
							})
						}
					</div>
				</div>

			</div>
		)
	}
}
