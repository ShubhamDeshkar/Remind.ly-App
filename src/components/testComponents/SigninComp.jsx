import React, { Component } from "react";

class SignupComp extends Component {
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
								className="form-control"
								style={{ width: "300px" }}
								placeholder="Email"
							/>
							<small>The one that you signed up with</small>
						</div>
						<div class="form-group">
							<label htmlFor="">Last Name</label>
							<input
								type="password"
								class="form-control"
								style={{ width: "300px" }}
								placeholder="Password"
							/>
							<small>
								<a href="s">Forgot Password?</a>
							</small>
						</div>
						<div className="row justify-content-end mx-auto">
							<button
								className="btn btn-ternary mr-2"
								style={{ width: "80px" }}
							>
								Cancel
							</button>
							<button className="btn btn-primary" style={{ width: "80px" }}>
								Sign in
							</button>
						</div>
					</form>
					<div className="row mt-3 text-center" style={{ fontSize: 18 }}>
						<div className="col pb-1 border rounded border-primary">
							New to{" "}
							<span
								style={{
									fontFamily: "Open Sans Condensed"
								}}
							>
								Remind<span className="text-primary">.</span>ly
							</span>
							? <a href="s">Sign up</a>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default SignupComp;
