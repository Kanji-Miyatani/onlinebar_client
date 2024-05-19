import { createSlice, configureStore } from '@reduxjs/toolkit'
interface CounterState {
    value: number;
  }
  
  const initialState: CounterState = {
    value: 0,
  };
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})
export const { incremented, decremented } = counterSlice.actions;


export default counterSlice;