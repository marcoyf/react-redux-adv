import * as actionTypes from './actionTypes';

// Action Creators: extremelly useful for handling asynchronous code with Redux Thunk

// Where to put code logic? Answer: Best place is inside the Reducer

// Action Creators:
// - can run async code
// - shouldn't prepare the State update too much

// Reducers:
// - pure, sync code only
// - core Redux concept: Reducers update the State

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    // we can get the dispatch as an argument here because of Redux Thunk
    // we can also get the State as a second argument also because of Redux Thunk. Not a good practice, but we can.
    // Redux Thunk middleware runs between the dispatch of an Action and the point of time that this Action reaches the Reducer
    // then Redux Thunk has access to this Action, can block it and can dispatch a new Action after we run our asynchronous code
    // return dispatch => {
    return (dispatch, getState) => {
        const oldCounter = getState().ctr.counter;
        console.log(oldCounter);

        // simulates an asynchronous call
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};