import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtribute, testStore } from "./../Utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text"
        },
        {
          title: "Example title 2",
          body: "Some text"
        },
        {
          title: "Example title 3",
          body: "Some text"
        }
      ]
    };
    wrapper = setUp(initialState)
  });

  it("Should render without errors", () =>{
      const component = findByTestAtribute(wrapper, "appComponent")
      expect(component.length).toBe(1)
  })

  it("exampleMethod_updatesState should update state", () =>{
    const classInstance = wrapper.instance()
    classInstance.exampleMethod_updatesState()
    const newState = classInstance.state.hideBtn
    expect(newState).toBe(true)
  })
  it("exampleMethod_returnsValue should return value + 1", () =>{
    const classInstance = wrapper.instance()
    const newValue = classInstance.exampleMethod_returnsValue(6)
    expect(newValue).toBe(7)
  })
});
