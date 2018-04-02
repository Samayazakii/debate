import React from 'react';

let Title = React.createClass({
	render () {
		return (
			<h1 style={{
				color: '#fff',
				textAlign: 'center',
				fontSize: '30px'
			}}>
				金士顿 | <img src={require('../static/imgs/logo.png')}
					style={{
						position: 'relative',
						width: '150px',
						top: '35px'
					}}
				/>
			</h1>
		)
	}
});

export default Title;