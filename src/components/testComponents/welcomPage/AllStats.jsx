import React, { Component } from "react";
import StatCard from "./StatCard";

import imgTodos from "../../avatarComponent/avatars/stats/hourglass.svg";
import imgCompleted from "../../avatarComponent/avatars/stats/survey.svg";
import imgCritical from "../../avatarComponent/avatars/stats/hourglass-1.svg";
import imgScore from "../../avatarComponent/avatars/stats/report.svg";

class AllStats extends Component {
	constructor() {
		super();
		this.state = {
			goals: 0,
			completed: 0,
			critical: 0,
			score: 0
		};
	}

	render() {
		const { goals, completed, critical, score } = this.state;

		return (
			<div className="container mt-5">
				<div className="row">
					<div className="col border-right">
						<StatCard
							heading="Todos"
							img={imgTodos}
							stat={goals}
							link="/todos"
						/>
					</div>
					<div className="col border-left border-right">
						<StatCard
							heading="Completed"
							img={imgCompleted}
							stat={completed}
							link="/todos/completed"
						/>
					</div>
					<div className="col border-left border-right">
						<StatCard
							heading="Critical"
							img={imgCritical}
							stat={critical}
							link="/todos/critical"
						/>
					</div>
					<div className="col border-left">
						<StatCard
							heading="Score"
							img={imgScore}
							stat={score}
							link="/score"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default AllStats;
