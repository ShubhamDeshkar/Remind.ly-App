import React, { Component } from "react";
import TodoComp from "./TodoComp";

class TodoCardComp extends Component {
	state = {};
	render() {
		return (
			<div className="container shadow pt-3 pb-5 mt-5" style={{ width: 550 }}>
				<TodoComp />
			</div>
		);
	}
}

export default TodoCardComp;
