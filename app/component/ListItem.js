import React, {Component, Fragment} from 'react';
import {Button, Keyboard, Text, TextInput, View} from "react-native";
import {ListStyle} from "../styles/list";
import {ListItemStyle} from "../styles/list-item";

class ListItem extends Component {
    static defaultProps = {
        onEdit: false,
        onSubmit: () => console.log("Bind submit function here")
    };

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            quantity: props.quantity.toString(),
            onEdit: props.onEdit
        };
    }

    onSubmit = () => {
        this.props.onSubmit(this.state);
    };

    render() {
        const {title, quantity, onEdit} = this.state;

        return (
            <View style={ListStyle.itemContainer}>
                {
                    (onEdit) ? <Fragment>
                        <TextInput onChangeText={(title) => this.setState({title})}
                                   value={title}
                                   placeholder="Enter title here"
                                   style={ListItemStyle.itemName}
                                   onSubmit={Keyboard.dismiss}/>
                        <TextInput onChangeText={(quantity) => this.setState({quantity})}
                                   value={quantity}
                                   placeholder="Qty"
                                   keyboardType="numeric"
                                   style={ListItemStyle.itemQuantity}
                                   onSubmit={Keyboard.dismiss}/>
                        <Button title="Save" onPress={this.onSubmit}/>
                    </Fragment> : <Fragment>
                        <Text style={ListStyle.itemName}>{title}</Text>
                        <Text style={ListStyle.itemQuantity}>{quantity}</Text>
                    </Fragment>
                }
            </View>
        );
    }
}

export default ListItem;