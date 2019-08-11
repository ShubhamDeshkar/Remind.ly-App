import React, { Component } from "react";

class RenderThis extends Component {
	render() {
		return (
			<div>
				<div
					className="container bg-light text-info text-center font-weight-bold mb-3" // or "container-fluid"
					style={{
						fontFamily: "Open Sans Condensed",
						fontSize: 30
					}}
				>
					<div className="row">
						<div className="col bg-color-dark">...One of three columns...</div>
						<div className="col-2">...One of three columns...</div>
						<div className="col-2">...One of three columns...</div>
						<div className="col">...One of three columns...</div>
					</div>

					<div className="row">
						<div className="col-auto">1 columns</div>
						<div className="col px-5">2 columns</div>{" "}
						{/* green is padding and yellow is margin*/}
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-2 bg-success text-dark">new column</div>
						<div className="col-lg-2 bg-primary text-dark">new column</div>
					</div>
				</div>
				<div
					className="container bg-light text-dark text-center font-italic"
					style={{
						fontFamily: "Open Sans Condensed",
						fontSize: 30,
						minHeight: 200
					}}
				>
					<div className="row" style={{ minHeight: 200 }}>
						<div className="col border border-primary rounded align-self-start">
							col1
						</div>
						<div className="col border border-primary rounded align-self-center">
							col2
						</div>
						<div className="col border border-primary rounded align-self-end">
							col3
						</div>
					</div>
					<hr className="border border-secondary" />
					<div
						className="row align-items-center text-left"
						style={{ minHeight: 200 }}
					>
						<div className="col border border-primary rounded">col1</div>
						<div className="col border border-primary rounded">col2</div>
						<div className="col border border-primary rounded">col3</div>
					</div>
					<div>
						<div className="row">
							<div
								className="col-1 offset-md-1 border border-primary" // offset by one column
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-2 offset-1 border border-primary" // same offset as above
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-3 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-4 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-5 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-6 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-7 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-8 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-9 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-10 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-11 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-12 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
						<div className="row">
							<div
								className="col-2 border border-primary"
								style={{ minHeight: 15 }}
							/>
							<div
								className="col-1 border border-primary"
								style={{ minHeight: 15 }}
							/>
							<div
								className="col-6 col-sm-3 border border-primary"
								style={{ minHeight: 15 }}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RenderThis;
