import React from 'react';

let SectionPic = React.createClass({
	render () {
		return (
			<div style={{
				width: '380px',
				height: '220px',
				borderRadius: '20px',
				overflow: 'hidden',
				marginTop: '80px',
				background: '#fcd600',
				transition: 'box-shadow 2s',
				boxShadow: parseInt(this.props.timer) == 30?'0px 0px 100px #fff':'none',
			}}>
				<div style={{
					width: '340px',
					height: '180px',
					margin: '20px 20px',
					borderRadius: '20px',
					background: '#fff',
					textAlign: 'center',
					lineHeight: '180px',
					fontSize: '75px',
					fontWeight: 'bold',
					color: this.props.timer <= 10?'#e63246':'#000' 
				}}>
					{this.props.timer ? this.props.timer + 's' : ''}
				</div>
			</div>
		)
	}
});

export default SectionPic;

