import React, { Component } from "react";

import create1 from "./homepage/images/002-pencil.svg";
import share2 from "./homepage/images/005-team-1.svg";
import win1 from "./homepage/images/006-win.svg";

class BannerLight extends Component {
	render() {
		return (
			<>
				<div
					className="text-ternary-dark text-center"
					style={{ backgroundColor: "#CCCCCC" }}
				>
					<div className="row w-100">
						<div className="col">
							<h2 className="font-weight-normal mt-4 mb-0">
								Can't get Enough of your day?
							</h2>
							<h4 className="font-weight-normal">
								Don't worry,{" "}
								<span style={{ fontFamily: "Open Sans Condensed" }}>
									Remind
									<span style={{ color: "#dc3545", fontSize: 40 }}>.</span>ly
								</span>{" "}
								is here to help
							</h4>
						</div>
					</div>
					<hr style={{ borderColor: "white" }} />
					<div className="container">
						<div className="row">
							<img
								src={create1}
								alt=""
								className="col mt-5"
								style={{ height: 80, width: 80 }}
							/>
							<div className="col ml-4">
								<h4 className="font-weight-normal text-white">
									Create
									<span style={{ color: "#dc3545", fontSize: 30 }}>.</span>
								</h4>
								<h5 className="font-weight-normal">
									Create and accomplish new daily goals and take your everyday
									productivity to the next level
								</h5>
							</div>
						</div>
						<div className="row">
							<img
								src={share2}
								alt=""
								className="col mt-5"
								style={{ height: 80, width: 80 }}
							/>
							<div className="col ml-4">
								<h4 className="font-weight-normal text-white">
									Share<span style={{ color: "#dc3545", fontSize: 30 }}>.</span>
								</h4>
								<h5 className="font-weight-normal">
									Share your accomplishments with your friends and colleagues
									and inspire them to do more with their time
								</h5>
							</div>
						</div>
						<div className="row">
							<img
								src={win1}
								alt=""
								className="col mt-5 mb-3"
								style={{ height: 80, width: 80 }}
							/>
							<div className="col ml-4">
								<h4 className="font-weight-normal text-white">
									Achieve
									<span style={{ color: "#dc3545", fontSize: 30 }}>.</span>
								</h4>
								<h5 className="font-weight-normal">
									Keep getting most out of your lives and and let us take you to
									greater heights in terms of time management
								</h5>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default BannerLight;
