import { FormikActions } from 'formik';
import { Action } from 'redux';

export interface IOwnProps {
	preview: string[];
}
export interface IItem {
	id: number;
	name: string;
	file: File;
	url: string;
}
export interface IDispatchToProps {
	onDataPresentation: (preview: IItem[]) => void;
}

export interface IStoreState {
	IsLoading: boolean;
	PresentationSuccess: boolean;
	PresentationData: { [key: string]: any };
}

export interface IOwnProps extends IDispatchToProps {
	loadingState: boolean;
	successState: boolean;
	userData: { [key: string]: any };
}
export interface IPresentationForm extends IComponentState {}

export interface IComponentState {
	preview: IItem[];
}

export interface IFunction extends IComponentState {
	onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
}

export interface IActionPresentationRequest extends Action {
	type: 'PRESENTATION_REQUEST';
}

export interface IActionPresentationSuccess extends Action {
	type: 'PRESENTATION_SUCCESS';
	result: object;
}

export interface IActionPresentationError extends Action {
	type: 'PRESENTATION_FAILURE';
	errorMessage: string;
}

export type IPresentationActions =
	| IActionPresentationRequest
	| IActionPresentationSuccess
	| IActionPresentationError;
