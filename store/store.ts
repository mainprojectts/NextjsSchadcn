import { configureStore } from '@reduxjs/toolkit'
import SuccessChange from "./SuccessChange"
import { globalSuccesschange } from './globalSuccess'

export const store = configureStore({
  reducer: {
    success:SuccessChange,
    globalsuccess:globalSuccesschange,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch