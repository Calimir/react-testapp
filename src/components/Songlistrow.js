import React from 'react';

class Songlistrow extends React.Component {

	render() {
		return (
			<tr>
				<td>{this.props.song.title}</td>
				<td>{this.props.song.artist}</td>
				<td>{this.props.song.genre}</td>
				<td>{this.props.song.rating}</td>
				<td></td>
			</tr>
		);
	}
}

export default Songlistrow;