import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

interface AuthState {
    token: string | null;
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<string>) {
            state.token = action.payload;
            state.error = null;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.token = null;
        },
    },
});

export const { loginSuccess, loginFailure } = authSlice.actions;

export default counterSlice;