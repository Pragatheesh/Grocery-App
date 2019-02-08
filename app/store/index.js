import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import RootReducer from "../reducers";

export default function configureStore() {
    return createStore(
        RootReducer,
        composeWithDevTools(
            applyMiddleware(thunk.withExtraArgument())
        )
    );
}