import React, { Component } from "react";

class WhatsNew extends Component {
	render() {
		return (
			<div className="container">
				<div className="alert alert-ternary alert-dismissable fade show text-ternary-dark">
					<button
						type="button"
						className="close"
						data-dismiss="alert"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 className="alert-heading">Whats New? </h4>
					The app is live and the backend is ready! Check out{" "}
					<a
						href="https://github.com/ShubhamDeshkar"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					.
				</div>
			</div>
		);
	}
}

export default WhatsNew;
