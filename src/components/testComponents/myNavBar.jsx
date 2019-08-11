import React, { Component } from "react";
import Navbar from "./RenderNavbar";

class MyNavBar extends Component {
	render() {
		return (
			<>
				<Navbar />
				{/* <div className="alert alert-secondary alert-dismissable fade show">
					<button
						type="button"
						class="close"
						data-dismiss="alert"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 className="alert-heading">Whats New? </h4>
					The app is live and the backend is ready! Check out{" "}
					<a href="github.com/ShubhamDeshkar">here</a>.
				</div> */}
			</>
		);
	}
}

export default MyNavBar;
