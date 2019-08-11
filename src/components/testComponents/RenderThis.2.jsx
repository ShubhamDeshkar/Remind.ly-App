import React, { Component } from "react";

class RenderThis2 extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center">
					<kbd>Hello!</kbd>
				</h1>
				<div
					className="container justify-content-center overflow-auto"
					style={{ maxHeight: 250 }}
				>
					<table className="table table-striped table-broderless table-hover">
						<thead className="thead-light">
							{" "}
							{/* thead-dark */}
							<tr>
								<th>Number</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Relationship</th>
							</tr>
						</thead>

						<tbody>
							<tr className="bg-danger text-white">
								<th>1</th>
								<td>Shubham</td>
								<td>Deshkar</td>
								<td>self</td>
							</tr>
							<tr>
								<th className="table-danger">2</th>
								<td className="table-success">Rajesh</td>
								<td>Deshkar</td>
								<td className="table-danger">Father</td>
							</tr>
							<tr>
								<th>3</th>
								<td>Jyoti</td>
								<td className="table-dark">Deshkar</td>
								<td>Mother</td>
							</tr>
							<tr>
								<th>4</th>
								<td>Shantanu</td>
								<td className="table-primary">Deshkar</td>
								<td className="table-info">Brother</td>
							</tr>
							<tr>
								<th>5</th>
								<td colSpan="2" className="text-center table-warning">
									Larry the Bird
								</td>
								<td>from @Twitter</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="container text-center">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
						alt="some text here"
						style={{ maxHeight: 200, maxWidth: 200 }}
						className="rounded float-center img-tumbnail"
					/>
					<div>
						<div className="figure">
							<img
								src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
								alt="img"
								style={{ maxHeight: 200, maxWidth: 200 }}
								className="rounded float-left"
							/>
							<div className="figure-caption text-left">figure caption</div>
						</div>
					</div>
					<div className="alert alert-primary text-left alert-dismissable fade show">
						<button
							type="button"
							class="close"
							data-dismiss="alert"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 className="alert-heading">This is an Alert heading!</h4>
						This is an{" "}
						<a href="a" className="alert-link">
							alert!
						</a>
					</div>
					<div className="row">
						<button className="btn btn-primary mx-1">
							Notifications <span className="badge badge-light">4</span>{" "}
						</button>
						<button className="btn btn-primary mx-1">
							Views <span className="badge badge-light">234</span>
						</button>
						<button className="btn btn-primary mx-1">
							Message <span className="badge badge-light">5</span>
						</button>
						<button className="btn btn-outline-primary mx-1">Todos</button>
						<a href="s" className="btn btn-success">
							this is an anchor tag
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default RenderThis2;
