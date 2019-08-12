import React, { Component } from "react";
import "../../custom.css";

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand bg-primary">
					<div className="container">
						<a
							href="s"
							className="navbar-brand text-white"
							style={{ fontFamily: "Open Sans Condensed", fontSize: 25 }}
						>
							Remind.ly
						</a>
						<ul className="navbar-nav">
							<a
								href="s"
								className="nav-item nav-link btn btn-primary text-white mx-1"
							>
								Home
							</a>
							<a
								href="s"
								className="nav-item nav-link btn btn-primary text-white mx-1"
							>
								About
							</a>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle text-white btn btn-primary mx-1"
									href="s"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Menu
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="s">
										Action
									</a>
									<a class="dropdown-item" href="s">
										Another action
									</a>
									<div class="dropdown-divider" />
									<a class="dropdown-item" href="s">
										Something else here
									</a>
								</div>
							</li>
						</ul>
						<ul className="navbar-nav navbar-collapse justify-content-end">
							<li className="nav-item">
								<a
									href="s"
									className="nav-link btn btn-primary text-white mx-3"
								>
									Sign in
								</a>
							</li>
							<li className="nav-item">
								<a
									href="s"
									className="nav-link btn btn-primary"
									style={{ borderColor: "white" }}
								>
									GET STARTED
								</a>
							</li>
						</ul>
					</div>
				</nav>
				{/* <form class="form-inline my-2 my-lg-0">
					<input
						class="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
					<button className="btn btn-success mx-2">push</button>
				</form> */}
			</div>
		);
	}
}

export default Navbar;
