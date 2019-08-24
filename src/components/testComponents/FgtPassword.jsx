import React, { Component } from "react";
import { Link } from "react-router-dom";

class FgtPassword extends Component {
	render() {
		return (
			<>
				<div className="h2 text-center py-5" style={{ fontWeight: "normal" }}>
					Don't worry! Let's reset your password
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
								style={{ width: "300px" }}
								placeholder="Email"
								onChange={this.handleOnChange}
							/>
							<small>The one that you signed up with</small>
						</div>
						<div className="row justify-content-end mx-auto mt-4">
							<button
								className="btn btn-ternary mr-2"
								style={{ width: "100px" }}
							>
								<Link
									className="text-white"
									to="/signin"
									style={{ textDecoration: "none" }}
								>
									Cancel
								</Link>
							</button>
							<button
								className="btn btn-primary"
								style={{ width: "100px" }}
								onClick={this.handleOnclick}
							>
								Send link
							</button>
						</div>
					</form>
					<div
						className="row mt-5 text-center"
						style={{ fontSize: 18, paddingTop: 60 }}
					>
						<div className="col pb-1 border rounded border-primary">
							Did you remember it? <Link to="/signin">Sign in</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default FgtPassword;
