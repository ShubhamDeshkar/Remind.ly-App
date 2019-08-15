import React, { Component } from "react";
import twitter from "./homepage/images/003-twitter.svg";
import facebook from "./homepage/images/001-facebook.svg";
import instagram from "./homepage/images/002-instagram.svg";
import google from "./homepage/images/006-google-plus.svg";
import github from "./homepage/images/005-github.svg";
import linkedin from "./homepage/images/004-linkedin.svg";

class FooterComponent extends Component {
	render() {
		return (
			<div
				className="pb-4 pt-3"
				style={{ marginTop: 50, backgroundColor: "#CCCCCC" }}
			>
				<div className="container">
					<div className="row">
						<div
							className="col text-white"
							style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}
						>
							R
							<span className="text-primary" style={{ fontSize: 40 }}>
								.
							</span>
						</div>
						<div className="col">
							<div className="row mt-3">
								<img
									src={twitter}
									alt="twitter"
									className="col"
									style={{ height: 40, width: 40 }}
								/>
								<img
									src={facebook}
									alt="facebook"
									className="col"
									style={{ height: 40, width: 40 }}
								/>
								<img
									src={instagram}
									alt="instagram"
									className="col"
									style={{ height: 40, width: 40 }}
								/>
								<img
									src={google}
									alt="googlePlus"
									className="col"
									style={{ height: 40, width: 40 }}
								/>
								<img
									src={github}
									alt="github"
									className="col"
									style={{ height: 40, width: 40 }}
								/>
								<img
									src={linkedin}
									alt="linkedin"
									className="col"
									style={{ height: 40, width: 40 }}
								/>
							</div>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-2">
							<h5 className="text-white font-weight-normal">About project</h5>
							<ul className="list-group text-ternary-dark">
								<a href="s" className="list-group text-ternary-dark">
									About
								</a>
								<a href="s" className="list-group text-ternary-dark">
									Home
								</a>
								<a href="s" className="list-group text-ternary-dark">
									poin1
								</a>
								<a href="s" className="list-group text-ternary-dark">
									point2
								</a>
							</ul>
						</div>
						<div className="col-2">
							<h5 className="text-white font-weight-normal">Source Code</h5>
							<ul className="list-group text-ternary-dark">
								<a href="s" className="list-group text-ternary-dark">
									Remindly App
								</a>
								<a href="s" className="list-group text-ternary-dark">
									Remindly API
								</a>
								<a href="s" className="list-group text-ternary-dark">
									point1
								</a>
								<a href="s" className="list-group text-ternary-dark">
									point2
								</a>
							</ul>
						</div>
						<div className="col-2">
							<h5 className="text-white font-weight-normal">Other Apps</h5>
							<ul className="list-group text-ternary-dark">
								<a href="s" className="list-group text-ternary-dark">
									Remindly
								</a>
								<a href="s" className="list-group text-ternary-dark">
									app2
								</a>
								<a href="s" className="list-group text-ternary-dark disabled">
									app3
								</a>
							</ul>
						</div>
						<h5 className="col-6 text-white font-weight-normal">
							Subscribe to our news
							<form className="form-inline mt-3">
								<input
									className="form-control"
									type="email"
									placeholder="Email"
									style={{ width: 250 }}
								/>
								<button className="btn btn-outline-secondary ml-2">
									SUBSCRIBE
								</button>
							</form>
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default FooterComponent;
