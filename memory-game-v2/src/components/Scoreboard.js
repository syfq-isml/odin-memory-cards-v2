import React, { useState, useEffect } from "react";
import CurrentScore from "./CurrentScore";
import HiScore from "./HiScore";

function Scooreboard(props) {
	let { currentScore, hiScore } = props;
	return (
		<section id="scoreboard" className="fl-col-cont fl-centered">
			<div className="fl-col-cont fl-centered">
				<div id="instructions" className="fl-col-cont fl-centered">
					<p>
						Click on a word exactly <span>once.</span>
					</p>
					<p>
						If you click on the same word twice, the score will{" "}
						<strong>reset!</strong>
					</p>
					<p>Let's see how high you can score! </p>
				</div>
				<div id="scores" className="fl-col-cont fl-centered">
					<CurrentScore currentScore={currentScore} />
					<HiScore hiScore={hiScore} />
				</div>
			</div>
		</section>
	);
}

export default Scooreboard;
