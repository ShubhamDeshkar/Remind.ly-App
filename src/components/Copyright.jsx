import React, { Component } from "react";

class Copyright extends Component {
	render() {
		return (
			<div className="bg-primary text-center" style={{ height: 40 }}>
				<div className="text-center text-white">
					<div className="row w-100">
						<div className="col pt-2">
							Copyright &copy; {new Date().getFullYear()} Remindly. All rights
							reserved
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Copyright;
