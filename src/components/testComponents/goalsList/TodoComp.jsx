import React, { Component } from "react";

class TodoComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...this.props
		};
	}

	render() {
		const { title, description, priority } = this.state;

		return (
			<div className="container">
				<div className="row mt-4">
					<h1 className="col text-muted text-center">Edit your goals here</h1>
				</div>
				<div className="row mx-auto mt-5" style={{ width: 500 }}>
					<form className="col justify-content-center">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Title</label>
							<input
								type="title"
								className="form-control"
								value={title}
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Title"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Description</label>
							<textarea
								type="description"
								value={description}
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Description"
								style={{ height: 100 }}
							/>
						</div>
						<div className="form-group my-1">
							<label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
								Preference
							</label>
							<select
								className="custom-select mr-sm-2"
								id="inlineFormCustomSelect"
							>
								<option defaultValue={priority}>Choose...</option>
								<option value="Low">High</option>
								<option value="Medium">Medium</option>
								<option value="High">Low</option>
							</select>
						</div>
						<button type="submit" className="btn btn-primary mt-3">
							Let's do it
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default TodoComp;
