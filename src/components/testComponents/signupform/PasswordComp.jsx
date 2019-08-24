import React, { Component } from "react";

class PasswordComp extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values, handleChange, handleReset } = this.props;

		return (
			<form>
				<div className="form-group">
					<label htmlFor="">Enter your password</label>
					<input
						type="password"
						className="form-control"
						autoFocus
						style={{ width: "300px" }}
						placeholder="Password"
						defaultValue={values.password}
						onChange={handleChange("password")}
					/>
					<small>Min 8 characters</small>
				</div>
				<div className="form-group">
					<label htmlFor="">Confirm Password</label>
					<input
						type="password"
						className="form-control"
						style={{ width: "300px" }}
						placeholder="Confirm Password"
						defaultValue={values.confirmPassword}
						onChange={handleChange("confirmPassword")}
					/>
					<small>Retype your password</small>
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
						onClick={this.continue}
					>
						Next
					</button>
				</div>
			</form>
		);
	}
}

export default PasswordComp;
