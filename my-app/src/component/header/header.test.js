import React from "react"
import {shallow} from "enzyme"
import Header from "./index"
import {findByTestAtribute} from "./../../../Utils"

//test()
//Nested describe

const setUp = (props={}) =>{
    const component = shallow(<Header {...props} />)
    return component
}



describe("Header Component", () =>{
    let component
    beforeEach(() =>{
        component = setUp()
    })
    describe("Nested", () =>{
        it("Should render without errors" , () =>{
            const wrapper = findByTestAtribute(component, "headerComponent")
            expect(wrapper.length).toBe(1)
        })
        it("Should render a logo", () =>{
            const logo = findByTestAtribute(component, "logoImg")
            expect(logo.length).toBe(1)
        })
    })
})