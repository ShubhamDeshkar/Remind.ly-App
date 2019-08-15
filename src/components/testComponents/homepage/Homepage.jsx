import React, { Component } from "react";
import Features from "./Features";
import Banner from "./Banner";

class Homepage extends Component {
	render() {
		return (
			<div>
				<div className="container text-center">
					<div className="row pt-3">
						<h2
							className="col text-muted mb-0"
							style={{ fontWeight: "normal" }}
						>
							Welcome to
						</h2>
					</div>
					<div className="row">
						<h1
							className="col text-center"
							style={{ fontFamily: "Open Sans Condensed", fontSize: 120 }}
						>
							Remind<span className="text-primary">.</span>ly
						</h1>
					</div>
					<div className="row justify-content-center my-2">
						<h5
							className="col text-muted text-justify"
							style={{ maxWidth: 490 }}
						>
							An app that is designed to give the control of your life back to{" "}
							<strong>you</strong> to help you acheive more and help others do
							more too by using its built-in sharing tools.
						</h5>
					</div>
					<Features />
				</div>
				<Banner />
			</div>
		);
	}
}

export default Homepage;
