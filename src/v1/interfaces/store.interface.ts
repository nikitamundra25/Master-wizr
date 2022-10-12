import { ILoginStoreState } from './login.interface';
import { ISidebarStoreState } from './sidebar.interface';
import {IStoreState} from './presentation.interface';

export interface IAppState {
	readonly loginState: ILoginStoreState;
	readonly sidebarState: ISidebarStoreState;
	readonly presentationState: IStoreState;
}
