import React from "react";
import Bikers from ".";
import "../../setupTests";
import initialState from "../../redux/initialeState";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { StoreContext } from "redux-react-hook";
import createSagaMiddleware from "redux-saga";
import ReactDOM from "react-dom";

const mockStore = configureStore([createSagaMiddleware()]);

describe("Test the Bikers Component", () => {
  let store: any;
  beforeEach(() => {
    store = mockStore({
      user: ""
    });
  });
  it("testing return of h1", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Bikers />, div);
    expect(document.getElementById("div")).toBe(null);
  });

  it("mount without craching", () => {
    const wrapper = mount(
      <StoreContext.Provider value={store}>
        <Bikers />
      </StoreContext.Provider>
    );
    expect(wrapper.find(Bikers).length).toBe(1);
  });
});
