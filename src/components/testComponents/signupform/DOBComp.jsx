import React, { Component } from "react";
import UserDataService from "../../../js/UserDataService";

class DOBComp extends Component {
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
		console.log(this.props.values);
		var user = this.props.values;
		UserDataService.signupUser(user)
			.then(response => {
				console.log("Yay!");
			})
			.catch(error => {
				console.log(error.response.status);
			});
	};

	render() {
		const { values, handleChange, handleReset } = this.props;

		return (
			<form>
				<div className="form-group">
					<label htmlFor="">Enter date of birth</label>
					<input
						className="form-control"
						autoFocus
						type="date"
						onChange={handleChange("dateOfBirth")}
					/>
					<small>Optional</small>
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
						Next
					</button>
				</div>
				<div className="row mt-5">
					<h5 className="text-muted font-weigth-normal text-center">
						Happy Birthday in advance for your next Birthday!
					</h5>
				</div>
			</form>
		);
	}
}

export default DOBComp;
