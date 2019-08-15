import React, { Component } from "react";
import create1 from "./images/002-pencil.svg";
import share2 from "./images/005-team-1.svg";
import win1 from "./images/006-win.svg";

class Features extends Component {
	render() {
		return (
			<>
				<div className="row mt-5 text-ternary-dark">
					<h3 className="col" style={{ fontWeight: "normal" }}>
						Why{" "}
						<span style={{ fontFamily: "Open Sans Condensed" }}>
							Remind
							<span className="text-primary" style={{ fontSize: 40 }}>
								.
							</span>
							ly
						</span>
						?
					</h3>
				</div>
				<div className="row">
					<h3 className="col">
						Create
						<span className="text-primary" style={{ fontSize: 40 }}>
							.
						</span>
					</h3>
					<h3 className="col">
						Share
						<span className="text-primary" style={{ fontSize: 40 }}>
							.
						</span>
					</h3>
					<h3 className="col">
						Achieve
						<span className="text-primary" style={{ fontSize: 40 }}>
							.
						</span>
					</h3>
				</div>
				<div className="row">
					<img
						src={create1}
						alt="create"
						className="col"
						style={{ height: 90, width: 90 }}
					/>
					<img
						src={share2}
						alt="share"
						className="col"
						style={{ height: 90, width: 90 }}
					/>
					<img
						src={win1}
						alt="acheive"
						className="col"
						style={{ height: 90, width: 90 }}
					/>
				</div>
				<div className="row">
					<h5 className="col text-muted text-center mt-2">
						Create and accomplish new daily goals and take your everyday
						productivity to the next level
					</h5>
					<h5 className="col text-muted text-center mt-2">
						Share your accomplishments with your friends and colleagues and
						inspire them to do more with their time
					</h5>
					<h5 className="col text-muted text-center mt-2">
						Keep getting most out of your lives and and let us take you to
						greater heights in terms of time management
					</h5>
				</div>
			</>
		);
	}
}

export default Features;
