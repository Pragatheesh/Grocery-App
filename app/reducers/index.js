import {combineReducers} from "redux";
import grocery from "./grocery";

const appReducer = combineReducers({
    grocery
});

export default (state, action) => {
    return appReducer(state, action);
};