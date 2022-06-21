import React, { useState, useEffect } from "react";

function WinScreen({ newGame }) {
	return (
		<div className="fl-col-cont fl-centered">
			<h1>You Win!</h1>
			<button id="new-game-btn" onClick={newGame}>
				New Game
			</button>
		</div>
	);
}

export default WinScreen;
