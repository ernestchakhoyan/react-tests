export const findBtTestAttr = (component, attr) => {
	return component.find(`[data-test="${attr}"]`);
};