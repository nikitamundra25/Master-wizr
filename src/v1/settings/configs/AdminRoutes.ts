// INTERFACE
import { IAdminRoutes } from '../../interfaces/routes.interface';

// ALL COMPONENTS
import MenuAdmin from '../../containers/menu-admin';
import ComingSoonComponent from '../../components/coming-soon/coming-soon.component';

const initialRoute: string = '/control-panel';
const adminRoutes: IAdminRoutes[] = [
	{
		path: initialRoute + '/admin-users',
		exact: true,
		main: ComingSoonComponent,
		name: '<strong>Step 1</strong> - Admin user(s)',
		id: 21,
	},
	{
		path: initialRoute + '/visual-settings',
		exact: true,
		main: ComingSoonComponent,
		name: '<strong>Step 2</strong> - Visual Settings(s)',
		id: 22,
	},
	{
		path: initialRoute + '/menu-admin',
		exact: true,
		main: MenuAdmin,
		name: '<strong>Step 3</strong> - Menu Admin',
		id: 23,
	},
	{
		path: initialRoute + '/add-picture-text',
		exact: true,
		main: ComingSoonComponent,
		name: '<strong>Step 4</strong> - Add pictures with text',
		id: 24,
	},
	{
		path: initialRoute + '/manage-presentation',
		exact: true,
		main: ComingSoonComponent,
		name: '<strong>Step 5</strong> - Manage Presentation',
		id: 25,
	},
	{
		path: initialRoute + '/faq',
		exact: true,
		main: ComingSoonComponent,
		name: '<strong>Step 6</strong> - FAQ - Helpful answers',
		id: 26,
	},
];

export default adminRoutes;
