import React, { Component } from "react";
import Form from "./signupform/Form";

class SignupCard extends Component {
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
				<Form />
			</div>
		);
	}
}

export default SignupCard;
