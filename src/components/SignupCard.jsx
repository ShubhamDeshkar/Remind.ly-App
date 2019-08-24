import React, { Component } from "react";
import Form from "./testComponents/signupform/Form";

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
				<Form />
			</div>
		);
	}
}

export default SignupCard;
