import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

// Where to put code logic? Answer: Best place is inside the Reducer

// Action Creators:
// - can run async code
// - shouldn't prepare the State update too much

// Reducers:
// - pure, sync code only
// - core Redux concept: Reducers update the State

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // return {
            //     ...state,
            //     // push method manipulates the old array
            //     // concat method returns a new array, which is the old array plus the argument added to concat
            //     results: state.results.concat({ id: new Date(), value: action.result })
            // }
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result * 2 }) });

        case actionTypes.DELETE_RESULT:
            // one way to do it
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)

            // most common way to do it
            // const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            // return {
            //     ...state,
            //     results: updatedArray
            // }
            return deleteResult(state, action);

        default:
        // do nothing
    }
    return state;
};

export default reducer;