import React, { Component } from "react";
import * as PropTypes from "prop-types";

class ListItem extends Component {
	render() {
		const {title, desc} = this.props;

		if(!title){
			return null;
		}

		return (
			<div data-test="list-item">
				<h2 data-test="list-title">{title}</h2>
				<div data-test="list-desc">{desc}</div>
			</div>
		);
	}
}

ListItem.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
};

export default ListItem;