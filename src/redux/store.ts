import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import characters from './reducers'

const store = configureStore({
  reducer: {
    characters,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export default store
