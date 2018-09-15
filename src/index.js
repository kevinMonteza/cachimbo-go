import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';

import './assets/Bootstrap/bootstrap.min.css';
import './assets/index.css';
import './assets/Header.css';
import './assets/Section.css';
import './assets/Footer.css';


ReactDOM.render(
       <Router>
           <AppRoutes/>
       </Router>,
        document.getElementById('root'));
registerServiceWorker();
