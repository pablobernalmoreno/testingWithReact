import { checkPropTypes } from "prop-types"
export const findByTestAtribute = (component, attribute) =>{
    const wrapper = component.find(`[data-test="${attribute}"]`)
    return wrapper
}

export const checkProps = (component, expectedProps) => {
    const propsError = checkPropTypes(component.propTypes, expectedProps, "props", component.name)
    return propsError
}