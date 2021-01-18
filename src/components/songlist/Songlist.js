import './Songlist.css';
import React from 'react';
import Database from '../../database/songlist/Database.js';
import Songlistrow from './Songlistrow.js';

class Songlist extends React.Component {

	constructor() {
		super();

		this.state = {
			songs: Database
		};
	}

	render() {
		return (
			<div>
				<table class="songlistTable">
					<thead>
						<tr>
							<th>Title</th>
							<th>Artist</th>
							<th>Genre</th>
							<th>Rating</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.state.songs.map(song => <Songlistrow key={song.id} song={song} /> )}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Songlist;