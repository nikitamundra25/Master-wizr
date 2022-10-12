import { combineReducers, Reducer, AnyAction } from 'redux';
import loginReducer from './login';
import PresentationReducer from './presentation';
import { IAppState } from '../../interfaces/store.interface';
import sidebarReducer from './sidebar';

const rootReducer: Reducer<any, AnyAction> = combineReducers<IAppState>({
	loginState: loginReducer,
	presentationState: PresentationReducer,
	sidebarState: sidebarReducer,
});

export default rootReducer;
