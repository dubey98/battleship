import { GameBoard } from "./gameBoard";
import { shipYard } from "./Ship";
/**Gameboard should :
 *    - maintaines the points attacked
 *    - maintaines the number of ship present } data about the ship
 *    - maintaines the number of ship sunk    }
 *  functions to be used -
 *      createGameBoard << size             => creates and returns a gameBoard of a given size
 *      placeship       << x, y, ship     => places a ship of "length" at x, y coordinates
 *      receiveattack   << x, y             => receves an attack coordinate and relates it to the ship
 *      isGameOver      <<                  => checks if all ships are sunk
 *      isAttackValid   << x,y              => if an attack is valid (not attacked previously)
 */

/**Normal Cases*/

test("places a ship at (1,1) of length 2", () => {
	const game = GameBoard();
	const ship = shipYard(2);
	game.placeShip(1, 1, ship);

	const a = [
		[100, 100, 100],
		[100, 1, 1],
		[100, 100, 100],
	];
	expect(game.board).toEqual(a);

	expect(game.shipData).toEqual([{ x: 1, y: 1, ship: ship }]);
});

test("receives attack correctly", () => {
	const game = GameBoard();
	const ship = shipYard(2);
	const a = [];
	for (let i = 0; i < 10; i++) {
		let temp = [];
		for (let j = 0; j < 10; j++) {
			temp.push(100);
		}
		a.push(temp);
	}
	a[1][1] = 1;
	a[1][2] = 1;
	game.placeShip(1, 1, ship);

	expect(game.receiveAttack(1, 1)).toEqual(a);
});

xtest("checks if Game is over | are all ships sunk", () => {
	const game = GameBoard();
	const ship1 = shipYard(2);
	const ship2 = shipYard(1);

	game.createGameBoard(3);

	game.placeShip(1, 1, ship1);
	game.placeShip(0, 0, ship2);

	game.receiveAttack(1, 1);
	game.receiveAttack(1, 2);
	game.receiveAttack(0, 0);

	expect(game.allShipSunk()).toEqual(true);
});
/**Edge cases  */
xtest("length of ship greater than the gameboard", () => {
	const board = GameBoard();
	const ship = shipYard(3);

	board.createGameBoard(3);
	board.placeShip(1, 1, ship);

	expect(board.board).toEqual([
		[100, 100, 100],
		[100, 100, 100],
		[100, 100, 100],
	]);
});
