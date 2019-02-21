import React from 'react';

const weatherForm= (props) => {
	return (
		<div>
			<input className='weather-form' onChange={props.onInput} placeholder='Enter city here...' />
			<button onClick={props.userClick} >Search</button>
		</div>
	)
}

export default weatherForm;
