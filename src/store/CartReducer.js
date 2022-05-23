import {
   ADD_PHONES_TO_CART,
   DELETE_PHONES_FROM_CART
} from './types';


let initialState = {
   cart_phones : []
};

export const CartReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PHONES_TO_CART:
         return {
            ...state,
            cart_phones: [...state.cart_phones, action.payload.phone]
         };
      case DELETE_PHONES_FROM_CART:
         return {
            ...state,
            cart_phones : [...state.cart_phones.filter((item, index) => index !== Number(action.payload.id))]
         }
      default:
         return {
            ...state
         }
   }
}


export const addPhonesToCart = (elem) => {
   return {
      type: ADD_PHONES_TO_CART,
      payload: {
         phone: elem
      }
   }
}


export const deletePhones = (id) => {
   return {
      type : DELETE_PHONES_FROM_CART,
      payload : {
         id
      }
   }
}
