import { clickHandler } from "./clickHandler";

export const render = (() => {
	const updateGameBoard = (board, num) => {
		if (num == 1) {
			const gameBoard = document.getElementById("game-board-one");
			_clearElement(gameBoard);
			_addTinyDivs(gameBoard, 1, board);
		} else {
			const gameBoard = document.getElementById("game-board-two");
			_clearElement(gameBoard);
			_addTinyDivs(gameBoard, 2, board);
		}
	};
	const declareWinner = (player) => {
		const message = document.getElementById("message");
		message.textContent = player.name + " Wins!!";
		alert(player.name + " wins");
	};
	function _addTinyDivs(element, num, board) {
		const message = document.getElementById("message");
		message.textContent = `Player ${num} Turn`;
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const div = document.createElement("div");

				div.className = "square";

				div.setAttribute("data-x", i);
				div.setAttribute("data-y", j);
				div.setAttribute("data-player", num);

				if (board[i][j] < 0) {
					div.textContent = "X";
					div.style.padding = "2px";
					div.style.color = "red";
				} else if (board[i][j] > 0) {
					div.style.padding = "2px";
					div.style.backgroundColor = "lightblue";
				}

				div.addEventListener("click", (e) => {
					clickHandler.handleClick({
						row: e.target.dataset.x,
						col: e.target.dataset.y,
						player: e.target.dataset.player,
						value: e.target.dataset.value,
					});
					_disableBattlefield(e.target.dataset.player);
					_enableBattlefield(e.target.dataset.player == 1 ? 2 : 1);
				});
				element.appendChild(div);
			}
		}
	}
	function _disableBattlefield(player) {
		if (player == 1) {
			const battlefield = document.getElementById("game-board-one");
			battlefield.style.opacity = 0.5;
		} else if (player == 2) {
			const battlefield = document.getElementById("game-board-two");
			battlefield.style.opacity = 0.5;
		}
	}
	function _enableBattlefield(player) {
		if (player == 1) {
			const battlefield = document.getElementById("game-board-one");
			battlefield.style.opacity = 1;
		} else if (player == 2) {
			const battlefield = document.getElementById("game-board-two");
			battlefield.style.opacity = 1;
		}
	}
	function _clearElement(element) {
		element.innerHTML = "";
	}
	return {
		updateGameBoard,
		declareWinner,
	};
})();
