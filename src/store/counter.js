import { createSlice } from '@reduxjs/toolkit'

// slice number 1
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
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
