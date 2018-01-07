import React from 'react';
import './progress-bar.css'
function ProgressBar(props){
	return (
		<div className="ProgressBar">
			<input 
				type="range"
				min={0}
				max={500}
				value={props.value}
				onChange={props.handleProgressChange}
			/>
		</div>
	)
}

export default ProgressBar