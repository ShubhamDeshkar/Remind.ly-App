import React, { Component } from "react";
import FgtPassword from "./testComponents/FgtPassword";

class SignupCard extends Component {
	render() {
		return (
			<div
				className="container shadow-lg border"
				style={{
					marginTop: "100px",
					borderRadius: 8,
					width: "400px",
					height: "550px"
				}}
			>
				<FgtPassword />
			</div>
		);
	}
}

export default SignupCard;
