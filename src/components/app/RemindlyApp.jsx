import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../AuthenticatedRoute";

import SigninCard from "../SigninCard";
import Navbar from "../Navbar";
import Error from "../Error";
import LandingPage from "../LandingPageComponent";
import AboutPage from "../AboutPage";
import SignupCard from "../SignupCard";
import FgtPasswordCard from "../FgtPasswordCard";
import Footer from "../Footer";
import Copyright from "../Copyright";
import Avatar from "../avatarComponent/Avatar";

import WelcomePage from "../testComponents/welcomPage/WelcomPage";
import TodoCardComp from "../testComponents/goalsList/TodoCardComp";
import TodosListPage from "../testComponents/goalsList/TodosListPage";
import CompletedTodosListPage from "../testComponents/goalsList/CompletedTodosListPage";
import CriticalTodosPage from "../testComponents/goalsList/CriticalTodosPage";

class RemindlyApp extends Component {
	state = {};
	render() {
		return (
			<Router>
				<Navbar />
				<div style={{ minHeight: "90vh" }}>
					<Switch>
						<Route path="/" exact component={LandingPage} />
						<Route path="/home" exact component={LandingPage} />
						<Route path="/about" exact component={AboutPage} />
						<Route path="/error" exact component={Error} />
						<Route path="/signup" exact component={SignupCard} />
						<Route path="/forgot" exact component={FgtPasswordCard} />
						<Route path="/signin" exact component={SigninCard} />
						<AuthenticatedRoute path="/welcome" exact component={WelcomePage} />
						<AuthenticatedRoute path="/todos" exact component={TodosListPage} />
						<AuthenticatedRoute
							path="/todos/new"
							exact
							component={TodoCardComp}
						/>
						<AuthenticatedRoute
							path="/todos/completed"
							exact
							component={CompletedTodosListPage}
						/>
						<AuthenticatedRoute
							path="/todos/critical"
							exact
							component={CriticalTodosPage}
						/>
						<AuthenticatedRoute path="/avatar" exact component={Avatar} />
					</Switch>
				</div>
				<Footer />
				<Copyright />
			</Router>
		);
	}
}

export default RemindlyApp;
