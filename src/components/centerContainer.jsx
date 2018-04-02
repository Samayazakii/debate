import React from 'react';

let CenterContainer = React.createClass({
	componentDidMount() {
	    var self = this;
		
		resizeTop(self);
		
		window.addEventListener('resize', () => {	
			resizeTop(self);
		});
	},
	render () {
		return (
			<section ref='section' style={{
				width: '378px',
				margin: '0 auto'
			}}>
				{this.props.children}
			</section>
		)
	}
});

function resizeTop (self) {
	let section = self.refs.section;
	let height = getComputedStyle(section,null)['height'] - 100;
	
	section.style.marginTop = (window.innerHeight - parseFloat(height)) / 2.6 + 'px';
}

export default CenterContainer;
