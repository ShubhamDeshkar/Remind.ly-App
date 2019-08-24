import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../../js/UserDataService";
import UserAuthenticationService from "../../js/UserAuthenticationService";

class SignupComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	handleOnChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleOnclick = e => {
		e.preventDefault();
		UserDataService.isUser(this.state)
			.then(response => {
				console.log(response);
				UserAuthenticationService.login(response.data);
				this.props.redirectToWlecomePage();
			})
			.catch(error => {
				if (error.response.status === 404) {
					console.log("Looks like you haven't signrd up yet?");
				}
			});
	};

	render() {
		return (
			<>
				<div className="h2 text-center py-5" style={{ fontWeight: "normal" }}>
					Welcome back! We missed you
				</div>
				<div
					className="container px-0"
					style={{ width: "300px", marginTop: "50px" }}
				>
					<form>
						<div className="form-group">
							<label>Email Address</label>
							<input
								type="email"
								name="email"
								className="form-control"
								autoFocus
								style={{ width: "300px" }}
								placeholder="Email"
								onChange={this.handleOnChange}
							/>
							<small>The one that you signed up with</small>
						</div>
						<div className="form-group">
							<label htmlFor="">Password</label>
							<input
								type="password"
								name="password"
								className="form-control"
								style={{ width: "300px" }}
								placeholder="Password"
								onChange={this.handleOnChange}
							/>
							<small>
								<Link to="/forgot">Forgot Password?</Link>
							</small>
						</div>
						<div className="row justify-content-end mx-auto">
							<button
								className="btn btn-ternary mr-2"
								style={{ width: "80px" }}
							>
								Cancel
							</button>
							<button
								className="btn btn-primary"
								style={{ width: "80px" }}
								onClick={this.handleOnclick}
							>
								Sign in
							</button>
						</div>
					</form>
					<div className="row mt-4 text-center" style={{ fontSize: 18 }}>
						<div className="col pb-1 border rounded border-primary">
							New to{" "}
							<span
								style={{
									fontFamily: "Open Sans Condensed"
								}}
							>
								Remind<span className="text-primary">.</span>ly
							</span>
							? <Link to="/signup">Sign up</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default SignupComp;
