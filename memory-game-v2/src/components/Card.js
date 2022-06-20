import React, { useState, useEffect, useCallback } from "react";

function Card({ word, increaseScore, checkAvail }) {
	return (
		<button
			className="card fl-row-cont fl-centered"
			onClick={checkAvail}
			data-word={word}
		>
			<p>{word}</p>
		</button>
	);
}

export default Card;
