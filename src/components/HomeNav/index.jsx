import React, { Component } from 'react'
import homeNavCss from './index.module.scss'

export default class HomeNav extends Component {
	render() {
		return (

			<div className={homeNavCss.HomeNav}>
				<div className={homeNavCss.homeNavContent}>
					HomeNav
				</div>
			</div>
		)
	}
}
