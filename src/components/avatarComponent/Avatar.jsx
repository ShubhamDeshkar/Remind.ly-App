import React, { Component } from "react";
import SelectGender from "./SelectGender";
import AllCards from "./AllCards";

class Avatar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1
		};
	}

	nextStep = () => {
		this.setState({
			step: this.state.step + 1
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

	render() {
		switch (this.state.step) {
			case 1:
				return (
					<SelectGender
						nextStep={this.nextStep}
						handleChange={this.handleChange}
					/>
				);

			case 2:
				return <AllCards />;

			default:
				break;
		}
	}
}

export default Avatar;
