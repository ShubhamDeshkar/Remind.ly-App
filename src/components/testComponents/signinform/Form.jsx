import React, { Component } from "react";
import NameComp from "./NameComp";
import EmailComp from "./EmailComp";
import PasswordComp from "./PasswordComp";

class Form extends Component {
	constructor() {
		super();
		this.state = {
			step: 1,
			firstName: "",
			lastName: "",
			email: "",
			confirmEmail: "",
			password: "",
			confirmPassword: ""
		};
	}

	// writing arrow functions, so it does not need binding in the constructor
	nextStep = () => {
		this.setState({
			step: this.state.step + 1
		});
	};

	prevStep = () => {
		this.setState({
			step: this.state.step - 1
		});
	};

	handleChange = input => e => {
		this.setState(
			{
				[input]: e.target.value
			},
			() => {
				console.log(this.state);
			}
		);
	};

	handleReset = () => {
		this.setState({
			step: 1,
			firstName: "",
			lastName: "",
			email: "",
			confirmEmail: "",
			password: "",
			confirmPassword: ""
		});
	};

	render() {
		const {
			step,
			firstName,
			lastName,
			email,
			confirmEmail,
			password,
			confirmPassword
		} = this.state;

		const values = {
			step,
			firstName,
			lastName,
			email,
			confirmEmail,
			password,
			confirmPassword
		};

		switch (step) {
			case 1:
				return (
					<div>
						<div
							className="h2 text-center py-5"
							style={{ fontWeight: "normal" }}
						>
							We'd like to know you better
						</div>
						<div
							className="container px-0"
							style={{ width: "300px", marginTop: "50px" }}
						>
							<NameComp
								values={values}
								nextStep={this.nextStep}
								handleChange={this.handleChange}
								handleReset={this.handleReset}
							/>
						</div>
					</div>
				);

			case 2:
				return (
					<div>
						<div
							className="h2 text-center py-5"
							style={{ fontWeight: "normal" }}
						>
							Let's stay connected, you know!
						</div>
						<div className="container px-0 mt-5" style={{ width: "300px" }}>
							<EmailComp
								values={values}
								nextStep={this.nextStep}
								prevStep={this.prevStep}
								handleChange={this.handleChange}
								handleReset={this.handleReset}
							/>
						</div>
					</div>
				);

			case 3:
				return (
					<div>
						<div
							className="h2 text-center py-5"
							style={{ fontWeight: "normal" }}
						>
							We take privacy very seriously
						</div>
						<div className="container px-0 mt-5" style={{ width: "300px" }}>
							<PasswordComp
								values={values}
								nextStep={this.nextStep}
								prevStep={this.prevStep}
								handleChange={this.handleChange}
								handleReset={this.handleReset}
							/>
						</div>
					</div>
				);

			default:
				break;
		}
	}
}

export default Form;
