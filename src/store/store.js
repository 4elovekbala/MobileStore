import {
   createStore,
   applyMiddleware
} from "redux";
import thunk from 'redux-thunk';
import {
   combineReducers
} from "redux";
import {
   composeWithDevTools
} from 'redux-devtools-extension';
import {
   HeroReducer
} from './HeroReducer';
import {
   CartReducer
} from './CartReducer';
import {
   PhoneReducer
} from './PhoneReducer';
import {
   CompareReducer
} from "./CompareReducer";
import { 
   UserReducer
} from './UserReducer';


let rootReducer = combineReducers({
   hero: HeroReducer,
   cart: CartReducer,
   phone: PhoneReducer,
   compare: CompareReducer,
   user : UserReducer,
});

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;
export default store;