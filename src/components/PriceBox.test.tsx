import React from "react"
import Enzyme , { shallow} from "enzyme"

import PriceBox from "./PriceBox"

describe("PriceBox", () => {
  it("shoould render formated as currency", () => {
    const wrapper = shallow(<PriceBox value={10} currency="USD"/>)
    expect(wrapper.text()).toEqual("$10.00")
  })
})