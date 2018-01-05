import React from 'react';
import './search.css';


/*
// Esta es la forma tradicional
 function Search(props) {
 	return (

 	)
 }

*/

/* Tambien puedes usar arrow functions
Y esa forma no necesita el return ya que lo trae por si solo
*/

const Search = (props) => (
	
	<form action="" className="Search">
		<input type="text" className="Search-input" />
	</form>
	
	
)

export default Search