import { playGame } from "./index";

export const clickHandler = (() => {
	const handleClick = ({ row, col, player, value } = {}) => {
		playGame({ row, col, player });
	};
	return {
		handleClick,
	};
})();
