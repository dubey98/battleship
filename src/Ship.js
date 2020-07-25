export const shipYard = (length) => {
	let shipArray = [];
	for (let i = 0; i < length; i++) {
		shipArray.push(1);
	}

	const isHit = (pos) => {
		if (shipArray[pos] === 0 || pos >= length) {
			return "invalid position";
		}
		shipArray[pos] = 0;
	};

	const isSunk = () => {
		for (let i = 0; i < shipArray.length; i++) {
			if (shipArray[i] === 1) return false;
		}
		return true;
	};
	return {
		length,
		shipArray,
		isHit,
		isSunk,
	};
};
