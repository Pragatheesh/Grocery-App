import React, {Component} from "react";
import {Provider} from "react-redux"
import configureStore from "./app/store";
import GroceryList from "./app/screens/GroceryList";
import {register as registerServices} from './app/config/services';

let serviceManager = registerServices();

const store = configureStore(serviceManager);

export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <GroceryList/>
            </Provider>
        );
    }
}

