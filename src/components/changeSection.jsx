import React from 'react';

import LR from './lr.jsx';
import SectionPic from './sectionPic.jsx';
import Timer from './timer.jsx';
import TeamInf from './teamInf.jsx';

// 申论 质询
let SpecEvent = React.createClass({
	render () {
		return (
			<div value={this.props.type} style={{
				width: '110px',
				height: '30px',
				marginTop: this.props.type?'5px':'10px',
				background: this.props.type?'#ed7071':'#8fced1',
				float: this.props.type?'left':'right',
				color: '#fff',
				textAlign: 'center',
				lineHeight: '30px',
				fontSize: '18px',
				fontWeight: 'bold',
				cursor: 'pointer',
				position: 'relative',
				left: this.props.type?'9px':'-9px',
			}}
				dangerouslySetInnerHTML = {{__html:this.props.type?'申&nbsp&nbsp论':'质&nbsp&nbsp询'}}>
			</div>
		)
	}
});

let ChangeSecton = React.createClass({
	getInitialState() {
		// allTimer 是在大屏幕上面显示的 timer
	    return {
	    	timerA: config.inf[0].timerA,
	    	timerB: config.inf[0].timerB,
	    	allTimer: config.inf[0].allTimer,
	    	evTimer: false,
	    	event: config.ev,
			count: 0
	    };
	},
	lastAction: null,
	timer : null,
	evStarted: 0,
	isRunning: false,
	handleStartCount (e) {
		// 点击开始计时
		let value = parseInt(e.target.getAttribute('value'));
		let inf = config.inf[this.state.count];
		let stop = inf.unlimited ? 1 : (inf.timerA == inf.timerB && inf.timerA * 2 == inf.allTimer ? 1 : 0);

		// bug: 一方的时间走完，会继续消耗另一方没走完的时间
		
		if ((value == 0 || value == 1) && e.target.style.opacity == '1') {
			if (!this.timer) {
				// 最初开始计时
				this.lastAction = value;
				this.startTimer(inf, value);	
				this.isRunning = true;
			} else if (this.timer && this.isRunning) {
				// 暂停
				this.lastAction = value;
				this.clearTimer();

			} else if (this.timer && stop == 1) {
				if (this.lastAction != value) {
					// 下次开始计时的一方与当前的不是同一方
					this.lastAction = value;
					this.setState({
						stop: 0
					});
					this.clearTimer();
					this.startTimer(inf, value);	
				}  else {
					// 单方暂停，下次开始计时的一方与当前的不是同一方
					
					return;
				}
			}
		}
	},
	handleSpecEvent (e) {
		let value = parseInt(e.target.getAttribute('value'));
		let ev = this.state.event[value];
		
		if ((this.evStarted && ev.id) > 0) {
			alert("暂停中 点击确认继续计时");
			
			return ;
		}

		if (this.timer && this.state.allTimer == 0) {
			this.evStarted |= ev.id;
			this.setState({allTimer: ev.time});
			this.clearTimer();
			this.startTimer(ev, value);
		}
	},
	startTimer (inf, value) {
		let self = this;
		
		this.timer = setInterval(function () {
			if (inf.unlimited) {
				if (inf.timerA == inf.allTimer) {
					if (value == 0 && self.state.timerA > 0) {
						self.state.timerA = handleNumber(self.state.timerA - 0.1);
						self.state.allTimer = handleNumber(self.state.allTimer - 0.1);
					}
					self.setState({
						timerA: self.state.timerA,
						allTimer: self.state.allTimer
					});
				} else {
					if (value == 1 && self.state.timerB > 0) {
						self.state.timerB = handleNumber(self.state.timerB - 0.1);
						self.state.allTimer = handleNumber(self.state.allTimer - 0.1);
					}
					self.setState({
						timerB: self.state.timerB,
						allTimer: self.state.allTimer
					});
				}
				//...............特殊事件..............
			} else if (inf.spec) {
				if (self.state.allTimer > 0) {
					self.state.allTimer = handleNumber(self.state.allTimer - 0.1);
				}
				self.setState({
					allTimer: self.state.allTimer,
					evTimer: self.state.allTimer
				});
				//...............双方有共同事件..............
			} else if (inf.timerA == inf.timerB && inf.timerB == inf.allTimer) {
				if (self.state.timerA > 0) {
					self.state.timerA = handleNumber(self.state.timerA - 0.1);
					self.state.timerB = handleNumber(self.state.timerB - 0.1);
					self.state.allTimer = handleNumber(self.state.allTimer - 0.1);
					self.setState({
						timerA: self.state.timerA,
						timerB: self.state.timerB,
						allTimer: self.state.allTimer
					});
				}
			} else if (inf.timerA == inf.timerB && inf.allTimer == inf.timerA * 2) {
				// 自由辩论

				if (value == 0) {
					if (self.state.timerA > 0) {
						//console.log(handleNumber(self.state.timerA - 0.1) + '----',handleNumber(self.state.allTimer - 0.1));
						self.state.timerA = handleNumber(self.state.timerA - 0.1);	
						self.state.allTimer = handleNumber(self.state.allTimer - 0.1);	
						self.setState({
							timerA: self.state.timerA,
							allTimer: self.state.allTimer
						});
					} else {
						// 正方时间到
						self.setState({
							stop: 0
						});
						self.clearTimer();
						// self.startTimer(inf,1);	
					}
				} else if (value == 1) {
					if (self.state.timerB > 0) {
						self.state.timerB = handleNumber(self.state.timerB - 0.1);
						self.state.allTimer = handleNumber(self.state.allTimer - 0.1);
						self.setState({
							timerB: self.state.timerB,
							allTimer: self.state.allTimer
						});
					} else {
						// 反方时间到
						self.setState({stop: 0});
						self.clearTimer();
					}
				}
			} else {
				// 单方辩论

				if (value == 0 && self.state.timerA > 0) {
					self.state.timerA = handleNumber(self.state.timerA - 0.1);
					self.state.allTimer = handleNumber(self.state.allTimer - 0.1);
					self.setState({
						timerA: self.state.timerA,
						allTimer: self.state.allTimer
					});
				} else if (value == 1 && self.state.timerB > 0) {
					self.state.timerB = handleNumber(self.state.timerB - 0.1);
					self.state.allTimer = handleNumber(self.state.allTimer - 0.1);
					self.setState({
						timerB: self.state.timerB,
						allTimer: self.state.allTimer
					});
				}
			}
		}, 100);
		// }, 5);
	},
	clearTimer () {
		clearInterval(this.timer);
		this.timer = null;
	},
	handleChangeSectionClick (e) {
		// 事件委托 左右箭头点击的动作
		let target = e.target.style.left;
		let count = this.state.count;

		if (target == this.refs.img1.props.left) {
			if (count > 0) {
				this.clearTimer();
				this.setState({
					count: --count,
					timerA: config.inf[count].timerA,
					timerB: config.inf[count].timerB,
					allTimer: config.inf[count].allTimer,
					evTimer: false
				});
			}
		} else if (target == this.refs.img2.props.left) {
			if (count < config.inf.length - 1) {
				this.clearTimer();
				this.setState({
					count: ++count,
					timerA: config.inf[count].timerA,
					timerB: config.inf[count].timerB,
					allTimer: config.inf[count].allTimer,
					evTimer: false
				});
			}
		}
	},
	render () {
		let count = this.state.count;
		
		return (
			<div onClick={this.handleStartCount} style={{
				opacity: this.props.op,
				transition: 'opacity 2s',
			}}>
				{/* 左边队伍信息 */}
				<TeamInf timer={this.state.timerA}
					img={config.inf[count].imgA}
					teamNumber={0}
					name={config.team[0].name}
					opinion={config.team[0].opinion}/>
				{/* 中间的箭头和流程 */}
				<div onClick={this.handleChangeSectionClick}>
					<div style={{
						width: '100%',
						height: '30px',
						marginTop: '58px',
						position: 'relative'
					}}>
						<LR ref='img1' rotate='0deg' left='20px'/>
						<p style={{
							textAlign: 'center',
							width: '100%',
							height: '30px',
							fontSize: '26px',
							lineHeight: '30px',
							color: '#fff'
						}}>{config.inf[count].name}
						</p>
						<LR ref='img2' rotate='180deg' left='330px' />
					</div>	
					{/* 中间的大计时器 */}
					<SectionPic timer={this.state.allTimer} />
					{/* 小计时器 */}
					<Timer changeTimerA={this.state.timerA}
						changeTimerB={this.state.timerB}
						changeEvTimer={this.state.evTimer}
						timerA={config.inf[count].timerA}
						timerB={config.inf[count].timerB} />
					{/* 下方两个按钮 */}
					<div onClick={this.handleSpecEvent}>
						<SpecEvent type={0}/>
						<SpecEvent type={1}/>
					</div>
				</div>
				{/* 右边队伍信息 */}
				<TeamInf count={this.state.count}
					timer={this.state.timerB}
					img={config.inf[count].imgB}
					teamNumber={1}
					name={config.team[1].name}
					opinion={config.team[1].opinion}/>
			</div>
		)
	}
});

// 控制 timer 数字显示
function handleNumber (num) {
	let n = Math.round(num * 10) / 10;
    
    if (n.toString().indexOf('.') >= 0) {
		return n;
	} else {
		return n + '.0';
	}
}

export default ChangeSecton;
