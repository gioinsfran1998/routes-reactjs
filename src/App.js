import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import User from './components/User';

const App = () => {
	return (
		<Router>
			<div className='container mt-5'>
				<div className='btn-group'>
					<NavLink
						to='/'
						className='btn btn-dark '
						activeClassName='selected'
					>
						Inicio
					</NavLink>
					<NavLink
						to='/nosotros'
						className='btn btn-dark'
						activeClassName='selected'
					>
						Nosotros
					</NavLink>
					<NavLink
						to='/contacto'
						className='btn btn-dark'
						activeClassName='selected'
					>
						Contacto
					</NavLink>
				</div>
				<hr />
				<Switch>
					<Route path='/nosotros/:id' exact>
						<User />
					</Route>
					<Route path='/' exact>
						<Inicio />
					</Route>

					<Route path='/contacto'>
						<Contacto />
					</Route>

					<Route path='/nosotros'>
						<Nosotros />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
