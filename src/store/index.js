// Create  a redux store
import { createSlice, configureStore } from '@reduxjs/toolkit'

// slice 1
const initialCounterState = { counter : 0 , showCounter: true };
// createSlice, will clone the existing state and overwrite it for you 
const counterSlice = createSlice ({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})

// slice 2
const initialAuthState = { isAuthenticated : false }
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState, 
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

// store
const store = configureStore({
    // reducer: counterSlice.reducer, 
    reducer: {
            counter: counterSlice.reducer, 
            auth: authSlice.reducer
    },
    
    // reducer: { counter: counterSlice.reducer }
})
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store











// import { createStore } from 'redux'

// const initialState = { counter : 0 , showCounter: true };

// const counterReducer = (state = initialState, action) => { // reducer function, that has a function (old state, dispatched ) -> returns Output: new State Object that replaced the old state
//     if (action.type === "increment"){
//         // never mutate the existing state,
//         // always overwrite it 
//         return {
//             counter: state.counter + 1, 
//             showCounter: state.showCounter // we must always overwrite an
//         }
//     }

//     if (action.type === "increase"){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === "decrement"){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'toggle'){
//         return {
//             counter: state.counter, // not changing it
//             showCounter: !state.showCounter // changing to what it's not
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);

// export default store