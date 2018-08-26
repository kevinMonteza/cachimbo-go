import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './components/App';
import Ayuda from './components/ayuda';
import Nosotros from './components/nosotros';
import Tienda from './components/tienda';
import Perfil from './components/perfil';

const AppRoutes = ()=>
    <App>
		<Switch>
			<Route path="/perfil"    component={Perfil} />
			<Route path="/nosotros"  component={Nosotros} />
			<Route path="/ayuda"     component={Ayuda} />
			<Route path="/tienda"    component={Tienda} />
		</Switch>
	</App>
export default AppRoutes;