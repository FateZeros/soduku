import React, { Component } from 'react'

import styles from './game.scss'

import Cell from './cell'

export default class Game extends Component {

	handleStart = () => {
		console.log('start')
	}

	handleRestart = () => {
		console.log('restart')
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.sudoContent}>
					<table>
						<tbody>

						</tbody>
					</table>
				</div>
				<div className={styles.diffCheck}>
					难度选择：
					<input type="radio" value="easy" name="diff" />简单
					<input type="radio" value="medium" name="diff" />中等
					<input type="radio" value="hard" name="diff" />困难
				</div>
				<div className={styles.controlBtn}>
					<button onClick={this.handleStart}>开始</button>
					<button onClick={this.handleRestart}>重新开始</button>
				</div>
			</div>
		)
	}
}