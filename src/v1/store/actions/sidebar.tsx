import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import * as actions from '../types';

export const showAdminUsersOptions = (): ThunkAction<
	Promise<void>,
	any,
	any,
	AnyAction
> => {
	return async (
		dispatch: ThunkDispatch<any, any, AnyAction>,
	): Promise<void> => {
		dispatch({ type: actions.SHOW_ADMIN_USERS_OPTIONS });
	};
};

export const showVisualSettingsOptions = (): ThunkAction<
	Promise<void>,
	any,
	any,
	AnyAction
> => {
	return async (
		dispatch: ThunkDispatch<any, any, AnyAction>,
	): Promise<void> => {
		dispatch({ type: actions.SHOW_VISUAL_SETTINGS_OPTIONS });
	};
};

export const showMenuAdminOptions = (): ThunkAction<
	Promise<void>,
	any,
	any,
	AnyAction
> => {
	return async (
		dispatch: ThunkDispatch<any, any, AnyAction>,
	): Promise<void> => {
		dispatch({ type: actions.SHOW_MENU_ADMIN_OPTIONS });
	};
};

export const showAddPictureTextOptions = (): ThunkAction<
	Promise<void>,
	any,
	any,
	AnyAction
> => {
	return async (
		dispatch: ThunkDispatch<any, any, AnyAction>,
	): Promise<void> => {
		dispatch({ type: actions.SHOW_ADD_PICTURE_TEXT_OPTIONS });
	};
};

export const showManagePresentationOptions = (): ThunkAction<
	Promise<void>,
	any,
	any,
	AnyAction
> => {
	return async (
		dispatch: ThunkDispatch<any, any, AnyAction>,
	): Promise<void> => {
		dispatch({ type: actions.SHOW_MANAGE_PRESENTATION_OPTIONS });
	};
};

export const showFaqsOptions = (): ThunkAction<
	Promise<void>,
	any,
	any,
	AnyAction
> => {
	return async (
		dispatch: ThunkDispatch<any, any, AnyAction>,
	): Promise<void> => {
		dispatch({ type: actions.SHOW_FAQ_OPTIONS });
	};
};
