import React, { Component } from "react";

class SelectGender extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: ""
		};
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
		// console.log(this.props);
	};

	setGender = () => {
		console.log("set gender called");
		this.props.handleChange("gender");
	};

	handleOnClick = e => {
		e.preventDefault();
		var element = document.getElementById("inlineFormCustomSelect");
		if (
			element.value === "Male" ||
			element.value === "Female" ||
			element.value === "Dragon"
		) {
			console.log(element.value);
			console.log(this.props);
			this.props.nextStep();
		} else {
			console.log("You have not selected a value");
		}
	};

	render() {
		const { gender, handleChange, nextStep } = this.props;
		return (
			<div
				className="container mt-5"
				style={{ paddingLeft: 100, paddingRight: 100 }}
			>
				<div className="row justify-content-center text-muted">
					<h1>Please select your gender</h1>
				</div>
				<div className="row justify-content-center">
					<form className="mt-5">
						<div className="form-row">
							<div className="col-auto">
								<label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
									You are...
								</label>
								<select
									className="custom-select mr-sm-2"
									id="inlineFormCustomSelect"
									onChange={this.setGender("gender")}
								>
									<option defaultValue>Choose...</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									<option value="Dragon">Dragon</option>
								</select>
							</div>
						</div>
						<div className="my-2">
							<button
								type="submit"
								className="btn btn-primary"
								onClick={this.handleOnClick}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SelectGender;
