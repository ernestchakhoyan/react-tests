import checkPropTypes from "check-prop-types";

export const findBtTestAttr = (component, attr) => {
	return component.find(`[data-test="${attr}"]`);
};

export const checkProps = (component, expectedProps) => {
	return checkPropTypes(component.propTypes, expectedProps, "props", component.name);
};