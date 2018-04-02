import React from 'react';

let space = '&nbsp&nbsp&nbsp&nbsp';

function renderImg (targetImg) {
	if (({}).toString.call(targetImg) == '[object Array]') {
		return (
			<div style={{
				width: '100%',
				height: '180px',
				marginTop: '30px',
				backgroundSize: 'cover',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
				<img style={{
					width: '90px',
					height: '90px',
				}} src={targetImg[0]} />
				<img style={{
					width: '90px',
					height: '90px',
				}} src={targetImg[1]} />
				<img style={{
					width: '90px',
					height: '90px',
				}} src={targetImg[2]} />
				<img style={{
					width: '90px',
					height: '90px',
				}} src={targetImg[3]} />
			</div>
		);
	} else {
		return (
			<div style={{
				width: '100%',
				height: '180px',
				marginTop: '30px',
				backgroundImage: this.props.img? `url(${this.props.img})`: '',
				backgroundColor: this.props.img? '': infObj.normalBg,
				backgroundSize: 'cover',
			}}>
			</div>
		);
	}
}

let TeamInf = React.createClass({
	componentDidMount () {
		var self = this;
		
		resizeTop(self);
		
		window.addEventListener('resize', () => {	
			resizeTop(self);
		});
	},
	render () {
		let teamNumber = this.props.teamNumber;
		let timer = this.props.timer !== '' ? (isNaN(Number(this.props.timer)) ? this.props.timer : this.props.timer + 's') : '';
		let infObj = {};
		
		if (teamNumber == 0) {
			infObj.fontColor = '#e63246';
			infObj.topBg = '#ed7071';
			infObj.picBg = '#c43141';
			infObj.normalBg = '#e63246';
			infObj.cssLR = {left: '58px'};
		} else {
			infObj.fontColor = '#259197';
			infObj.topBg = '#8eced1';
			infObj.picBg = '#259197';
			infObj.normalBg = '#2fb6bc';
			infObj.cssLR = {right: '58px'};
		}

		return (
			<section ref='section'
				style={infObj.cssLR}
				className='team-inf'>
				<h2 style={{
					color: infObj.fontColor
				}}
					dangerouslySetInnerHTML = {{__html: teamNumber == 0?`正${space}方`:`反${space}方`}}
				></h2>
				<div style={{
					width: '160px',
					height: '40px',
					lineHeight: '40px',
					padding: '5px 10px',
					fontWeight: 'bold',
					background: infObj.topBg,
					borderRadius: '20px',
					fontSize: '14px',
					textAlign: 'center',
					color: '#fff'
				}}>{this.props.name}</div>
				<div className='triangle-out'>
					<div className='triangle-up' style={{
						borderBottom: `140px solid ${infObj.normalBg}`
					}}>
					</div>
				</div>
				<div style={{
					width: '100%',
					height: '100px',
					overflow: 'hidden',
					background: infObj.picBg
				}}>
					<div style={{
						width: '150px',
						height: '70px',
						fontWeight: 'bold',
						background: '#e1e1e1',
						margin: '10px 10px',
						padding: '5px 5px'
					}}>
					{this.props.opinion}
					</div>
				</div>	
				{/* 照片区域 */}
				
				{
					({}).toString.call(this.props.img) == '[object Array]' &&
					<div style={{
						width: '100%',
						height: '180px',
						marginTop: '30px',
						backgroundSize: 'cover',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
						<img style={{
							width: '90px',
							height: '90px',
						}} src={this.props.img[0]} />
						<img style={{
							width: '90px',
							height: '90px',
						}} src={this.props.img[1]} />
						<img style={{
							width: '90px',
							height: '90px',
						}} src={this.props.img[2]} />
						<img style={{
							width: '90px',
							height: '90px',
						}} src={this.props.img[3]} />
					</div>
				}

				{
					({}).toString.call(this.props.img) != '[object Array]' &&
					<div style={{
						width: '100%',
						height: '180px',
						marginTop: '30px',
						backgroundImage: this.props.img? `url(${this.props.img})`: '',
						backgroundColor: this.props.img? '': infObj.normalBg,
						backgroundSize: 'cover',
					}}>
					</div>
				}

				{/* 下方计时盒子 */}
				<div style={{
					width: '100%',
					height: '72px',
					borderRadius: '20px',
					marginTop: '28px',
					overflow: 'hidden',
					transition: 'box-shadow 2s',
					boxShadow: parseInt(this.props.timer) == 30?'0px 0px 100px #fff':'',
					background: infObj.normalBg
				}}>
					<div style={{
						width: '160px',
						height: '50px',
						lineHeight: '50px',
						fontWeight: 'bold',
						fontSize: '24px',
						borderRadius: '10px',
						margin: '11px 10px',
						textAlign: 'center',
						color : this.props.timer <= 10? '#e63246': '#000',
						background: '#e1e1e1'
					}}>{timer}
					</div>
				</div>
			</section>
		)
	}
});

function resizeTop (self) {
	let section = self.refs.section;
	let height = getComputedStyle(section,null)['height'];
	section.style.top = (window.innerHeight - parseFloat(height)) / 2 + 'px';
}

export default TeamInf;