import React, { Component } from 'react'
import detailAdminCss from './index.module.scss'

export default class DetailAdmin extends Component {
	render() {
		return (
			<div className={detailAdminCss.DetailAdmin}>
				<div className={detailAdminCss.detailAdminContent} >
					DetailAdmin
				</div>
			</div>
		)
	}
}

