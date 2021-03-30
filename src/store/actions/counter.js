import * as actionTypes from './actionTypes';

// Action Creators: extremelly useful for handling asynchronous code with Redux Thunk

// Where to put code logic? Answer: Best place is inside the Reducer

// Action Creators:
// - can run async code
// - shouldn't prepare the State update too much

// Reducers:
// - pure, sync code only
// - core Redux concept: Reducers update the State

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    };
};