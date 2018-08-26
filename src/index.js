import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';

import './components/global/css/Bootstrap/bootstrap.min.css';
import './index.css';
import './components/global/css/App.css';
import './components/global/css/Header.css';
import './components/global/css/Nav.css';
import './components/global/css/Section.css';
import './components/global/css/Footer.css';


ReactDOM.render(
       <Router>
           <AppRoutes/>
       </Router>,
        document.getElementById('root'));
registerServiceWorker();
