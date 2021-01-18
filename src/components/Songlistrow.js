import React from 'react';

class Songlistrow extends React.Component {

	constructor(props) {
		super();

		this.state = {
			song: props.song
		};
	}

	render() {
		return (
			<tr>
				<td>{this.state.song.title}</td>
				<td>{this.state.song.artist}</td>
				<td>{this.state.song.genre}</td>
				<td>{this.state.song.rating}</td>
				<td></td>
			</tr>
		);
	}
}

export default Songlistrow;