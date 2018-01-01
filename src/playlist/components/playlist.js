import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';

class Playlist extends Component {
	render(){
		const playlist = this.props.data.categories[0].playlist
		console.log(this.props.data);
		return(
			<div className="Playlist">
				{
					// Por cada elemento de playlist, me regresa un Media
					playlist.map((item) => {
						
						//ECMAScript 6
						//return <Media title={item.title} key={item.id} cover={item.cover} type={item.type} />

						//ECMAScript 7
						return <Media {...item} key={item.id} />

						
					})
				}
				
			</div>

		)
	}
}

export default Playlist;
