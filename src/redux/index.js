import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postReducer from './reducer'
import newsReducer from './newsReducer'

const rootReducer = combineReducers({ postReducer, newsReducer })

export const store = configureStore({ reducer: rootReducer })
