import { shipYard } from "./Ship";

test("creates a ship", () => {
	const ship = shipYard(2);
	const a = [1, 1];
	expect(ship.shipArray).toEqual(a);
});

test("hits taken correctly", () => {
	const ship = shipYard(2);
	const a = [0, 1];
	ship.isHit(0);
	expect(ship.shipArray).toEqual(a);
});

test("sunk correctly", () => {
	const ship = shipYard(2);
	const a = [0, 0];
	ship.isHit(0);
	ship.isHit(1);
	expect(ship.shipArray).toEqual(a);
	expect(ship.isSunk()).toEqual(true);
});
