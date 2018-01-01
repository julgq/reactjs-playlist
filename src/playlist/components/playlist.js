import React, { Component } from 'react';
import Media from './media.js';

class Playlist extends Component {
	render(){
		const playlist = this.props.data.categories[0].playlist
		console.log(this.props.data);
		return(
			<div>
				{
					// Por cada elemento de playlist, me regresa un Media
					playlist.map((item) => {
						
						//ECMAScript 6
						return <Media title={item.title} key={item.id} cover={item.cover} type={item.type} />

						

					})
				}
				
			</div>

		)
	}
}

export default Playlist;
