import React from "react";

import { render, shallow, mount } from "enzyme";

import KeyPad , {handleState} from "./KeyPad";

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
    while (i < rows.length) {
      const row = rows.at(i).find("WithStyles(ForwardRef(Button))");
      expect(row).toHaveLength(3);
      i++;
    }
  });

  it("shoould run onChange", () => {
    const wrapper = mount(<KeyPad {...props} />);

    //first run onChange on useEffect
    expect(props.onChange).toHaveBeenCalledTimes(1);

    //run onChange on buttonclick
    const button = wrapper.find("WithStyles(ForwardRef(Button))");
    button.at(0).simulate("click");
    expect(props.onChange).toHaveBeenCalledTimes(2);
    expect(props.onChange).toHaveBeenCalledWith(1);
  });

  describe("<handleState/>", () => {
    it("shoould add decimal point", () => { 
      const state = handleState(".", ["1"])
      expect(state).toEqual(["1", "."])
    })

    it("shoould handle only 1 dot", () => { 
      const state = handleState(".", ["1", "2", "."])
      expect(state).toEqual(["1", "2", "."])
    })

    it("shoould backspace ", () => { 
      const state = handleState("<-", ["1", "2", "."])
      expect(state).toEqual(["1", "2"])
    })

    it("shoould handle keys ", () => { 
      const state = handleState("1", [])
      expect(state).toEqual(["1"])
    })

    it("shoould handle max langth 2 ", () => { 
      const state = handleState("1", ["1", "1"], 2)
      expect(state).toHaveLength(2)
    })
  })

});
