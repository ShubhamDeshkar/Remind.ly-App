import React, { Component } from "react";

class EmailCompp extends Component {
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
					<label htmlFor="">Email Address</label>
					<input
						type="email"
						className="form-control"
						style={{ width: "300px" }}
						placeholder="Email"
						defaultValue={values.email}
						onChange={handleChange("email")}
					/>
					<small>We do not share your email with anyone!</small>
				</div>
				<div class="form-group">
					<label htmlFor="">Confirm Email</label>
					<input
						type="email"
						class="form-control"
						style={{ width: "300px" }}
						placeholder="Confirm Email"
						defaultValue={values.confirmEmail}
						onChange={handleChange("confirmEmail")}
					/>
					<small>Retype your email</small>
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

export default EmailCompp;
