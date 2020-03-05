import React from "react"
import {shallow} from "enzyme"
import {findByTestAtribute, checkProps} from "./../../../Utils"
import ListItem from "./index"

describe("ListItem Component", () =>{
    describe("Checking PropTypes", () =>{
        it("Should NOT throw a warning", () =>{
            const expectedProps ={
                title: "Example Title",
                description: "Some text"
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })
    describe("Component Renders", () => {
        let wrapper;
        beforeEach(() =>{
            const props = {
                title: "Example Title",
                description: "Some text"
            }
            wrapper = shallow(<ListItem {...props}/>)
        })
        it("Should render without error", () => {
            const component = findByTestAtribute(wrapper, "listItemComponent")
            expect(component.length).toBe(1)
        })
        it("Should render a title", () =>{
            const title = findByTestAtribute(wrapper, "componentTitle")
            expect(title.length).toBe(1)
        })
        it("Should render a description", () => {
            const description = findByTestAtribute(wrapper, "componentDescription")
            expect(description.length).toBe(1)
        })
    })

    describe("Should NOT render", () => {
        let wrapper
        beforeEach(() =>{
            const props = {
                description: "Some text"
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        it("Component is not rendered", () =>{
            const component = findByTestAtribute(wrapper, "listItemComponent")
            expect(component.length).toBe(0)
        })
    })
})
