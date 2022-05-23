import {
   getDetail
} from '../api/api';
import {
   ADD_PHONES_TO_COMPARE,
   DELETE_PHONES_FROM_COMPaRE
} from './types';


let initialState = {
   compare_phones: []
};

export const CompareReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PHONES_TO_COMPARE:
         return {
            ...state,
            compare_phones: [...state.compare_phones, action.payload.phone]
         };
      case DELETE_PHONES_FROM_COMPaRE:
         return {
            ...state,
            compare_phones: [...state.compare_phones.filter((item, index) => index !== Number(action.payload.id))]
         }
         default:
            return {
               ...state
            }
   }
}


const addPhonesToCompare = (elem) => {
   return {
      type: ADD_PHONES_TO_COMPARE,
      payload: {
         phone: elem
      }
   }
}

export const deletePhonesFromComapre = (id) => {
   return {
      type: DELETE_PHONES_FROM_COMPaRE,
      payload: {
         id
      }
   }
}

export const addPhonesToCompareThunk = (request) => {
   return async (dispatch) => {
      try {
         const response = await getDetail(request);
         const data = response.data.data;
         dispatch(addPhonesToCompare(data));
      } catch (error) {
         throw new Error(error);
      }
   }
}