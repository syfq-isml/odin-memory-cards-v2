import React, { useState, useEffect } from "react";

function HiScore({ hiScore }) {
	return (
		<div>
			<h2>High-score: {hiScore}</h2>
		</div>
	);
}

export default HiScore;
