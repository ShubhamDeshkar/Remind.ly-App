import React, { Component } from "react";
import UserAuthenticationService from "../../../js/UserAuthenticationService";
import GoalsDataService from "../../../js/GoalsDataService";
import { Link } from "react-router-dom";

class ListComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: UserAuthenticationService.getId(),
			goals: []
		};
	}

	componentDidMount = () => {
		this.getGoals(this.state.userId);
	};

	getGoals = userId => {
		GoalsDataService.getGoals(userId)
			.then(response => {
				console.log(response);
				this.setState(
					{
						goals: response.data
					},
					() => {
						console.log(this.state.goals);
						// write a sorting function and sort according to "lastModified"
					}
				);
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div
				className="container overflow-auto mt-4"
				style={{ height: 600, width: 1000 }}
			>
				<table className="table table-hover">
					<thead className="bg-primary text-white">
						<tr>
							<th scope="col">Last Modified</th>
							<th scope="col">Title</th>
							<th scope="col">Target Date</th>
							<th scope="col">Priority</th>
						</tr>
					</thead>
					<tbody>
						{this.state.goals.map(goal => (
							<tr key={goal.id}>
								<td>{goal.lastModified}</td>
								<td>{goal.description}</td>
								<td>{goal.targetDate}</td>
								<td>low</td>
								{/* <td>{goal.targetDate.toString()}</td> */}
								{/* <td>{moment(goal.targetDate).format("MM-DD-YYYY")}</td>
								<td>
									<button
										className="btn btn-warning"
										onClick={() => this.updategoal(goal.id)}
									>
										Update
									</button>
								</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => this.deletegoal(goal.id)}
									>
										Delete
									</button>
								</td> */}
							</tr>
						))}
						{/* <tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>

						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		);
	}
}

export default ListComp;
