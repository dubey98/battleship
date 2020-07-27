import { attackComputer } from "./index";

export const render = (() => {
	const playerField = document.getElementById("player-game-board");
	const computerField = document.getElementById("computer-game-board");
	const message = document.getElementById("message");

	const updatePlayerField = function (battleField) {
		_removeChildren(playerField);
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const div = document.createElement("div");
				div.className = "square";
				div.textContent = battleField[i][j];
				playerField.appendChild(div);
			}
		}
	};
	const updateComputerField = (battleField) => {
		_removeChildren(computerField);
		let turn = 1;
		for (let row = 0; row < 10; row++) {
			for (let col = 0; col < 10; col++) {
				const div = document.createElement("div");
				div.className = "square";
				div.textContent = battleField[row][col];
				div.addEventListener("click", () => attackComputer({ row, col, turn }));
				computerField.appendChild(div);
			}
		}
	};
	const showPlayersTurn = () => {
		message.textContent = "Your Turn!!";
		computerField.style.opacity = "1";
		playerField.style.opacity = "0.5";
	};
	const showComputersTurn = () => {
		message.textContent = "computers turn";
		playerField.style.opacity = "1";
		computerField.style.opacity = "0.5";
	};
	const declareWinner = (player) => {
		message.textContent = `${player.name} Won the game.....!!`;
	};
	function _removeChildren(element) {
		element.innerHTML = "";
	}
	return {
		updatePlayerField,
		updateComputerField,
		showPlayersTurn,
		showComputersTurn,
		declareWinner,
	};
})();
