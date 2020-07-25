import { clickHandler } from "./clickHandler";

export const render = (() => {
	function _addTinyDivs(element, num, board) {
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const div = document.createElement("div");
				div.className = "square";
				div.id = `${i}+${j}+${num}+${board[i][j]}`;
				div.textContent = board[i][j] == 100 ? "" : `${board[i][j]}`;
				div.addEventListener("click", (e) => {
					const [row, col, player, value] = e.target.id.split("+");
					clickHandler.handleClick({
						row,
						col,
						player,
						value,
					});
				});
				element.appendChild(div);
			}
		}
	}
	function _clearGameBoard(element) {
		element.innerHTML = "";
	}
	const renderGameBoard = (board, num) => {
		if (num == 1) {
			const gameBoard = document.getElementById("game-board-one");
			_clearGameBoard(gameBoard);
			_addTinyDivs(gameBoard, 1, board);
		} else {
			const gameBoard = document.getElementById("game-board-two");
			_clearGameBoard(gameBoard);
			_addTinyDivs(gameBoard, 2, board);
		}
	};

	return {
		renderGameBoard,
	};
})();
