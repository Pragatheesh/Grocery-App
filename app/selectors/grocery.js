import {createSelector} from 'reselect'

const getGroceryList = ({grocery: {list}}) => (list);

const getTotalGroceryItems = createSelector(
    [getGroceryList],
    (list) => (list.reduce((sum, {quantity}) => {
        return sum + quantity;
    }, 0))
);

export default getTotalGroceryItems