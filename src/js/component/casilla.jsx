import React, { useState } from "react";
import PropTypes from "prop-types";

const Casilla = props => {
	return (
		<div
			className="cuadrado"
			onClick={() => {
				if (props.value == "") {
					props.onclick();
				}
			}}>
			{props.value}
		</div>
	);
};

Casilla.propTypes = {
	onclick: PropTypes.func,
	value: PropTypes.string
};

export default Casilla;
