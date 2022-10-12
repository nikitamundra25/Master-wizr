import { FormikActions } from 'formik';
import { Action } from 'redux';

export interface IDispatchToProps {
	onLogin: (email: string, password: string) => void;
}

export interface IOwnProps extends IDispatchToProps {
	loadingState: boolean;
	successState: boolean;
	userData: { [key: string]: any };
	errorState: string;
}

export interface IState {
	email: string;
	password: string;
}

export interface ILoginForm extends IState {}

export interface ILoginComponentProps {
	onLogin: (values: ILoginForm, actions: FormikActions<ILoginForm>) => void;
}

export interface ILoginStoreState {
	loading: boolean;
	loginSuccess: boolean;
	userData: { [key: string]: any };
	loginCredentials: IState;
	error: string;
}

export interface IActionLoginRequest extends Action {
	type: 'LOGIN_REQUEST';
	credentials: IState;
}

export interface IActionLoginSuccess extends Action {
	type: 'LOGIN_SUCCESS';
	result: object;
}

export interface IActionLoginError extends Action {
	type: 'LOGIN_FAILURE';
	errorMessage: string;
}

export type ILoginActions =
	| IActionLoginRequest
	| IActionLoginSuccess
	| IActionLoginError;
