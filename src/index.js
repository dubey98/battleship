import { shipYard } from "./Ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./Player";
import { render } from "./render";

function Game() {
	const player1 = Player("human");
	const player2 = Player("computer");

	const gameBoardOne = GameBoard();
	const gameBoardTwo = GameBoard();

	setShips(gameBoardOne);
	setShips(gameBoardTwo);

	render.renderGameBoard(gameBoardOne.board, 1);
	render.renderGameBoard(gameBoardTwo.board, 2);
}
Game();

function setShips(gameBoard) {
	gameBoard.placeShip(0, 0, shipYard(5));
	gameBoard.placeShip(2, 0, shipYard(2));
	gameBoard.placeShip(4, 0, shipYard(2));
	gameBoard.placeShip(6, 0, shipYard(2));
	gameBoard.placeShip(8, 0, shipYard(1));
	gameBoard.placeShip(8, 2, shipYard(1));
	gameBoard.placeShip(8, 4, shipYard(1));
	gameBoard.placeShip(8, 6, shipYard(1));
	gameBoard.placeShip(8, 8, shipYard(1));
}
