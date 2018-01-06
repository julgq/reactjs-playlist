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
	
	<form 
		action="" 
		className="Search"
		onSubmit={props.handleSubmit}
		>
	<input 
		ref={props.setRef}
		type="text" 
		className="Search-input" 
		placeholder="Busca tu video favorito"  
		name="search" 
		//defaultValue="Luis Fonsi"
		/*  el value no se puede modificar a menos que hagas otra operacion
		value="Luis fonsi"
		*/
		onChange={props.handleChange}
		value={props.value}
	/>
	</form>
	
	
)

export default Search