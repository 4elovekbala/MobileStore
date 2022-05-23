import {
   ADD_PHONE
} from './types';

import {
   getPhone
} from '../api/api';

let initialState = {
   fetching: true,
   status: false,
   data: {
      brand: "",
      phone_name: "",
      thumbnai: "",
      phone_images: [],
      release_date: "",
      dimension: "",
      os: "",
      storage: "",
      specifications: []
   }
};

export const PhoneReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PHONE:
         return {
            ...state,
            fetching: false,
               status: action.payload.status,
               data: {
                  ...action.payload.data
               }
         };
      default:
         return {
            ...state
         }
   }
}


const addPhone = (info) => {
   return {
      type: ADD_PHONE,
      payload: {
         status: true,
         data: {
            ...info
         }
      }
   }
}

export const addPhoneThunk = (slug) => {
   return async (dispatch) => {
      try {
         const response = await getPhone(slug);
         const data = response.data.data;
         dispatch(addPhone(data));
      } catch (error) {
         throw new Error(error);
      }
   }
}