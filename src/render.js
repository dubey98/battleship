import { game } from "./game";

export const render = (() => {
	const playerField = document.getElementById("player-game-board");
	const computerField = document.getElementById("computer-game-board");
	const message = document.getElementById("message");

	const updatePlayerField = function (battleField) {
		_removeChildren(playerField);
		for (let row = 0; row < 10; row++) {
			for (let col = 0; col < 10; col++) {
				const div = document.createElement("div");
				div.className =
					battleField[row][col] < 0
						? battleField[row][col] === -100
							? "square disabled"
							: "square hit"
						: "square";
				playerField.appendChild(div);
			}
		}
	};
	const updateComputerField = (battleField) => {
		_removeChildren(computerField);
		for (let row = 0; row < 10; row++) {
			for (let col = 0; col < 10; col++) {
				const div = document.createElement("div");
				div.className =
					battleField[row][col] < 0
						? battleField[row][col] === -100
							? "square disabled"
							: "square hit"
						: "square";
				div.addEventListener("click", () => game.attackComputer({ row, col }));
				computerField.appendChild(div);
			}
		}
	};
	const showPlayersTurn = () => {
		message.textContent = "Your Turn!!";
		computerField.style.opacity = "1";
		playerField.style.opacity = "0.2";
	};
	const showComputersTurn = () => {
		message.textContent = "computers turn";
		playerField.style.opacity = "1";
		computerField.style.opacity = "0.2";
	};
	const declareWinner = (player) => {
		alert(player.name + " won the match!!!");
		location = location;
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
