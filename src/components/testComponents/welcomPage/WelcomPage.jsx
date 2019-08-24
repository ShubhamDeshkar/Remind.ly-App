import React, { Component } from "react";
import UserAuthenticationService from "../../../js/UserAuthenticationService";
import AllStats from "./AllStats";

class WelcomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<h1
					className="text-center mt-4 text-muted font-weight-normal"
					style={{ fontSize: 50 }}
				>
					Welcome{" "}
					<span className="font-italic">
						{UserAuthenticationService.getName()}!
					</span>
				</h1>
				<h3 className="text-muted text-center mt-5">
					What do you want to do today?
				</h3>
				<AllStats />
			</>
		);
	}
}

export default WelcomePage;
