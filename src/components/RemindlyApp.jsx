import React, { Component } from "react";
// import RenderThis from "./testComponents/RenderThis";
// import RenderThis2 from "./testComponents/RenderThis.2";
import Introcard from "./testComponents/Introcard";
import FooterComponent from "./testComponents/Footer";
import Shadowbar from "./testComponents/NewNavbar";
import Form from "./testComponents/signinform/Form";
import SigninCard from "./testComponents/SigninCard";
import ErrorComp from "./testComponents/ErrorComp";
import Navbar from "./Navbar.jsx";

class RemindlyApp extends Component {
	state = {};
	render() {
		return (
			<div>
				{/* <RenderThis /> */}
				{/* <RenderThis2 /> */}
				<Navbar />
				{/* <Shadowbar /> */}
				{/* <Introcard /> */}
				{/* <Form /> */}
				{/* <SigninCard /> */}
				{/* <ErrorComp /> */}
				{/* <FooterComponent /> */}
			</div>
		);
	}
}

export default RemindlyApp;
