import { GameBoard } from "./gameBoard";
import { render } from "./render";
import { shipYard } from "./Ship";

export const player = {
	name: "You",
	turn: true,
	battleField: GameBoard(),
};
export const computer = {
	name: "Computer",
	turn: false,
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
