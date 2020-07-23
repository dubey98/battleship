// Ship.js

export const shipYard = (length) => {
  const shipArray = [];

  for (let i = 0; i < length; i++) {
    shipArray.push(1);
  }

  const isHit = (pos) => {
    if (pos >= length) return "invalid position given";
    shipArray[pos] = 0;
    return shipArray;
  };

  const isSunk = () => {
    let sunk = 1;
    for (let i = 0; i < shipArray.length; i++) {
      if (shipArray[i] === 1) sunk = 0;
    }
    return sunk == 1 ? true : false;
  };
  return {
    shipArrray,
    length,
    isHit,
    isSunk,
  };
};
