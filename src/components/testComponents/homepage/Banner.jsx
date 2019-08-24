import React, { Component } from "react";
import clipboard from "./images/clipboard.svg";

class Banner extends Component {
	render() {
		return (
			<div className="bg-primary text-center pb-3 mt-5">
				<div className="container">
					<div className="row w-100">
						<h2 className="col text-center text-white font-weight-normal mt-2 mb-5">
							Let us be the secret weapon of your success
						</h2>
					</div>
					<div className="row w-100">
						<img
							src={clipboard}
							alt=""
							className="col mt-3"
							style={{ height: 200, width: 200 }}
						/>
						<div className="col justify-content-center text-white font-weight-normal mt-3">
							<h3 className="font-weight-normal">
								Focus on more important things!
							</h3>
							<h5 className="mt-3 text-center">
								Remind.ly helps busy people like you take care of the important
								stuff in your life while it will handle the more mundane tasks
								of life and will do what it does best. Remind you about it.
							</h5>
							<hr className="mt-4" style={{ borderColor: "white" }} />
							<h3 className="font-weight-normal">Wanna hop on quickly?</h3>
							<form className="row mt-3">
								<div className="col form-group form-inline justify-content-center">
									<input
										type="email"
										className="form-control"
										style={{ width: "300px" }}
										placeholder="Email"
									/>
									<button className="btn btn-outline-secondary ml-3">
										SIGN UP
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;
