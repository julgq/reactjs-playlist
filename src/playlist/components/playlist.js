import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';

class Playlist extends Component {
	render(){

		const categories = this.props.data.categories
		console.log(this.props.data);
		return(

			<div className="Playlist">
				<Play size={100} color="red" />
				{
					// Por cada elemento de playlist, me regresa un Media
					categories.map((item) => {
						
						//ECMAScript 6
						//return <Media title={item.title} key={item.id} cover={item.cover} type={item.type} />

						//ECMAScript 7

						return (
							<div key={item.id} className="PlayListBox">
							<h2>{item.title}</h2>
							<h4>{item.description}</h4>
							{
								 
								//console.log(item.playlist)
								item.playlist.map((element) => {

									return (
										
										<Media {...element} key={element.id} />
										
									)
								})

							}
							</div>
							)
							
						
						

						
					})
				}
				
			</div>

		)
	}
}

export default Playlist;
