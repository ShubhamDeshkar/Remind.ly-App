import React, { Component } from "react";
import ListComp from "./ListComp";

class TodosListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1 className="text-muted font-weight-normal text-center mt-4">
					Completed Goals
				</h1>
				<ListComp />
			</div>
		);
	}
}

export default TodosListPage;
