import { shipYard } from "./Ship";
import { GameBoard } from "./gameBoard";
import { Player } from "./Player";
import { render } from "./render";

export const gameState = {
	turn: 2,
};

startGame();

function startGame() {
	const gameBoardOne = GameBoard();
	const gameBoardTwo = GameBoard();

	setShips(gameBoardOne);
	setShips(gameBoardTwo);

	gameState.player1 = {
		name: "human",
		gameBoard: gameBoardOne,
	};
	gameState.player2 = {
		name: "computer",
		gameBoard: gameBoardTwo,
	};

	render.updateGameBoard(gameBoardOne.board, 1);
	render.updateGameBoard(gameBoardTwo.board, 2);
}

export function playGame({ row, col, player } = {}) {
	if (gameState.turn == 2 && player == 1) {
		if (gameState.player1.gameBoard.isValidAttack(row, col)) {
			gameState.player1.gameBoard.receiveAttack(row, col);
			render.updateGameBoard(gameState.player1.gameBoard.board, 1);

			if (gameState.player1.gameBoard.allShipSunk()) {
				render.declareWinner(gameState.player2);
			}

			gameState.turn = 1;
		} else return;
	} else if (gameState.turn == 1 && player == 2) {
		gameState.player1.gameBoard.receiveAttack(computer.attack());
		render.updateGameBoard(gameState.player1.gameBoard.board, 2);

		if (gameState.player1.gameBoard.allShipSunk()) {
			render.declareWinner(gameState.player2);
		}

		gameState.turn = 1;
	} else {
		console.error("wrong spot mr.");
	}
}

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
