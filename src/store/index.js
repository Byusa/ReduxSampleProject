// Create  a redux store
import { createStore } from 'redux'

const counterReducer = (state = { counter : 0 }, action) => { // reducer function, that has a function (old state, dispatched ) -> returns Output: new State Object that replaced the old state
    if (action.type === "increment"){
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === "decrement"){
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store