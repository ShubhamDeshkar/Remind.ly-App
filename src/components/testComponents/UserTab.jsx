import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserAuthentication from "../../js/UserAuthenticationService";
import avatar from "../avatarComponent/avatars/girl-23.svg";

class UserTab extends Component {
	signout = () => {
		console.log("You have been signed out");
		UserAuthentication.logout();
	};

	render() {
		const GITHUB = "https://github.com/ShubhamDeshkar";
		const REMINDLY_APP = "https://github.com/ShubhamDeshkar/Remind.ly-App";
		const REMINDLY_API = "https://github.com/ShubhamDeshkar/Remind.ly-API";

		return (
			<>
				<ul className="navbar-nav navbar-collapse justify-content-end">
					<a
						className="nav-link dropdown-toggle btn btn-primary"
						href="s"
						data-toggle="dropdown"
					>
						<img
							src={avatar}
							className="bg-primary"
							alt=""
							style={{ height: 40, width: 40 }}
						/>
					</a>
					<div
						className="dropdown-menu dropdown-menu-right"
						aria-labelledby="navbarDropdown"
					>
						<a
							className="dropdown-item"
							href={REMINDLY_APP}
							target="_blank"
							rel="noopener noreferrer"
						>
							New Goal
						</a>
						<a
							className="dropdown-item"
							href={REMINDLY_APP}
							target="_blank"
							rel="noopener noreferrer"
						>
							Account
						</a>
						<a
							className="dropdown-item"
							href={REMINDLY_API}
							target="_blank"
							rel="noopener noreferrer"
						>
							Goals
						</a>
						<a
							className="dropdown-item"
							href={REMINDLY_API}
							target="_blank"
							rel="noopener noreferrer"
						>
							All Stats
						</a>
						<div className="dropdown-divider" />
						{/* <a href=""> */}
						<Link to="/home" className="dropdown-item" onClick={this.signout}>
							Sign Out
						</Link>
						{/* </a> */}
						{/* <a className="dropdown-item" href="localhost://signout">
							Sign out
						</a> */}
					</div>
				</ul>
			</>
		);
	}
}

export default UserTab;
