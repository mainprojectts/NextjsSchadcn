import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: boolean
}

const initialState: CounterState = {
  value: false,
}

export const globalSuccesschange = createSlice({
  name: 'success',
  initialState,
  reducers: {
    setglobalsuccessChange: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value =!state.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { setglobalsuccessChange } = globalSuccesschange.actions

export default globalSuccesschange.reducer