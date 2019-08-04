import React from "react";
import Logo from "../../assets/logo.png";
import "./styles.scss"

const Header = (props) => {
	return (
		<header data-test="header-component">
			<div className="wrapper">
				<div className="logo">
					<img
						src={Logo}
						alt="logo"
						data-test="logo-img"
					/>
				</div>
			</div>
		</header>
	)
};

export default Header;