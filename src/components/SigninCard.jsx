import React, { Component } from "react";
import SigninComp from "./testComponents/SigninComp";

class SigninCard extends Component {
	redirectToWlecomePage = () => {
		this.props.history.push("/welcome");
	};

	render() {
		return (
			<div
				className="container shadow-lg border"
				style={{
					marginTop: "100px",
					borderRadius: 8,
					width: "400px",
					height: "570px"
				}}
			>
				<SigninComp redirectToWlecomePage={this.redirectToWlecomePage} />
			</div>
		);
	}
}

export default SigninCard;
