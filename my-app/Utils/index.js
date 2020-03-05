import { checkPropTypes } from "prop-types"
import {applyMiddleware, createStore} from "redux"
import rootReducer from "./../src/reducers"
import {middlewares} from "./../src/createStore"


export const findByTestAtribute = (component, attribute) =>{
    const wrapper = component.find(`[data-test="${attribute}"]`)
    return wrapper
}

export const checkProps = (component, expectedProps) => {
    const propsError = checkPropTypes(component.propTypes, expectedProps, "props", component.name)
    return propsError
}

export const testStore = (initialState) =>{
    const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleWare(rootReducer, initialState)
}