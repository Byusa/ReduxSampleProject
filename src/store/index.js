// Create  a redux store
import { createStore } from 'redux'

const initialState = { counter : 0 , showCounter: true };

const counterReducer = (state = initialState, action) => { // reducer function, that has a function (old state, dispatched ) -> returns Output: new State Object that replaced the old state
    if (action.type === "increment"){
        // never mutate the existing state,
        // always overwrite it 
        return {
            counter: state.counter + 1, 
            showCounter: state.showCounter // we must always overwrite an
        }
    }

    if (action.type === "increase"){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === "decrement"){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle'){
        return {
            counter: state.counter, // not changing it
            showCounter: !state.showCounter // changing to what it's not
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store