import React from "react"
import {shallow} from "enzyme"
import Headline from "./index"
import {findByTestAtribute} from "./../../../Utils"

const setUp = (props={}) =>{
    const component = shallow(<Headline {...props} />)
    return component
}

describe("Headline Component", () =>{

    describe("Have props", () =>{

        let wrapper
        beforeEach(() => {
            const props = {
                header: "Test header",
                description: "Test description"
            }
            wrapper = setUp(props)
        })

        it("Should render without errors", () => {
            const component = findByTestAtribute(wrapper, "HeadlineComponent")
            expect(component.length).toBe(1)
        })
        it("Should render a H1", () =>{
            const h1 = findByTestAtribute(wrapper, "header")
            expect(h1.length).toBe(1)
        })
        it("Should render a description", () =>{
            const description = findByTestAtribute(wrapper, "descWrapper")
            expect(description.length).toBe(1)
        })
    })

    describe("Have no props", () =>{
        
        let wrapper

        beforeEach(() =>{
            wrapper = setUp()
        })
        it("Should not render", () =>{
            const component = findByTestAtribute(wrapper, "HeadlineComponent")
            expect(component.length).toBe(0)
        })
    })
})