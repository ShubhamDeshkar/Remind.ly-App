import React, { Component } from "react";
// import RenderThis from "./testComponents/RenderThis";
// import RenderThis2 from "./testComponents/RenderThis.2";
import Introcard from "./testComponents/Introcard";
import FooterComponent from "./testComponents/Footer";
import Copyright from "./testComponents/Copyright";
import Shadowbar from "./testComponents/NewNavbar";
import WhatsNew from "./WhatsNew";
import Form from "./testComponents/signupform/Form";
import SignupCard from "./testComponents/SignupCard";
import ErrorComp from "./testComponents/ErrorComp";
import Homepage from "./testComponents/homepage/Homepage";
import BannerLight from "./testComponents/BannerLight";
import Signforms from "./testComponents/Signforms";
import SigninCard from "./testComponents/SigninCard";

import Navbar from "./Navbar.jsx";

class RemindlyApp extends Component {
	state = {};
	render() {
		return (
			<div>
				<Navbar />
				<WhatsNew />
				<Introcard />
				<BannerLight />
				<Signforms />
				{/* <Form /> */}
				{/* <SignupCard /> */}
				{/* <ErrorComp /> */}
				{/* <SigninCard /> */}
				{/* <Homepage /> */}
				<FooterComponent />
				<Copyright />
			</div>
		);
	}
}

export default RemindlyApp;
