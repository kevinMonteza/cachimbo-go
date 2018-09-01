import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './components/App';
import Ayuda from './components/ayuda';
import Nosotros from './components/nosotros';
import Tienda from './components/tienda';
import Perfil from './components/perfil';
import Asiganturas from './components/asignaturas';
import Login from './components/Login/Login';

const AppRoutes=()=>{ 
			return(
				<App>
					<Switch>
						<Route path="/perfil"       component={Perfil} />
						<Route path="/nosotros"     component={Nosotros} />
						<Route path="/ayuda"        component={Ayuda} />
						<Route path="/tienda"       component={Tienda} />
						<Route path='/asignaturas'  component={Asiganturas} />
						<Route path='/'             component={Login} />
					</Switch>
				</App>
				)
}
export default AppRoutes;