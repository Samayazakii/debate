import React from 'react';

let Audio = React.createClass({
	render () {
		return (
			<audio src={this.props.audioSrc} style={{
				display: 'none'
			}}>
				您的浏览器不支持 audio 标签。
			</audio>
		)
	}
});

export default Audio;

