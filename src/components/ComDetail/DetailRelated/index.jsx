import React, { Component } from 'react'
import detailRelatedCss from './index.module.scss'

export default class DetailRelated extends Component {
	render() {
		return (
			<div className={detailRelatedCss.DetailRelated}>
				<div className={detailRelatedCss.detailRelatedContent} >
					DetailRelated
				</div>
			</div>
		)
	}
}

