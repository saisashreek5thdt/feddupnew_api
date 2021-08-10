import { combineReducers } from "redux";
import auth from "./authReduce";


const rootReducer = combineReducers({ auth });
export default rootReducer;
