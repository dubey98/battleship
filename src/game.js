import { render } from "./render";
import { computer, player } from "./index";

export const game = (() => {
	function attackPlayer() {
		let row = Math.floor(Math.random() * 9);
		let col = Math.floor(Math.random() * 9);
		if (player.battleField.isValidAttack(row, col)) {
			const result = player.battleField.receiveAttack(row, col);
			render.updatePlayerField(player.battleField.board);
			if (player.battleField.allShipSunk()) {
				render.declareWinner(computer);
			}
			if (result) {
				render.showComputersTurn();
				setTimeout(() => attackPlayer(), 500);
			} else {
				player.turn = true;
				computer.turn = false;
				render.showPlayersTurn();
				return;
			}
		} else {
			attackPlayer();
		}
	}
	function attackComputer({ row, col }) {
		if (!player.turn) {
			console.log("wrong turn");
			return;
		} else if (computer.battleField.isValidAttack(row, col)) {
			console.log("attacking");
			const result = computer.battleField.receiveAttack(row, col);
			if (computer.battleField.allShipSunk()) {
				render.declareWinner(player);
			}
			render.updateComputerField(computer.battleField.board);
			if (!result) {
				render.showComputersTurn();
				player.turn = false;
				computer.turn = true;
				setTimeout(() => attackPlayer(), 500);
			}
		} else {
			console.error("wrong spot ");
			return;
		}
	}

	return {
		attackPlayer,
		attackComputer,
	};
})();
