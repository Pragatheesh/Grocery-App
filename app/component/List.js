import React from 'react';
import {ListStyle} from "../styles/list";
import {FlatList, View} from "react-native";
import ListItem from "./ListItem";

export default function list({list, onListItemSubmit}) {
    return (
        <View style={ListStyle.list}>
            <FlatList
                data={list}
                renderItem={({item: {title, quantity, onEdit}}) => (
                    <ListItem title={title} quantity={quantity} onEdit={onEdit}
                              onSubmit={onListItemSubmit}/>
                )}
                keyExtractor={({_id}) => _id}
            />
        </View>
    );
}
