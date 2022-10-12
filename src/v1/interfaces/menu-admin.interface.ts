import React, { ChangeEvent } from 'react';

export interface IOwnProps {
	handleMenuCheckbox: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
	[key: string]: any;
}
export interface IOwnState {}

interface Menu {
	name: string;
	category: ICategory[];
}

interface ICategory {
	name: string;
	submenu: ISubMenu[];
}

interface ISubMenu {
	name: string;
}

export interface IMenuAdminStoreState {
	categoryLimit: number;
	menus: Menu[];
}
