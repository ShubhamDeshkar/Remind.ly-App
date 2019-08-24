import React, { Component } from "react";

class NameComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: props.values
		};
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, handleChange, handleReset } = this.props;
		return (
			<form>
				<div className="form-group">
					<label>First Name</label>
					<input
						type="name"
						className="form-control"
						autoFocus
						autoComplete="true"
						style={{ width: "300px" }}
						placeholder="First Name"
						defaultValue={values.firstName}
						onChange={handleChange("firstName")}
					/>
					<small>Min 2 characters</small>
				</div>
				<div className="form-group">
					<label htmlFor="">Last Name</label>
					<input
						type="name"
						className="form-control"
						autoComplete="true"
						style={{ width: "300px" }}
						placeholder="Last Name"
						defaultValue={values.lastName}
						onChange={handleChange("lastName")}
					/>
					<small>Min 2 characters</small>
				</div>
				<div className="row justify-content-end mx-auto">
					<button
						className="btn btn-ternary mr-2"
						style={{ width: "80px" }}
						onClick={handleReset}
					>
						Cancel
					</button>
					<button
						className="btn btn-primary"
						style={{ width: "80px" }}
						onClick={this.continue}
					>
						Next
					</button>
				</div>
			</form>
		);
	}
}

export default NameComp;
