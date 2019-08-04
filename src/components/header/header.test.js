import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import {findBtTestAttr} from "../../utils"

const setUp = (props = {}) => {
	return shallow(<Header {...props} />);
};

describe("Header component", () => {

	let component;

	beforeEach(() => {
		component = setUp();
	});

	it("Should render without errors", () => {
		const wrapper = findBtTestAttr(component,"header-component");
		expect(wrapper.length).toBe(1);
	});

	it("Should render logo", () => {
		const logo = findBtTestAttr(component,"logo-img");
		expect(logo.length).toBe(1);
	});
});