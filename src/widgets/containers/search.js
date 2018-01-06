import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
		state = {
			value: 'Luis Fonsi'
		}
		handleSubmit = (event) => {
			event.preventDefault();
			console.log(this.input.value, 'submit');
		}
		/* Aquí llega el input por medio de ref */
		setInputRef = element => {
			this.input = element;
		}
		/* Con esta funcion llevamos el valor a una variable */
		handleInputChange = event => {
			
			this.setState({
				//value: event.target.value

				value: event.target.value.replace(' ','-')
			})
		}

  render() {
    return (
     	<Search
     		setRef={this.setInputRef}
     		handleSubmit={this.handleSubmit}
     		handleChange={this.handleInputChange}
     		value={this.state.value}
     	 />
    )
  }
}

export default SearchContainer;