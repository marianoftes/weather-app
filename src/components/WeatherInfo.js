import React from 'react';

const weatherInfo= (props) => {
	return (
		<div>
			<p>Location:<span className='info-text'> {props.name}</span></p>
			<p>Temperature:<span className='info-text'> {props.temp} °</span></p>
			<p>Humidity:<span className='info-text'> {props.humidity}%</span></p>
			<p>Description:<span className='info-text'> {props.description}</span></p>
		</div>
	)
}

export default weatherInfo;