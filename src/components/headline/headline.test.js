import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import {findBtTestAttr} from "../../utils";
import Header from "../header";

const setUp = (props = {}) => {
	return shallow(<Headline {...props} />);
};

describe("Headline", () => {
	describe("Have props", () => {

		let wrapper;
		beforeEach(() => {
			const props = {
				header: "Test header",
				desc: "Test description"
			};

			wrapper = setUp(props);
		});

		it("Should render with no error", () => {
			const component = findBtTestAttr(wrapper,"headline-component");
			expect(component.length).toBe(1);
		});

		it("Should render h1", () => {
			const component = findBtTestAttr(wrapper,"header");
			expect(component.length).toBe(1);
		});

		it("Should render description", () => {
			const component = findBtTestAttr(wrapper,"description");
			expect(component.length).toBe(1);
		});
	});

	describe("Have no props",() => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUp();
		});

		it("Should not render", () => {
			const component = findBtTestAttr(wrapper,"headline-component");
			expect(component.length).toBe(0);
		});
	})
});