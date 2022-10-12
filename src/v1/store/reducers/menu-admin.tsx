import * as actions from '../types';
import { IMenuAdminStoreState } from '../../interfaces/menu-admin.interface';

const initialState: IMenuAdminStoreState = {
	categoryLimit: 6,
	menus: [
		{
			name: 'Menu 1',
			category: [
				{
					name: 'CATEGORY 1',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 2',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 3',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 4',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 5',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 6',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
				},
			],
    },
    {
			name: 'Menu 2',
			category: [
				{
					name: 'CATEGORY 1',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 2',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 3',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 4',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 5',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 6',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
				},
			],
    },
    {
			name: 'Menu 3',
			category: [
				{
					name: 'CATEGORY 1',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 2',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 3',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 4',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 5',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 6',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
				},
			],
    },
    {
			name: 'Menu 4',
			category: [
				{
					name: 'CATEGORY 1',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 2',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 3',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 4',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 5',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 6',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
				},
			],
    },
    {
			name: 'Menu 5',
			category: [
				{
					name: 'CATEGORY 1',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 2',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 3',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 4',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 5',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
        },
        {
					name: 'CATEGORY 6',
					submenu: [
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
						{ name: 'Sub Category' },
					],
				},
			],
		},
	],
};
