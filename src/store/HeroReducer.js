import {
   ADD_TO_SECTION_SLICK,
   ADD_APPLE_PHONES,
   ADD_SAMSUNG_PHONES,
   ADD_XIAOMI_PHONES,
   ADD_ALL_PHONES,
} from './types';

import {
   getApple,
   getLatest,
   getSamsung,
   getXiaomi,
} from '../api/api';

let initialState = {
   slider: [],
   apple_phones: [],
   samsung_phones: [],
   xiaomi_phones: [],
   all_phones: [],
};

export const HeroReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_SECTION_SLICK:
         return {
            ...state,
            slider: [...action.payload.phones]
         };
      case ADD_APPLE_PHONES:
         return {
            ...state,
            apple_phones: [...action.payload.apple_phones]
         };
      case ADD_SAMSUNG_PHONES:
         return {
            ...state,
            samsung_phones: [...action.payload.samsung_phones]
         };
      case ADD_XIAOMI_PHONES:
         return {
            ...state,
            xiaomi_phones: [...action.payload.xiaomi_phones]
         };
      case ADD_ALL_PHONES:
         return {
            ...state,
            all_phones : [...action.payload.all_phones]
         }
      default:
         return {
            ...state
         }
   }
}


const addPhonesToBannerSlider = (arr) => {
   return {
      type: ADD_TO_SECTION_SLICK,
      payload: {
         phones: arr
      }
   }
}

const addApplePhones = (arr) => {
   return {
      type: ADD_APPLE_PHONES,
      payload: {
         apple_phones: arr
      }
   }
}

const addSamsungPhones = (arr) => {
   return {
      type: ADD_SAMSUNG_PHONES,
      payload: {
         samsung_phones: arr
      }
   }
}

const addXiaomiPhones = (arr) => {
   return {
      type: ADD_XIAOMI_PHONES,
      payload: {
         xiaomi_phones: arr
      }
   }
}


const addAllPhones = (arr) => {
   return {
      type: ADD_ALL_PHONES,
      payload: {
         all_phones : arr
      }
   }
}


export const addPhonesToSliderThunk = () => {
   return (dispatch) => {
      Promise.all([getLatest(), getApple(), getSamsung(), getXiaomi()]).then(values => {
         const array = values.map(item => item.data.data.phones);
         const all_phones = array.flat();
         dispatch(addAllPhones(all_phones));
         dispatch(addPhonesToBannerSlider(array[0]));
         dispatch(addApplePhones(array[1]));
         dispatch(addSamsungPhones(array[2]));
         dispatch(addXiaomiPhones(array[3]));
      });
   }
}