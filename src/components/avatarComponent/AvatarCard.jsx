import React, { Component } from "react";
import img1 from "./avatars/boy-1.svg";

class AvatarCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgURL: `./avatars/${this.props.avatar}`
		};
	}

	render() {
		return (
			<div
				className="shadow rounded text-center pt-3 mx-auto"
				style={{ width: 220 }}
			>
				<img
					src={img1}
					className="card-img-top border-ternary"
					alt="img here"
					style={{ height: 150, width: 150 }}
				/>
				<div className="card-body">
					<h5 className="card-title">Dave</h5>
					<a href="s" className="btn btn-primary">
						SELECT
					</a>
				</div>
			</div>
		);
	}
}

export default AvatarCard;
