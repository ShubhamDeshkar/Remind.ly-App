import React, { Component } from "react";
import AvatarCard from "./AvatarCard";

class AllCards extends Component {
	constructor() {
		super();
		this.state = {
			gender: "this.props.gender",
			avatars: []
		};
	}

	render() {
		return (
			<div>
				<h3 className="text-muted font-weight-normal text-center mt-3">
					Select your avatar
					<div>
						<small className="font-italic" style={{ fontSize: 10 }}>
							Icons made by{" "}
							<a
								href="https://www.flaticon.com/authors/freepik"
								target="_blank"
								rel="noopener noreferrer"
							>
								Freepik
							</a>{" "}
							from{" "}
							<a
								href="https://www.flaticon.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								www.flaticon.com
							</a>{" "}
							is licensed by{" "}
							<a
								href="http://creativecommons.org/licenses/by/3.0/"
								target="_blank"
								rel="noopener noreferrer"
							>
								CC 3.0 BY
							</a>
						</small>
					</div>
				</h3>

				<div className="container">
					<div className="row">
						{/* {this.state.todos.map(todo => (
							<tr key={todo.id}>
								<td>{todo.id}</td>
								<td>{todo.description}</td>
								<td>{todo.status.toString()}</td>
								<td>{moment(todo.targetDate).format("MM-DD-YYYY")}</td>
								<td>
									<button
										className="btn btn-warning"
										onClick={() => this.updateTodo(todo.id)}
									>
										Update
									</button>
								</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => this.deleteTodo(todo.id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))} */}

						{/* {this.state.avatars.map(avatar => (
							<div className="col-3 border py-3">
								<AvatarCard avatar={avatar} />
							</div>
						))} */}

						<div className="col-3 py-3">
							<AvatarCard />
						</div>
						<div className="col-3 py-3">
							<AvatarCard />
						</div>
						<div className="col-3 py-3">
							<AvatarCard />
						</div>
						<div className="col-3 py-3">
							<AvatarCard />
						</div>
						<div className="col-3 py-3">
							<AvatarCard />
						</div>
						<div className="col-3 py-3">
							<AvatarCard />
						</div>
						<div className="col-3 py-3">
							<AvatarCard />
						</div>
						<div className="col-3 py-3">
							<AvatarCard />
						</div>
						<div className="col-3 py-3">
							<AvatarCard />
						</div>
						<div className="col-3 py-3">
							<AvatarCard />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AllCards;
