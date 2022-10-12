import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import * as actions from '../types';
import { IState } from '../../interfaces/login.interface';
import { ApiHelper } from '../../settings/helpers/ApiHelper';
import { logger } from '../../settings/helpers/Common';

export const userLogin = (
	payload: IState,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
	return async (
		dispatch: ThunkDispatch<any, any, AnyAction>,
	): Promise<void> => {
		if (payload) {	
			dispatch(onLoginRequest(payload));

			try {
				const result = await new ApiHelper().FetchFromServer(
					'/users',
					'/login',
					'POST',
					false,
					undefined,
					payload,
				);

				if (result.isError) {
					throw new Error(result.messages);
				}

				const { data } = result;
				if (result.code === 200) {
					dispatch(onLoginSuccess(data));
				}
			} catch (error) {
				dispatch(onLoginFailure(error));
				logger(error);
			}
		}
	};
};

const onLoginRequest = (credentials: IState) => {
	return {
		type: actions.LOGIN_REQUEST,
		credentials,
	};
};

const onLoginSuccess = (result: { [key: string]: any }) => {
	return {
		type: actions.LOGIN_SUCCESS,
		result,
	};
};

const onLoginFailure = (error: Error) => {
	return {
		type: actions.LOGIN_FAILURE,
		errorMessage: error.toString(),
	};
};
