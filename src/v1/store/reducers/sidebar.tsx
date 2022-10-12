import * as actions from '../types';
import {
	ISidebarStoreState,
	ISidebarActions,
} from '../../interfaces/sidebar.interface';

const initialState: ISidebarStoreState = {
	showAccessControlAdmin: false,
	showNumberCategories: false,
	showMenuStructureNames: false,
	showTextLocation: false,
	showDefineSearchableFormat: false,
	showAddTags: false,
	showUploadFormat: false,
	showAddTextForFreeSearch: false,
	showAddTagsForDocument: false,
};

const sidebarReducer = (
	state: ISidebarStoreState = initialState,
	action: ISidebarActions,
) => {
	switch (action.type) {
		case actions.SHOW_ADMIN_USERS_OPTIONS:
			return {
				...state,
				showAccessControlAdmin: true,
				showNumberCategories: false,
				showMenuStructureNames: false,
				showTextLocation: false,
				showDefineSearchableFormat: false,
				showAddTags: false,
				showUploadFormat: false,
				showAddTextForFreeSearch: false,
				showAddTagsForDocument: false,
			};

		case actions.SHOW_VISUAL_SETTINGS_OPTIONS:
			return {
				...state,
				showAccessControlAdmin: false,
				showNumberCategories: false,
				showMenuStructureNames: false,
				showTextLocation: false,
				showDefineSearchableFormat: false,
				showAddTags: false,
				showUploadFormat: false,
				showAddTextForFreeSearch: false,
				showAddTagsForDocument: false,
			};

		case actions.SHOW_MENU_ADMIN_OPTIONS:
			return {
				...state,
				showAccessControlAdmin: false,
				showNumberCategories: true,
				showMenuStructureNames: true,
				showTextLocation: false,
				showDefineSearchableFormat: false,
				showAddTags: false,
				showUploadFormat: false,
				showAddTextForFreeSearch: false,
				showAddTagsForDocument: false,
			};

		case actions.SHOW_ADD_PICTURE_TEXT_OPTIONS:
			return {
				...state,
				showAccessControlAdmin: false,
				showNumberCategories: false,
				showMenuStructureNames: false,
				showTextLocation: false,
				showDefineSearchableFormat: false,
				showAddTags: false,
				showUploadFormat: false,
				showAddTextForFreeSearch: false,
				showAddTagsForDocument: false,
			};

		case actions.SHOW_MANAGE_PRESENTATION_OPTIONS:
			return {
				...state,
				showAccessControlAdmin: false,
				showNumberCategories: false,
				showMenuStructureNames: false,
				showTextLocation: true,
				showDefineSearchableFormat: true,
				showAddTags: true,
				showUploadFormat: true,
				showAddTextForFreeSearch: true,
				showAddTagsForDocument: true,
			};

		case actions.SHOW_FAQ_OPTIONS:
			return {
				...state,
				showAccessControlAdmin: false,
				showNumberCategories: false,
				showMenuStructureNames: false,
				showTextLocation: false,
				showDefineSearchableFormat: false,
				showAddTags: false,
				showUploadFormat: false,
				showAddTextForFreeSearch: false,
				showAddTagsForDocument: false,
			};

		default:
			return state;
	}
};

export default sidebarReducer;
