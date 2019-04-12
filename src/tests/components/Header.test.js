import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../../components/Header";
import ReactShallowRenderer from "react-test-renderer/shallow";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  //   expect(wrapper.find("ul").length).toBe(1);
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});
