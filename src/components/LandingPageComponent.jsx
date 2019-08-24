import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import IntroCard from "./testComponents/Introcard";
import BannerLight from "./testComponents/BannerLight";
import Signforms from "./testComponents/Signforms";

class LandingPage extends Component {
	render() {
		return (
			<div>
				<WhatsNew />
				<IntroCard />
				<BannerLight />
				<Signforms />
			</div>
		);
	}
}

export default LandingPage;
