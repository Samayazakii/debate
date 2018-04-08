import React from 'react';
import ChangeSecton from './changeSection.jsx';

// 首页 比赛之前的展示页面
let GetStart = React.createClass({
	getInitialState() {
	    return {
	    	shadow: false,
	        hidden: 0
	    };
	},
	handleClick () {
		this.setState({
			hidden: 1
		});
	},
	handleMouseOver () {
		this.setState({
			shadow: true
		});
	},
	handleMouseOut () {
		this.setState({
			shadow: false
		});
	},
	render () {
		return (
			<section>
				<div style={{
					width: '747px',
					position: 'absolute',
					left: this.state.hidden?'-747px':(window.innerWidth - 747)/2 + 'px',
					top: '240px',
					height: '148px',
					transition: 'left 0.6s',
					textAlign: 'center'
				}}>
				<p style={{
					fontSize: '60px',
					color: '#ffcc66',
					fontWeight: '600'
				}}>2018 华语辩论世界杯</p>
				</div>
				<div ref='button'
					onClick={this.handleClick}
					onMouseOver={this.handleMouseOver}
					onMouseOut={this.handleMouseOut}
					style={{
						width: '180px',
						height: '70px',
						background: '#ffcc33',
						borderRadius: '12px',
						position: 'absolute',
						zIndex: '10',
						transition: 'all 0.6s',
						boxShadow: this.state.shadow?'0px 0px 40px #fff':'',
						right: this.state.hidden?'-180px':(window.innerWidth - 180)/2 + 'px',
						cursor: 'pointer',
						top: '390px',
						display: this.state.hidden?'none':'block'
					}}>
					<input type='button' style={{
						width: '160px',
						height: '50px',
						margin: '10px 10px',
						cursor: 'pointer',
						backgroundColor: '#fff',
						backgroundImage: `url(${require('../static/imgs/get_in.png')})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						border: 'none',
						borderRadius: '12px'
					}} />
				</div>
				<ChangeSecton op={this.state.hidden}/>
			</section>
		)
	}
});

export default GetStart;

