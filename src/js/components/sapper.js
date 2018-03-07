import { Component } from 'react';
import { Board } from './board';

export default class Sapper extends Component {
	render() {
		return (
			<div>
				<button
					onClick={ e => { this.props.createGame() } }></button>
				{ this.props.isStertGame && (
					<Board
						bombsList={ this.props.bombsList }
						selectCellHandler={ () => {} } />
				) }
			</div>
		);
	}
}