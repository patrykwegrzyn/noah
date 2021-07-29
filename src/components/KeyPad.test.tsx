import React from "react";

import { render, shallow, mount } from "enzyme";

import KeyPad from "./KeyPad";

React.useLayoutEffect = React.useEffect;

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("<KeyPad/>", () => {
  const props = {
    onChange: jest.fn(),
  };

  it("should render", () => {
    const wrapper = render(<KeyPad {...props} />);
  });

  it("shoould render all keypad buttons correctly in 4x3 grid", () => {
    const wrapper = shallow(<KeyPad {...props} />);

    //make sure all 12 buttons render
    const allButtons = wrapper.find("WithStyles(ForwardRef(Button))");
    expect(allButtons).toHaveLength(12);

    //makesure all rows render
    const rows = wrapper.find(".makeStyles-row-2");
    expect(rows).toHaveLength(4);

    //make sure all rows have 3 buttons each
    let i = 0;
    const rowButtons = wrapper.find(".makeStyles-row-2");
    while (i < rowButtons.length) {
      const row = rowButtons.at(i).find("WithStyles(ForwardRef(Button))");
      expect(row).toHaveLength(3);
      i++;
    }
  });

  it("shoould run onChange", () => {
    const wrapper = mount(<KeyPad {...props} />);

    //first run onChange on useEffect
    expect(props.onChange).toHaveBeenCalledTimes(1);
    const button = wrapper.find("WithStyles(ForwardRef(Button))");

    //run onChange on buttonclick
    button.at(0).simulate("click");
    expect(props.onChange).toHaveBeenCalledTimes(2);
  });
});
