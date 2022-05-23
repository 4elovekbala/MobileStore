import {
   GET_USER,
   ADD_USER_DESIRES,
   DELETE_USER_DESIRES,
   LOG_IN,
   LOG_OUT,
} from './types';


let initialState = {
   isLoggedIn: false,
   status: false,
   mobile: "",
   name: "",
   password: "",
   desires: []
};

export const UserReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER:
         return {
            status: true,
               mobile: action.payload.mobile,
               name: action.payload.name,
               password: action.payload.password,
               desires: action.payload.desires,
         };
      case DELETE_USER_DESIRES:
         return {
            ...state,
            desires: [...state.desires.filter((item, index) => index !== Number(action.payload.id))]
         };
      case ADD_USER_DESIRES:
         return {
            ...state,
            desires: [...state.desires, action.payload.phone]
         };
      case LOG_IN:
         return {
            ...state,
            isLoggedIn: true,
         };
      case LOG_OUT:
         return {
            isLoggedIn: false,
         };
      default:
         return {
            ...state
         }
   }
}


export const getUser = () => {
   return {
      type: GET_USER,
      payload: {
         name: "Nurlybek",
         password: "1234",
         mobile: "8-777-777-77-77",
         desires: [],
      }
   }
}

export const addToDesires = (elem) => {
   return {
      type: ADD_USER_DESIRES,
      payload: {
         phone: elem
      }
   }
}

export const deletePhonesFromDesires = (id) => {
   return {
      type: DELETE_USER_DESIRES,
      payload: {
         id
      }
   }
}

const logIn = () => {
   return {
      type: LOG_IN,
   }
}

export const logInThunk = () => {
   return async (dispatch) => {
      setTimeout(() => {
         dispatch(logIn());
      }, 1000);
   }
}

const logOut = () => {
   return {
      type: LOG_OUT,
   }
}

export const logOutThunk = () => {
   return async (dispatch) => {
      setTimeout(() => {
         dispatch(logOut());
      }, 1000);
   }
}