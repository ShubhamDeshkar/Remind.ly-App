import React, { Component } from "react";

class IntroCard extends Component {
	render() {
		return (
			<div
				className="container text-center"
				style={{ marginTop: 120, marginBottom: 50 }}
			>
				<div className="row justify-content-center">
					<h1 className="text-muted" style={{ fontWeight: "normal" }}>
						Do more, always, with
					</h1>
				</div>
				<div className="row justify-content-center">
					<h1
						style={{
							fontFamily: "Open Sans Condensed",
							fontSize: 120
						}}
					>
						Remind<span style={{ color: "#dc3545" }}>.</span>ly
					</h1>
				</div>
				<div className="row justify-content-center my-2">
					<h5 className="text-muted text-justify" style={{ maxWidth: 390 }}>
						An app that gives you the power and control to do more everyday with
						its built{" "}
						<span className="w-75">
							in <strong>sharing tools</strong> and{" "}
							<strong>intuitive user experience</strong>
						</span>
					</h5>
				</div>
				<div className="row justify-content-center mt-3">
					<div className="form-inline">
						<input
							type="email"
							className="form-control form-control-lg mx-3"
							placeholder="Email"
							style={{ width: 300 }}
						/>
						<button className="btn btn-primary btn-lg">TRY FOR FREE</button>
					</div>
				</div>
				<small className="mx-auto">
					Already using Remind.ly? <a href="s">Sign in</a>
				</small>
			</div>
		);
	}
}

export default IntroCard;
