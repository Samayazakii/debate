import React from 'react';

let Title = React.createClass({
	render () {
		return (
			<h1 style={{
				color: '#fff',
				textAlign: 'center',
				fontSize: '26px'
			}}>
				华语辩论世界杯 | <img src={require('../static/imgs/logo.png')}
					style={{
						position: 'relative',
						width: '150px',
						top: '15px'
					}}
				/>
			</h1>
		)
	}
});

export default Title;