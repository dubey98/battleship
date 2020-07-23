// import shipYard from "./Ship";

// /**GameBoard values meaning
//  *                  not yet Attacked    Attacked
//  *  empty cell           100              -100
//  *  contains ship        n                 -n
//  *  where n = ship number
//  */
// export const gameBoard = () => {
//   let board = [];
//   let shipData = [];

//   const createGameBoard = (size) => {
//     const board = [];
//     for (let i = 0; i < size; i++) {
//       const tempArray = [];
//       for (let j = 0; j < size; j++) {
//         tempArray.push(100);
//       }
//       board.push(tempArray);
//     }
//     return (this.board = board);
//   };

//   const placeShip = (x, y, length) => {
//     const ship = shipYard(length);
//     const shipID = shipData.length + 1;
//     for (let i = x; i < ship.length; i++) {
//       this.board[i][y] = shipID;
//     }
//     ship.startX = x;
//     shipData.push(ship);
//   };

//   /**Given a hit coordinat efind if it hits the ship */
//   const receiveAttack = (x, y) => {
//     if (board[x][y] == 100) {
//       board[x][y] = -100;
//     } else {
//       const shipID = board[x][y] + 1;
//       const ship = shipData[shipID];
//       ship.isHit(x - ship.startX);
//     }
//   };

//   const isAllSunk = () => {
//     for (let i = 0; i < shipData.length; i++) {
//       if (shipData[i].isSunk() == false) {
//         return false;
//       }
//     }
//     return true;
//   };

//   return {
//     board,
//     shipData,
//     createGameBoard,
//     placeShip,
//     receiveAttack,
//     isAllSunk,
//   };
// };
