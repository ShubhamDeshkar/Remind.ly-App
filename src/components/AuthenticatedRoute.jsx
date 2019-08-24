import React, { Component } from "react";
import UserAuthenticationService from "../js/UserAuthenticationService";
import { Route, Redirect } from "react-router-dom";

export default class AuthenticatedRoute extends Component {
	render() {
		const isUserLoggedIn = UserAuthenticationService.isUserLoggedIn();
		if (isUserLoggedIn) return <Route {...this.props} />;
		else return <Redirect to="/signin" />;
	}
}
