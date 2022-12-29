// Create  a redux store
import { createSlice } from '@reduxjs/toolkit'

// slice number 2
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
export const authActions = authSlice.actions;

export default authSlice.reducer; // we are just exporting the reducer
