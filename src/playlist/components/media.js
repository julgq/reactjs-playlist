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
		title: this.props.title
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
					<img src="./images/covers/bitcoin.jpg" alt="" width={260} height={160} />
					<h3>{this.state.title}</h3>
					<p>Hey baby</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;