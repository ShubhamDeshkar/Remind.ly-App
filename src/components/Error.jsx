import React, { Component } from "react";

class Error extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "this.props.message"
		};
	}

	render() {
		return (
			<div className="container alert alert-ternary-dark alert-dismissable fade show text-ternary-dark">
				<button
					type="button"
					className="close"
					data-dismiss="alert"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 className="alert-heading">ERROR!</h4>
				{this.state.message}
				<div>
					<small>
						If the error persists, contact support{" "}
						<code>
							<a href="mailto:shubhamd@umd.edu?subject=ERROR-REPORT:">
								shubhamd@umd.edu
							</a>
						</code>
					</small>
				</div>
			</div>
		);
	}
}

export default Error;
