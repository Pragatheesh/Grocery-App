import {
    ADD_GROCERY_LIST_ITEM,
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    SAVE_LIST_ITEM_SUCCESS
} from "../actionTypes/grocery";

const INITIAL_STATE = {
    list: [],
    loading: false
};

const NEW_ITEM = "NEW_ITEM";

const groceryReducer = (state = INITIAL_STATE, {type, payload = {}}) => {
    switch (type) {
        case FETCH_LIST_REQUEST:
            return fetchGroceryListRequest(state);
        case FETCH_LIST_SUCCESS:
            return fetchGroceryListSuccess(state, payload);
        case ADD_GROCERY_LIST_ITEM:
            return addGroceryListItem(state);
        case SAVE_LIST_ITEM_SUCCESS:
            return saveListItemSuccess(state, payload);
        default:
            return state;
    }
};

function fetchGroceryListRequest(state) {
    return {
        ...state,
        loading: true
    };
}

function fetchGroceryListSuccess(state, {list}) {
    return {
        ...state,
        list,
        loading: false
    }
}

function addGroceryListItem(state) {
    return {
        ...state,
        list: [
            ...state.list,
            {
                _id: NEW_ITEM,
                title: "",
                quantity: "",
                onEdit: true
            }
        ]
    }
}

function saveListItemSuccess(state, {item}) {
    return {
        ...state,
        loading: false,
        list: state.list.map(
            listItem => {
                if (listItem._id === NEW_ITEM) {
                    return {
                        ...item,
                        onEdit: false
                    }
                }
                return listItem;
            }
        )
    }
}

export default groceryReducer;