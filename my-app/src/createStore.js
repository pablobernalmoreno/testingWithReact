import {createStore, applyMiddleware} from "redux"
import RootReducer from "./reducers"
import ReduxThunk from "redux-thunk"

export const middlewares = [ReduxThunk]

export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleWare(RootReducer)