import { GameBoard } from "./gameBoard";
import { render } from "./render";
import { shipYard } from "./Ship";

let turn = 1;

const player = {
	name: "You",
	battleField: GameBoard(),
};
const computer = {
	name: "Computer",
	battleField: GameBoard(),
};

(function startGame() {
	placeShips(player.battleField);
	placeShips(computer.battleField);

	render.updatePlayerField(player.battleField.board);
	render.updateComputerField(computer.battleField.board);

	render.showPlayersTurn();
})();

function placeShips(battleField) {
	battleField.placeShip(0, 0, shipYard(5));
	battleField.placeShip(2, 0, shipYard(3));
	battleField.placeShip(4, 0, shipYard(3));
	battleField.placeShip(6, 0, shipYard(2));
	battleField.placeShip(8, 0, shipYard(2));
	battleField.placeShip(8, 3, shipYard(1));
	battleField.placeShip(8, 5, shipYard(1));
	battleField.placeShip(8, 7, shipYard(1));
	battleField.placeShip(8, 9, shipYard(1));
}

function attackPlayer() {
	let row = Math.floor(Math.random() * 9);
	let col = Math.floor(Math.random() * 9);
	console.log({ row, col });
	if (player.battleField.isValidAttack(row, col)) {
		const result = player.battleField.receiveAttack(row, col);
		render.updatePlayerField(player.battleField.board);
		if (player.battleField.allShipSunk()) {
			render.declareWinner(computer);
		}
		if (result) {
			render.showComputersTurn();
			attackPlayer();
		} else {
			render.showPlayersTurn();
			return;
		}
	} else {
		attackPlayer();
	}
}

export function attackComputer({ row, col, turn }) {
	console.log({ row, col });
	if (turn != 1) {
		console.log("wrong turn");
		return;
	}
	if (computer.battleField.isValidAttack(row, col)) {
		console.log("attacking");
		const result = computer.battleField.receiveAttack(row, col);
		if (computer.battleField.allShipSunk()) {
			render.declareWinner(player);
		}
		render.updateComputerField(computer.battleField.board);
		if (!result) {
			render.showComputersTurn();
			turn = 2;
			setTimeout(() => attackPlayer(), 1000);
		}
	}
}
