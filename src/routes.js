import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './componentes/App';
import Ayuda from './componentes/ayuda';
import Nosotros from './componentes/nosotros';
import Tienda from './componentes/tienda';
import Perfil from './componentes/perfil';
import Asiganturas from './componentes/asignaturas';
import Login from './componentes/Login/Login';
/**
 * Rutas que se maneja en la aplicacion
 */
const AppRoutes=()=>{ 
			return(
				<App>
					<Switch>
						<Route path="/perfil"       component={Perfil} />
						<Route path="/nosotros"     component={Nosotros} />
						<Route path="/ayuda"        component={Ayuda} />
						<Route path="/tienda"       component={Tienda} />
						<Route path='/'             component={Asiganturas} />
						<Route path='/login'        component={Login} />
					</Switch>
				</App>
				)
}
export default AppRoutes;