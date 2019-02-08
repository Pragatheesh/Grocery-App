import React from 'react';
import {Text, View} from "react-native";
import {ListStyle} from "../styles/list";
import {TotalItemStyle} from "../styles/total-item";

export default function totalItem({total}) {
    return (
        <View style={TotalItemStyle.total}>
            <Text style={ListStyle.itemName}>Total Items</Text>
            <Text style={ListStyle.itemQuantity}>{total}</Text>
        </View>
    );
}
