import React, { Component } from "react";
import SigninComp from "./SigninComp";

class SigninCard extends Component {
	render() {
		return (
			<div
				className="container shadow-lg border"
				style={{
					marginTop: "150px",
					borderRadius: 8,
					width: "400px",
					height: "550px"
				}}
			>
				<SigninComp />
			</div>
		);
	}
}

export default SigninCard;
