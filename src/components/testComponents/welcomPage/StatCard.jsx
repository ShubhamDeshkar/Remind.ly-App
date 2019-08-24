import React, { Component } from "react";
import { Link } from "react-router-dom";

class StatCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...this.props
		};
	}

	render() {
		const { heading, img, stat, link } = this.state;

		return (
			<div className="container justify-content-center">
				<div className="row">
					<h2 className="col text-center text-muted font-weight-normal my-2">
						{heading}
					</h2>
				</div>
				<div className="row">
					<img
						src={img}
						alt=""
						className="col my-2"
						style={{ height: 70, width: 70 }}
					/>
				</div>
				<div className="row mt-2">
					<h1
						className="col text-center font-weight-normal"
						style={{ color: "black" }}
					>
						{stat}
					</h1>
				</div>
				<div className="row">
					<Link to={link} className="col btn btn-primary">
						View
					</Link>
				</div>
			</div>
		);
	}
}

export default StatCard;
