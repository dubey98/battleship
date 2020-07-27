/**GameBoard values meaning
 *                  not yet Attacked    Attacked
 *  empty cell           100              -100
 *  contains ship         n                -n
 *  where n = ship number
 */
export const GameBoard = () => {
	const board = [];
	const shipData = [];
	const size = 10;
	for (let i = 0; i < size; i++) {
		let temp = [];
		for (let j = 0; j < size; j++) {
			temp.push(100);
		}
		board.push(temp);
	}

	const placeShip = (x, y, ship) => {
		/**Length of the ship greater than the board */
		if (ship.length + y > size) {
			console.error(
				"The length of the ship is greter than to accomadate there"
			);
			return false;
		}
		const shipIndex = shipData.length + 1;
		for (let i = 0; i < ship.length && i + y < size; i++) {
			board[x][i + y] = shipIndex;
		}
		shipData.push({
			x: x,
			y: y,
			ship: ship,
		});
		return true;
	};

	const receiveAttack = (x, y) => {
		if (board[x][y] == 100) {
			board[x][y] = -100;
			return false;
		} else {
			const ship = shipData[board[x][y] - 1].ship;
			const startY = shipData[board[x][y] - 1].y;
			ship.isHit(y - startY);
			board[x][y] = -board[x][y];
			return true;
		}
	};

	const allShipSunk = () => {
		for (let i = 0; i < shipData.length; i++) {
			if (!shipData[i].ship.isSunk()) return false;
		}
		return true;
	};

	const isValidAttack = (x, y) => {
		return board[x][y] > 0 ? true : false;
	};

	const getBattleField = () => {
		return board;
	};

	return {
		board,
		shipData,
		placeShip,
		receiveAttack,
		allShipSunk,
		isValidAttack,
		getBattleField,
	};
};
