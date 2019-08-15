import React, { Component } from "react";

class Signforms extends Component {
	render() {
		return (
			<div className="row w-100 mt-3">
				<div className="col">
					<div
						className="container shadow mx-auto my-3 pb-5 pt-3 rounded"
						style={{ width: 350 }}
					>
						<h3 className="font-weight-normal">Are you a new user?</h3>
						<form className="mt-4">
							<div className="form-group">
								<label htmlFor="">First Name</label>
								<input
									type="name"
									className="form-control"
									style={{ width: "300px" }}
									placeholder="First Name"
								/>
								<small>Min 2 characters</small>
							</div>
							<div className="form-group">
								<label htmlFor="">Last Name</label>
								<input
									type="name"
									className="form-control"
									style={{ width: "300px" }}
									placeholder="Last Name"
								/>
								<small>Min 2 characters</small>
							</div>
							<div className="form-group">
								<label htmlFor="">Email Address</label>
								<input
									type="email"
									className="form-control"
									style={{ width: "300px" }}
									placeholder="Email"
								/>
								<small>To keep in touch</small>
							</div>
							<div className="row justify-content-end mr-3">
								<button className="btn btn-primary" style={{ width: "90px" }}>
									SIGN UP
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="col">
					<div
						className="container shadow mx-auto my-3 pb-5 pt-3 rounded"
						style={{ width: 350 }}
					>
						<h3 className="font-weight-normal">Are you a returning user?</h3>
						<form className="mt-4">
							<div className="form-group">
								<label htmlFor="">Email Address</label>
								<input
									type="email"
									className="form-control"
									style={{ width: "300px" }}
									placeholder="Email"
								/>
								<small>The one that you signed up with</small>
							</div>
							<div className="form-group">
								<label htmlFor="">Password</label>
								<input
									type="password"
									className="form-control"
									style={{ width: "300px" }}
									placeholder="Password"
								/>
								<small>Our little secret</small>
							</div>
							<div className="row justify-content-end mr-3">
								<button className="btn btn-primary" style={{ width: "90px" }}>
									SIGN IN
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Signforms;
