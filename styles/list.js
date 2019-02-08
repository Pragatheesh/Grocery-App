import {StyleSheet} from "react-native";

export const ListStyle = StyleSheet.create({
    container: {},
    list: {
        height: "85%"
    },
    footer: {
        backgroundColor: '#CCC',
        height: "15%",
    },
    itemContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'red'
    },
    itemName: {
        flex: 0.8,
        padding: 10,
        fontSize: 18
    },
    itemQuantity: {
        flex: 0.2,
        textAlign: 'right',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 18
    }
});