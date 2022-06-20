import React, { useState, useEffect } from "react";

import "./styles/normalize.css";
import "./styles/styles.css";

import uniqid from "uniqid";

import Header from "./components/Header";
import Scooreboard from "./components/Scoreboard";
import PlayArea from "./components/PlayArea";
import Card from "./components/Card";

let words2 = [
	"affix",
	"amaze",
	"admin",
	"agaze",
	"abuzz",
	"abuse",
	"above",
	"abort",
	"about",
	"abyss",
	// "aches",
	// "acids",
	// "acres",
	// "actor",
	// "acute",
	// "adapt",
	// "added",
	// "adept",
	// "admin",
	// "admit",
	// "adult",
];

let words = [
	"affix",
	"amaze",
	"admin",
	"agaze",
	"abuzz",
	"abuse",
	"above",
	"abort",
	"about",
	"abyss",
];

function App(props) {
	let [currentScore, setCurrentScore] = useState(0);
	let [hiScore, setHiScore] = useState(0);
	let [availWords, setAvailWords] = useState([...words]);
	let [clickedWords, setClickedWords] = useState([]);

	const increaseScore = () => {
		setCurrentScore((prevScore) => {
			let newScore = prevScore + 1;
			console.log(`current score: ${newScore}`);
			checkNewHighScore(newScore);
			return newScore;
		});
	};

	const resetAll = () => {
		setCurrentScore(0);
		setAvailWords([...words]);
		setClickedWords([]);
		console.log("------- NEW GAME ------");
	};

	const checkNewHighScore = (score) => {
		if (score >= hiScore) {
			setHiScore(score);
		}
	};

	const checkAvail = (e) => {
		let word = e.target.dataset.word;
		console.log(word);
		let index = availWords.indexOf(word);
		console.log(index);
		if (index !== -1) {
			increaseScore();
			setClickedWords((prevState) => [...prevState, word]);
			setAvailWords((prevState) => {
				let copy = [...prevState];
				copy.splice(index, 1);
				return copy;
			});
		} else {
			console.log("Lose");
			console.log("--------------");
			resetAll();
		}
	};

	return (
		<div id="overall-wrapper" className="fl-col-cont">
			<Header />
			<Scooreboard currentScore={currentScore} hiScore={hiScore} />
			{/* <PlayArea words={wordsCopy} /> */}
			<PlayArea
				words={words}
				increaseScore={increaseScore}
				checkAvail={checkAvail}
			/>
		</div>
	);
}

export default App;
