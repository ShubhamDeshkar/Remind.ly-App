import React, { Component } from "react";
// import RenderThis from "./testComponents/RenderThis";
// import RenderThis2 from "./testComponents/RenderThis.2";
// import Navbar from "./testComponents/RenderNavbar";
import MyNavBar from "./testComponents/myNavBar";

class RemindlyApp extends Component {
	state = {};
	render() {
		return (
			<div>
				{/* <RenderThis /> */}
				{/* <RenderThis2 /> */}
				{/* <Navbar /> */}
				<MyNavBar />
			</div>
		);
	}
}

export default RemindlyApp;
