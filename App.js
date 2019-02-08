import React, {Component} from "react";
import {Provider} from "react-redux"
import configureStore from "./app/store";
import GroceryList from "./app/screens/GroceryList";

const store = configureStore();

export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <GroceryList/>
            </Provider>
        );
    }
}

