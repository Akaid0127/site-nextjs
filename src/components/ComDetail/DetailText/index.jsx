import React, { Component } from 'react'
import detailTextCss from './index.module.scss'

export default class DetailText extends Component {
	render() {
		return (
			<div className={detailTextCss.DetailText}>
				<div className={detailTextCss.detailTextContent} >
					DetailText
				</div>
			</div>
		)
	}
}

