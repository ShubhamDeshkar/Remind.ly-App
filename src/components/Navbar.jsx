import React, { Component } from "react";

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
							<a href="s" className="nav-item nav-link btn btn-primary mx-2">
								Home
							</a>
							<a href="s" className="nav-item nav-link btn btn-primary mx-1">
								About
							</a>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle btn btn-primary"
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
							<a href="s" className="nav-item nav-link btn btn-primary mx-3">
								Sign in
							</a>
							<a
								href="s"
								className="nav-item nav-link btn btn-primary"
								style={{ borderColor: "white" }}
							>
								GET STARTED
							</a>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
