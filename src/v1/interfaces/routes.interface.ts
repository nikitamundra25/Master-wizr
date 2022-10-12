export interface IAppRoutes {
	path: string;
	exact?: boolean;
	main: any;
	id: number;
}

export interface IAdminRoutes extends IAppRoutes {
	icon?: string;
	name: string;
	children?: IAdminRoutes[]
}
