import * as actions from '../types';
import {
	ILoginStoreState,
	ILoginActions,
} from '../../interfaces/login.interface';

const initialState: ILoginStoreState = {
	loading: false,
	loginSuccess: false,
	loginCredentials: { email: '', password: '' },
	userData: {},
	error: '',
};

const loginReducer = (state = initialState, action: ILoginActions) => {
	switch (action.type) {
		case actions.LOGIN_REQUEST:
			return {
				...state,
				loading: true,
				userData: {},
				loginCredentials: action.credentials,
			};

		case actions.LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				loginSuccess: true,
				userData: action.result,
				loginCredentials: { email: '', password: '' },
				error: '',
			};

		case actions.LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.errorMessage,
				loginSuccess: false,
				userData: {},
				loginCredentials: { email: '', password: '' },
			};

		default:
			return state;
	}
};

export default loginReducer;
