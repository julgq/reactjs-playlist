import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {

	 /*---------- Utilizar el state en consturctor en ECMAScript 6 -------------
	constructor(props) {
		super(props)
		this.state = {
			title: props.title
		}
	}

	*/

	//---------- Utilizar el state con props en ECMAScript 7 -------------

	state = {
		title: this.props.title,
		cover : this.props.cover,
		author: this.props.author
	}

	/* 

	---------- Utilizar el props en ECMAScript 6 -------------


	handleClick(event){
		console.log(this.props.title)
	}

	---------- FIN Utilizar el props en ECMAScript 6 -------------
	*/

	// Utilizar el props en ECMAScript 7

	handleClick = (event) => {
		console.log(this.props.title);

		// cambiar state de title:

		this.setState({
			title: 'Blockchain Video'
		});

		console.log(this.state.title);

	}

	render(){
		console.log(this.props.title)
		const styles = {
			container: {
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px solid red'
			} 
		}
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img 
					src={this.state.cover} 
					alt="" 
					width={260} 
					height={160}
					className="Media-image"
					 />
					<h3 className="Media-title">{this.state.title}</h3>
					<p  className="Media-author">{this.state.author}</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['video', 'audio']),

}

export default Media;