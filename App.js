import React, {Component} from "react";
import {Button, View} from "react-native";
import {ListStyle} from "./styles/list";
import List from "./component/List";
import TotalItem from "./component/TotalItem";

export default class App extends Component<Props> {
    NEW_ITEM = "_new";
    SERVICE_URL = `https://rn-grocery-list.herokuapp.com/grocery`;

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            list: [],
        };
    }

    componentDidMount() {
        this.fetchListItems();
    }

    fetchListItems = () => {
        this.setState({loading: true});
        fetch(this.SERVICE_URL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    list: res,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    };

    getTotal = () => (this.state.list.reduce((sum, {quantity}) => {
        return sum + quantity;
    }, 0));

    addListItem = () => {
        this.setState(({list}) => ({
            list: [
                ...list,
                {_id: this.NEW_ITEM, title: "", quantity: "", onEdit: true}
            ]
        }));
    };

    onListItemSubmit = (item) => {
        fetch(this.SERVICE_URL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(res => {
                this.setState(({list}) => ({
                    list: list.map(
                        item => {
                            if (item._id === this.NEW_ITEM) {
                                return {
                                    ...res,
                                    onEdit: false
                                }
                            }
                            return item;
                        }
                    )
                }));
            })
            .catch(error => console.log(error));
    };

    render() {
        const {loading, list} = this.state;

        if (loading) {
            return (
                <View style={ListStyle.container}/>
            );
        }

        return (
            <View style={ListStyle.container}>
                <List list={list} onListItemSubmit={this.onListItemSubmit}/>

                <View style={ListStyle.footer}>
                    <TotalItem total={this.getTotal()}/>
                    <Button title="Add" onPress={this.addListItem}/>
                </View>
            </View>
        );
    }
}

