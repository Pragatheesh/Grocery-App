import React, {Component} from 'react';
import {ListStyle} from "../styles/list";
import {Button, View} from "react-native";
import TotalItem from "../component/TotalItem";
import List from "../component/List";
import {connect} from "react-redux"
import {addGroceryListItem, fetchListAsync, saveListItemAsync} from "../actions/grocery";
import getTotalGroceryItems from "../selectors/grocery";

class GroceryList extends Component {
    componentDidMount() {
        this.props.fetchListAsync();
    }

    addListItem = () => {
        if (this.props.addGroceryListItem) {
            this.props.addGroceryListItem();
        }
    };

    onListItemSubmit = (item) => {
        if (this.props.saveListItemAsync) {
            this.props.saveListItemAsync(item);
        }
    };

    render() {
        const {loading, list} = this.props;

        if (loading) {
            return (
                <View style={ListStyle.container}/>
            );
        }

        return (
            <View style={ListStyle.container}>
                <List list={list} onListItemSubmit={this.onListItemSubmit}/>

                <View style={ListStyle.footer}>
                    <TotalItem total={this.props.total}/>
                    <Button title="Add" onPress={this.addListItem}/>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.grocery.list,
        total: getTotalGroceryItems(state),
        loading: state.grocery.loading
    }
}

const Actions = {
    fetchListAsync,
    addGroceryListItem,
    saveListItemAsync
};

export default connect(mapStateToProps, Actions)(GroceryList);