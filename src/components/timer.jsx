import React from 'react';
import ReactDOM from 'react-dom';

import Audio from './audio.jsx';

let Count = React.createClass({
	handleAudio () {
		ReactDOM.findDOMNode(this.refs.audio).play();
	},
	componentDidMount() {
		let self = this;
		
		let timer = setInterval(function () {
	    	if ((self.props.timerA == 30 || self.props.timerB == 30 || self.props.evTimer == 30) && self.props.time == '30s') {
	    		self.handleAudio();
	    	} else if ((self.props.timerA == 0.1 || self.props.timerB == 0.1 || self.props.evTimer == 0.1) && self.props.time == '0s') {
	    		self.handleAudio();
	    	}
	    },100);
	},
	render () {
		return (
			<div onClick={this.handleAudio} 
				style={{
					width: '40px',
					height: '40px',
					background: '#fdd700',
					float: 'left',
					color: '#fff',
					textAlign: 'center',
					lineHeight: '40px',
					borderRadius: '100%',
					marginRight: '20px',
					cursor: 'pointer'
				}}>
				<Audio audioSrc={this.props.time == '30s' ? '../static/music/30s.wav': '../static/music/0s.wav'} ref='audio'/>
				{this.props.time}
			</div>
		)
	}
});

// 正方反方两个按钮点击
let StartCount = React.createClass({
	render () {
		let bgUrl = this.props.teamNumber == 0 ? 'SWICH_to_A' : 'SWICH_to_N';
		let marginRight = this.props.teamNumber == 0 ? '20px' : '0px';
		
		return (
			<div value={this.props.teamNumber} style={{
				width: '110px',
				height: '30px',
				marginTop: '5px',
				background: 'url(' + require(`../static/imgs/${bgUrl}.png`) + ')',
				float: 'left',
				color: '#fff',
				textAlign: 'center',
				lineHeight: '30px',
				fontSize: '18px',
				fontWeight: 'bold',
				cursor: 'pointer',
				opacity: this.props.timer != '' ? '1' : '0',
				marginRight: marginRight
			}}
				dangerouslySetInnerHTML = {{__html: this.props.teamNumber == 0
					? '正&nbsp&nbsp方'
					: '反&nbsp&nbsp方'}}>
			</div>
		)
	}
});

let Timer = React.createClass({	
	render () {
		return (
			<div style={{
				width: '360px',
				margin: '0 auto',
				marginTop: '44px'
			}}>
				<StartCount stop={this.props.stop}
					timer={this.props.timerA}
					teamNumber={0}/>
				<Count time='30s'
					timerA={this.props.changeTimerA}
					timerB={this.props.changeTimerB}
					evTimer={this.props.changeEvTimer}/>
				<Count time='0s'
					timerA={this.props.changeTimerA}
					timerB={this.props.changeTimerB}
					evTimer={this.props.changeEvTimer}/>
				<StartCount stop={this.props.stop}
					timer={this.props.timerB}
					teamNumber={1}/>
			</div>
		)
	}
});

export default Timer;
