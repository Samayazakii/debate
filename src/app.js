import React from 'react';
import ReactDOM from 'react-dom';

import CenterContainer from './components/centerContainer.jsx';
import Title from './components/title.jsx';
import TitleBottom from './components/titleBottom.jsx';
import GetStart from './components/getStart.jsx';

import './static/styles/index.css';

ReactDOM.render((
    <CenterContainer>
        <Title />
        <TitleBottom />
        <GetStart />
    </CenterContainer> 
), document.getElementById('root'));
