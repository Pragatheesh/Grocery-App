import {
    ADD_GROCERY_LIST_ITEM,
    FETCH_LIST_FAILURE,
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    SAVE_LIST_ITEM_FAILURE,
    SAVE_LIST_ITEM_REQUEST,
    SAVE_LIST_ITEM_SUCCESS
} from "../actionTypes/grocery";

const fetchListRequest = () => ({type: FETCH_LIST_REQUEST});

const fetchListFailure = err => ({type: FETCH_LIST_FAILURE, err});

const fetchListSuccess = payload => ({type: FETCH_LIST_SUCCESS, payload});

export const fetchListAsync = () => {
    return (dispatch, getState, serviceManager) => {
        dispatch(fetchListRequest());

        let groceryService = serviceManager.get('GroceryService');

        groceryService.getGroceryList()
            .then(list => dispatch(fetchListSuccess({list})))
            .catch(error => dispatch(fetchListFailure(error)));
    };
};

export const addGroceryListItem = () => ({type: ADD_GROCERY_LIST_ITEM});

const saveListItemRequest = () => ({type: SAVE_LIST_ITEM_REQUEST});

const saveListItemFailure = err => ({type: SAVE_LIST_ITEM_FAILURE, err});

const saveListItemSuccess = payload => ({type: SAVE_LIST_ITEM_SUCCESS, payload});

export const saveListItemAsync = (item) => {
    return (dispatch, getState, serviceManager) => {
        dispatch(saveListItemRequest());

        let groceryService = serviceManager.get('GroceryService');

        groceryService.saveGroceryItem(item)
            .then(item => dispatch(saveListItemSuccess({item})))
            .catch(error => dispatch(saveListItemFailure(error)));
    };
};