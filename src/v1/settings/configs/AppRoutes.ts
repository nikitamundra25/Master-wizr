// INTERFACE
import { IAppRoutes } from '../../interfaces/routes.interface';

// ALL COMPONENTS
import Login from '../../containers/login';
import Sidebar from '../../containers/sidebar';
import PanelPage from '../../containers/panel-page';
import PresentationPage from '../../containers/presentation-page';

const appRoutes: IAppRoutes[] = [
	{
		path: '/',
		exact: true,
		main: Login,
		id: 1,
	},
	{
		path: '/login',
		exact: true,
		main: Login,
		id: 2,
	},
	{
		path: '/panel',
		exact: true,
		main: PanelPage,
		id: 3,
	},
	{
		path: '/presentation',
		exact: true,
		main: PresentationPage,
		id: 4,
	},
	{
		path: '/control-panel',
		exact: false,
		main: Sidebar,
		id: 5,
	},
];

export default appRoutes;
