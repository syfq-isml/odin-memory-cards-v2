import React, { useState, useEffect } from "react";

function CurrentScore({ currentScore }) {
	return (
		<div>
			<h2>Current score: {currentScore}</h2>
		</div>
	);
}

export default CurrentScore;
