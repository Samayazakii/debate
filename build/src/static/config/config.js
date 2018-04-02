// 需要添加一个变量作为整体的背景
// 界面中 队伍的照片四个 div
var config = {
	// 队伍信息
	team: [{
		name: '北京邮电大学辩论队',
		opinion: '有必要引入成年人电竞防沉迷机制'
	},{
		name: '北京高校明星联队',
		opinion: '没有必要引入成年人电竞防沉迷机制'
	}],
	// 辩论流程
	inf: [{
		name: '正方立论',
		imgA: '../imgs/team_a/正方一辩王丹頔.jpg',
		imgB: '',
		timerA: '180',
		timerB: '',
		allTimer: '180'
	},{
		name: '反方质询', 
		imgA: '../imgs/team_a/正方一辩王丹頔.jpg',
		imgB: '../imgs/team_b/反方四辩刘一枫.jpg',
		timerA: '90',
		timerB: '90',
		allTimer: '90'
	},{
		name: '反方立论',
		imgA: '',
		imgB: '../imgs/team_b/反方一辩刘淦.jpg',
		timerA: '',
		timerB: '180',
		allTimer: '180'
	},{
		name: '正方质询', 
		imgA: '../imgs/team_a/正方四辩李阳.jpg',
		imgB: '../imgs/team_b/反方一辩刘淦.jpg',
		timerA: '90',
		timerB: '90',
		allTimer: '90'
	},{
		name: '反方驳辩',
		imgA: '',
		imgB: '../imgs/team_b/反方二辩陈采薇.jpg',
		timerA: '',
		timerB: '120',
		allTimer: '120'
	},{
		name: '正方驳辩',
		imgA: '../imgs/team_a/正方二辩黄旭茵.jpg',
		imgB: '',
		timerA: '120',
		timerB: '',
		allTimer: '120'
	},{
		name: '对辩',
		imgA: '../imgs/team_a/正方四辩李阳.jpg',
		imgB: '../imgs/team_b/反方四辩刘一枫.jpg',
		timerA: '90',
		timerB: '90',
		allTimer: '180'
	},{
		name: '正方盘问', 
		imgA: '../imgs/team_a/正方三辩赵齐.jpg',
		imgB: '../imgs/team_b/反方一二四.jpg',
		timerA: '150',
		timerB: '150',
		allTimer: '150',
	},{
		name: '反方盘问', 
		imgA: '../imgs/team_a/正方一二四.jpg',
		imgB: '../imgs/team_b/反方三辩郭祎名.jpg',
		timerA: '150',
		timerB: '150',
		allTimer: '150',
	},{
		name: '正方小结',
		imgA: '../imgs/team_a/正方三辩赵齐.jpg',
		imgB: '',
		timerA: '90',
		timerB: '',
		allTimer: '90'
	},{
		name: '反方小结',
		imgA: '',
		imgB: '../imgs/team_b/反方三辩郭祎名.jpg',
		timerA: '',
		timerB: '90',
		allTimer: '90'
	},{
		name: '自由辩论',
		imgA: '../imgs/team_a/正方合照.jpg',
		imgB: '../imgs/team_b/反方合照.jpg',
		timerA: '240',
		timerB: '240',
		allTimer: '480'
	},{
		name: '反方总结',
		imgA: '',
		imgB: '../imgs/team_b/反方四辩刘一枫.jpg',
		timerA: '',
		timerB: '210',
		allTimer: '210'
	},{
		name: '正方总结',
		imgA: '../imgs/team_a/正方四辩李阳.jpg',
		imgB: '',
		timerA: '210',
		timerB: '',
		allTimer: '210'
	}],
	// 申论质询没什么用
	ev: [{
		id: 1,
		name: '质询',
		time: '120',
		spec: true
	},{
		id: 2,
		name: '申论',
		time: '90',
		spec: true
	}]
};

for (var i = 0; i < config.inf.length; i++) {
	if (config.inf[i].timerA && config.inf[i].timerA.indexOf('.') < 0) {
		if (!isNaN(Number(config.inf[i].timerA))) {
			config.inf[i].timerA += '.0';
		}
	}
	if (config.inf[i].timerB && config.inf[i].timerB.indexOf('.') < 0) {
		if (!isNaN(Number(config.inf[i].timerB))) {
			config.inf[i].timerB += '.0';
		}
	}
	if (config.inf[i].allTimer && config.inf[i].allTimer.indexOf('.') < 0) {
		config.inf[i].allTimer += '.0';
	}
}