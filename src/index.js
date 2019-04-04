import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket, faCog, faCogs, faDatabase, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faRocket, faCogs, faDatabase, faPlus);

ReactDOM.render(<App />, document.getElementById('root'));
