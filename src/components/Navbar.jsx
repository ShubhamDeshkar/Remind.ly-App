import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import UserAuthenticationService from "../js/UserAuthenticationService";

import UserTab from "../components/testComponents/UserTab";
// import avatar from "../components/avatarComponent/avatars/girl-23.svg";
// import usrImg from "../components/avatarComponent/avatars/userMod.png";

class Navbar extends Component {
	render() {
		const GITHUB = "https://github.com/ShubhamDeshkar";
		const REMINDLY_APP = "https://github.com/ShubhamDeshkar/Remind.ly-App";
		const REMINDLY_API = "https://github.com/ShubhamDeshkar/Remind.ly-API";
		const isUserLoggedIn = UserAuthenticationService.isUserLoggedIn();

		return (
			<div>
				<nav className="navbar navbar-expand bg-primary">
					<div className="container">
						<Link
							to="/home"
							className="navbar-brand text-white"
							style={{ fontFamily: "Open Sans Condensed", fontSize: 25 }}
						>
							Remind.ly
						</Link>
						<ul className="navbar-nav">
							<Link
								to="/home"
								className="nav-item nav-link btn btn-primary mx-2"
							>
								Home
							</Link>
							<Link
								to="/about"
								className="nav-item nav-link btn btn-primary mx-1"
							>
								About
							</Link>
							<li className="nav-item dropdown mx-1">
								<a
									className="nav-link dropdown-toggle btn btn-primary"
									href="s"
									data-toggle="dropdown"
								>
									Source Code
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a
										className="dropdown-item"
										href={REMINDLY_APP}
										target="_blank"
										rel="noopener noreferrer"
									>
										Remindly App
									</a>
									<a
										className="dropdown-item"
										href={REMINDLY_API}
										target="_blank"
										rel="noopener noreferrer"
									>
										Remindly API
									</a>
									<div className="dropdown-divider" />
									<a
										className="dropdown-item"
										href={GITHUB}
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
								</div>
							</li>
						</ul>
						<ul className="navbar-nav navbar-collapse justify-content-end">
							{isUserLoggedIn && (
								<>
									<UserTab />
									{/* <a
										className="nav-link dropdown-toggle btn btn-primary"
										href="s"
										data-toggle="dropdown"
									>
										<img
											src={avatar}
											className="bg-primary"
											alt=""
											style={{ height: 38, width: 40 }}
										/>
									</a>
									<ul
										className="dropdown-menu dropdown-menu-right"
										aria-labelledby="navbarDropdown"
									>
										<li className="nav-item">
											<a
												className="dropdown-item"
												href={REMINDLY_APP}
												target="_blank"
												rel="noopener noreferrer"
											>
												Remindly App
											</a>
										</li>
										<li className="nav-item">
											<a
												className="dropdown-item"
												href={REMINDLY_API}
												target="_blank"
												rel="noopener noreferrer"
											>
												Remindly API
											</a>
										</li>
										<div className="dropdown-divider" />
										<li className="nav-item">
											<a
												className="dropdown-item"
												href={GITHUB}
												target="_blank"
												rel="noopener noreferrer"
											>
												GitHub
											</a>
										</li>
									</ul> */}
								</>
							)}
							{!isUserLoggedIn && (
								<Link
									to="/signin"
									className="nav-item nav-link btn btn-primary mx-3"
								>
									Sign in
								</Link>
							)}
							{!isUserLoggedIn && (
								<Link
									to="/signup"
									className="nav-item nav-link btn btn-outline-secondary"
									style={{ borderColor: "white" }}
								>
									GET STARTED
								</Link>
							)}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default withRouter(Navbar);
