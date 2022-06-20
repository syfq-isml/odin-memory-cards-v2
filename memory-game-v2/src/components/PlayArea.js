import React, { useState, useEffect } from "react";
import Card from "./Card";

import uniqid from "uniqid";

function PlayArea({ words, increaseScore, checkAvail }) {
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	let wordsCopy = [...words];
	shuffle(wordsCopy);

	return (
		<div id="play-area">
			<div className="grid">
				{wordsCopy.map((word, i) => {
					return <Card key={uniqid()} word={word} checkAvail={checkAvail} />;
				})}
			</div>
		</div>
	);
}

export default PlayArea;
