import React, { Fragment, useEffect, useState } from "react";
import Casilla from "./casilla.jsx";

const Home = () => {
	const [turn, setTurn] = useState("x");
	const [tablero, setTablero] = useState([]);
	const [tableroVisual, setTableroVisual] = useState([]);

	const checkForWinner = newTablero => {
		// [0, 1, 2], [3, 4, 5], [6, 7 ,8], [0, 3, 6]
		// if (newTablero[0]==newTablero[1]==newTablero[2]!=""){
		//	return true;
		//}
		console.log();
	};

	const changeTurn = i => {
		let newTablero = [
			...tablero
		]; /*se copia tablero por ser una variable de estado, que no se puede modificar directamente*/
		newTablero[i] = turn; /*asigno en esta posición el valor de turn*/
		setTablero(newTablero); /*se actualiza variable tablero*/
		checkForWinner();
		if (turn == "x") {
			setTurn("o");
		} else {
			setTurn("x");
		}
	};

	useEffect(() => {
		let board = [];

		for (let i = 0; i < 9; i++) {
			board.push("");
		}
		setTablero(board);
	}, []);
	const gameBoard = tablero.map((value, i) => (
		<Casilla
			key={i.toString()}
			onclick={() => changeTurn(i)}
			value={value}
		/>
	));
	return (
		<Fragment>
			<div className="tablero">{gameBoard}</div>
		</Fragment>
	);
};

export default Home;
