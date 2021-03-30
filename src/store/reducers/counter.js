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
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // not a deep clone because the results array is still the same object
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
            return updateObject(state, { counter: state.counter + 1 });

        case actionTypes.DECREMENT:
            // return {
            //     // using the spread operator
            //     // not a deep clone as well, the results array is still the same object
            //     ...state,
            //     counter: state.counter - 1
            // }
            return updateObject(state, { counter: state.counter - 1 });

        case actionTypes.ADD:
            // return {
            //     ...state,
            //     counter: state.counter + action.val
            // }
            return updateObject(state, { counter: state.counter + action.val });

        case actionTypes.SUBTRACT:
            // return {
            //     ...state,
            //     counter: state.counter - action.val
            // }
            return updateObject(state, { counter: state.counter - action.val });

        default:
        // do nothing
    }
    return state;
};

export default reducer;