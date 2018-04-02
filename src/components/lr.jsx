import React from 'react';
import SectionPic from './sectionPic.jsx';

let LR = React.createClass({
	render () {
		return (
			<img 
			style={{
				transform: `rotate(${this.props.rotate})`,
				position: 'absolute',
				top: 0,
				left: this.props.left,
				cursor: 'pointer'
			}}
			src={require('../static/imgs/lr.png')}>
			</img>
		)
	}
});

export default LR;
