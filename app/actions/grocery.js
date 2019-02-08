import {
    ADD_GROCERY_LIST_ITEM,
    FETCH_LIST_FAILURE,
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    SAVE_LIST_ITEM_FAILURE,
    SAVE_LIST_ITEM_REQUEST,
    SAVE_LIST_ITEM_SUCCESS
} from "../actionTypes/grocery";
import {BASE_URL} from "../config";

const fetchListRequest = () => ({type: FETCH_LIST_REQUEST});

const fetchListFailure = err => ({type: FETCH_LIST_FAILURE, err});

const fetchListSuccess = payload => ({type: FETCH_LIST_SUCCESS, payload});

export const fetchListAsync = () => {
    return (dispatch) => {
        dispatch(fetchListRequest());
        fetch(`${BASE_URL}/grocery`)
            .then(res => res.json())
            .then(list => {
                dispatch(fetchListSuccess({list}))
            })
            .catch(error => dispatch(fetchListFailure(error)));
    };
};

export const addGroceryListItem = () => ({type: ADD_GROCERY_LIST_ITEM});

const saveListItemRequest = () => ({type: SAVE_LIST_ITEM_REQUEST});

const saveListItemFailure = err => ({type: SAVE_LIST_ITEM_FAILURE, err});

const saveListItemSuccess = payload => ({type: SAVE_LIST_ITEM_SUCCESS, payload});

export const saveListItemAsync = (item) => {
    return (dispatch) => {
        dispatch(saveListItemRequest());
        fetch(`${BASE_URL}/grocery`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(item => {
                dispatch(saveListItemSuccess({item}));
            })
            .catch(error => dispatch(saveListItemFailure(error)));
    };
};