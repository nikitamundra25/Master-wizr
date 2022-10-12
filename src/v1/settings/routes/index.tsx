import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import appRoutes from '../configs/AppRoutes';
import adminRoutes from '../configs/AdminRoutes';
import history from '../helpers/History';

const AppRoute: React.FC = () => {
	return (
		<Router history={history}>
			<Switch>
				{appRoutes.map(r => (
					<Route key={r.id} path={r.path} exact={r.exact} component={r.main} />
				))}
			</Switch>
		</Router>
	);
};

const AdminRoutes: React.FC = () => {
	return (
		<Router history={history}>
			<Switch>
				{adminRoutes.map(r => (
					<Route key={r.id} path={r.path} exact={r.exact} component={r.main} />
				))}
			</Switch>
		</Router>
	);
};

export { AppRoute, AdminRoutes };
