import React, { Component } from "react";
import Form from "./signinform/Form";

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
				<Form />
			</div>
		);
	}
}

export default SigninCard;
