export const Player = (name) => {
	const attack = () => {
		const x = 10 * Math.random();
		const y = 10 * Math.random();
		return { x, y };
	};
	return {
		name,
		attack,
	};
};
