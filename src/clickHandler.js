import { GameBoard } from "./gameBoard";

export const clickHandler = (() => {
	const handleClick = ({ row, col, player, value } = {}) => {
		console.log("clickHandler invoked ");
	};
	return {
		handleClick,
	};
})();
