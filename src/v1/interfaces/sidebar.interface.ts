import { Action } from 'redux';

export interface IOwnProps {
	showAdminUsersOptions: () => void;
	showVisualSettingsOptions: () => void;
	showMenuAdminOptions: () => void;
	showAddPictureTextOptions: () => void;
	showManagePresentationOptions: () => void;
	showFaqsOptions: () => void;
	sidebarProps: ISidebarStoreState;
}
export interface IDispatchToProps {
	showAdminUsersOptions: () => void;
	showVisualSettingsOptions: () => void;
	showMenuAdminOptions: () => void;
	showAddPictureTextOptions: () => void;
	showManagePresentationOptions: () => void;
	showFaqsOptions: () => void;
}
export interface IOwnStates {}

export interface ISidebarStoreState {
	showAccessControlAdmin: boolean;
	showNumberCategories: boolean;
	showMenuStructureNames: boolean;
	showTextLocation: boolean;
	showDefineSearchableFormat: boolean;
	showAddTags: boolean;
	showUploadFormat: boolean;
	showAddTextForFreeSearch: boolean;
	showAddTagsForDocument: boolean;
}

export interface IActionShowAdminUsersOptions extends Action {
	type: 'SHOW_ADMIN_USERS_OPTIONS';
}

export interface IActionShowVisualSettingsOptions extends Action {
	type: 'SHOW_VISUAL_SETTINGS_OPTIONS';
}

export interface IActionShowMenuAdminOptions extends Action {
	type: 'SHOW_MENU_ADMIN_OPTIONS';
}

export interface IActionShowAddPictureTextOptions extends Action {
	type: 'SHOW_ADD_PICTURE_TEXT_OPTIONS';
}

export interface IActionShowManagePresentationOptions extends Action {
	type: 'SHOW_MANAGE_PRESENTATION_OPTIONS';
}

export interface IActionShowFaqOptions extends Action {
	type: 'SHOW_FAQ_OPTIONS';
}

export type ISidebarActions =
	| IActionShowAdminUsersOptions
	| IActionShowVisualSettingsOptions
	| IActionShowMenuAdminOptions
	| IActionShowAddPictureTextOptions
	| IActionShowManagePresentationOptions
	| IActionShowFaqOptions;
