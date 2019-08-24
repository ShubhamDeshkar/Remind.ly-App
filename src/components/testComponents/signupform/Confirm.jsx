import React, { Component } from "react";

class Confirm extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.values;
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	signup = e => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		const { values, handleChange, handleReset } = this.props;

		return (
			<form>
				<div className="form-group">
					<label htmlFor="">Name</label>
					<input
						className="form-control"
						type="name"
						defaultValue={values.firstName + " " + values.lastName}
						disabled
					/>
				</div>
				<div className="form-group">
					<label htmlFor="">Email</label>
					<input
						className="form-control"
						type="name"
						defaultValue={values.email}
						disabled
					/>
				</div>
				<div className="form-group">
					<label htmlFor="">Date of Birth</label>
					<input
						className="form-control"
						type="name"
						defaultValue={values.dateOfBirth}
						disabled
					/>
				</div>
				<div className="row justify-content-end mx-auto">
					<button
						className="btn btn-ternary mr-2"
						style={{ width: "80px" }}
						onClick={this.back}
					>
						Back
					</button>
					<button
						className="btn btn-primary"
						style={{ width: "80px" }}
						onClick={this.signup}
					>
						Sign up
					</button>
				</div>
			</form>
		);
	}
}

export default Confirm;
