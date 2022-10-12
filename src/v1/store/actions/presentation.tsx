import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import * as actions from '../types';
import { logger } from '../../settings/helpers/Common';
import { ApiHelper } from '../../settings/helpers/ApiHelper';
import {
	IComponentState,
	IItem,
} from '../../interfaces/presentation.interface';

export const UserPresentation = (
	payload: IItem[],
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
	return async (
		dispatch: ThunkDispatch<any, any, AnyAction>,
	): Promise<void> => {
		if (payload.length) {
			dispatch(onPresentationRequest());
			try {
				let body: FormData = new FormData();
				for (const i in payload) {
					if (payload.hasOwnProperty(i)) {
						const element = payload[i];
						body.append(i, element.file);
					}
				}

				const result = await new ApiHelper().FetchFromServer(
					'/files',
					'/upload',
					'POST',
					false,
					undefined,
					body,
				);
				console.log('RESULT', result);
				if (result.isError) {
					throw new Error(result.messages);
				}
				const data = result;
				if (result.code == 200) {
					dispatch(onPresentationSuccess(data));
				}
			} catch (error) {
				logger(error);
				dispatch(onPresentationFailure());
			}
		}
	};
};
export const onPresentationRequest = () => {
	return {
		type: actions.PRESENTATION_REQUEST,
	};
};

export const onPresentationSuccess = (result: { [key: string]: any }) => {
	return {
		type: actions.PRESENTATION_SUCCESS,
		result,
	};
};

export const onPresentationFailure = () => {
	return {
		type: actions.PRESENTATION_FAILURE,
	};
};
