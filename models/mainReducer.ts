import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import postsReducer from './postsReducer'
const reducer = combineReducers(postsReducer)
export type State = ReturnType<typeof reducer>
export const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware(),
})
