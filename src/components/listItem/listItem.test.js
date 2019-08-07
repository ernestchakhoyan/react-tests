import React from "react";
import { shallow } from "enzyme";
import { checkProps, findBtTestAttr } from "../../utils";
import ListItem from "./index";

describe("List item", () => {

	describe("Checking PropTypes", () => {
		it("Should not throw a warning", () => {
			const expectedProps = {
				title: "Example of title",
				desc: "Example of desc",
			};

			const propsError = checkProps(ListItem, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});

	describe("Renders", () => {

		let wrapper;

		const props = {
			title: "Example of title",
			desc: "Example of desc",
		};

		beforeEach(() => {
			wrapper = shallow(<ListItem {...props} />);
		});

		it("Should render a component without errors", () => {
			const listItem = findBtTestAttr(wrapper, "list-item");
			expect(listItem.length).toBe(1);
		});

		it("Should render a title", () => {
			const title = findBtTestAttr(wrapper, "list-title");
			expect(title.length).toBe(1);
		});
		it("Should render a description", () => {
			const desc = findBtTestAttr(wrapper, "list-desc");
			expect(desc.length).toBe(1);
		});
	});

	describe("Should NOT render", () => {
		let wrapper;

		const props = {
			desc: "Example of desc",
		};

		beforeEach(() => {
			wrapper = shallow(<ListItem {...props} />);
		});

		it("Component is NOT rendered", () => {
			const title = findBtTestAttr(wrapper, "list-item");
			expect(title.length).toBe(0);
		});

	});
});