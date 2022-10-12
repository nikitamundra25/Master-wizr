import * as actions from '../types';

import {IStoreState, IPresentationActions} from "../../interfaces/presentation.interface";

const initialState: IStoreState = {
  PresentationSuccess: false,
  IsLoading: false,
  PresentationData :{}
};

const PresentationReducer = (state = initialState, action: IPresentationActions) => {
	switch (action.type) {
		case actions.PRESENTATION_REQUEST:
			return {
        ...state,
        IsLoading:true,
				PresentationData: {}
      };
      
      case actions.PRESENTATION_SUCCESS:
			return {
				...state,
				loading: false,
				PresentationSuccess: true,
				PresentationData: action.result,
      };
      
      case actions.PRESENTATION_FAILURE:
      return {
        ...state,
        loading:false,
        PresentationSuccess:false
      };
default:
 return state;
    }
  }
  export default PresentationReducer;