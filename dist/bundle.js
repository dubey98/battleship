/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nconst Player = (name) => {\n\tconst attack = () => {\n\t\tconst x = 10 * Math.random();\n\t\tconst y = 10 * Math.random();\n\t\treturn { x, y };\n\t};\n\treturn {\n\t\tname,\n\t\tattack,\n\t};\n};\n\n\n//# sourceURL=webpack:///./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/*! exports provided: shipYard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shipYard\", function() { return shipYard; });\nconst shipYard = (length) => {\n\tlet shipArray = [];\n\tfor (let i = 0; i < length; i++) {\n\t\tshipArray.push(1);\n\t}\n\n\tconst isHit = (pos) => {\n\t\tif (shipArray[pos] === 0 || pos >= length) {\n\t\t\treturn \"invalid position\";\n\t\t}\n\t\tshipArray[pos] = 0;\n\t};\n\n\tconst isSunk = () => {\n\t\tfor (let i = 0; i < shipArray.length; i++) {\n\t\t\tif (shipArray[i] === 1) return false;\n\t\t}\n\t\treturn true;\n\t};\n\treturn {\n\t\tlength,\n\t\tshipArray,\n\t\tisHit,\n\t\tisSunk,\n\t};\n};\n\n\n//# sourceURL=webpack:///./src/Ship.js?");

/***/ }),

/***/ "./src/clickHandler.js":
/*!*****************************!*\
  !*** ./src/clickHandler.js ***!
  \*****************************/
/*! exports provided: clickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickHandler\", function() { return clickHandler; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst clickHandler = (() => {\n\tconst handleClick = ({ row, col, player, value } = {}) => {\n\t\tObject(_index__WEBPACK_IMPORTED_MODULE_0__[\"playGame\"])({ row, col, player });\n\t};\n\treturn {\n\t\thandleClick,\n\t};\n})();\n\n\n//# sourceURL=webpack:///./src/clickHandler.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! exports provided: GameBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameBoard\", function() { return GameBoard; });\n/**GameBoard values meaning\n *                  not yet Attacked    Attacked\n *  empty cell           100              -100\n *  contains ship         n                -n\n *  where n = ship number\n */\nconst GameBoard = () => {\n\tconst board = [];\n\tconst shipData = [];\n\tconst size = 10;\n\tfor (let i = 0; i < size; i++) {\n\t\tlet temp = [];\n\t\tfor (let j = 0; j < size; j++) {\n\t\t\ttemp.push(100);\n\t\t}\n\t\tboard.push(temp);\n\t}\n\n\tconst placeShip = (x, y, ship) => {\n\t\t/**Length of the ship greater than the board */\n\t\tif (ship.length + y > size) {\n\t\t\tconsole.error(\n\t\t\t\t\"The length of the ship is greter than to accomadate there\"\n\t\t\t);\n\t\t\treturn;\n\t\t}\n\t\tconst shipIndex = shipData.length + 1;\n\t\tfor (let i = 0; i < ship.length && i + y < size; i++) {\n\t\t\tboard[x][i + y] = shipIndex;\n\t\t}\n\t\tshipData.push({\n\t\t\tx: x,\n\t\t\ty: y,\n\t\t\tship: ship,\n\t\t});\n\t\treturn shipData;\n\t};\n\n\tconst receiveAttack = (x, y) => {\n\t\tif (board[x][y] == 100) {\n\t\t\tboard[x][y] = -100;\n\t\t\treturn board;\n\t\t} else {\n\t\t\tconst ship = shipData[board[x][y] - 1].ship;\n\t\t\tconst startY = shipData[board[x][y] - 1].y;\n\t\t\tship.isHit(y - startY);\n\t\t\tboard[x][y] = -board[x][y];\n\t\t\treturn board;\n\t\t}\n\t};\n\n\tconst allShipSunk = () => {\n\t\tfor (let i = 0; i < shipData.length; i++) {\n\t\t\tif (!shipData[i].ship.isSunk()) return false;\n\t\t}\n\t\treturn true;\n\t};\n\n\tconst isValidAttack = (x, y) => {\n\t\treturn board[x][y] > 0 ? true : false;\n\t};\n\n\treturn {\n\t\tboard,\n\t\tshipData,\n\t\tplaceShip,\n\t\treceiveAttack,\n\t\tallShipSunk,\n\t\tisValidAttack,\n\t};\n};\n\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: gameState, playGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameState\", function() { return gameState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playGame\", function() { return playGame; });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\n\n\nconst gameState = {\n\tturn: 2,\n};\n\nstartGame();\n\nfunction startGame() {\n\tconst gameBoardOne = Object(_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"GameBoard\"])();\n\tconst gameBoardTwo = Object(_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"GameBoard\"])();\n\n\tsetShips(gameBoardOne);\n\tsetShips(gameBoardTwo);\n\n\tgameState.player1 = {\n\t\tname: \"human\",\n\t\tgameBoard: gameBoardOne,\n\t};\n\tgameState.player2 = {\n\t\tname: \"computer\",\n\t\tgameBoard: gameBoardTwo,\n\t};\n\n\t_render__WEBPACK_IMPORTED_MODULE_3__[\"render\"].updateGameBoard(gameBoardOne.board, 1);\n\t_render__WEBPACK_IMPORTED_MODULE_3__[\"render\"].updateGameBoard(gameBoardTwo.board, 2);\n}\n\nfunction playGame({ row, col, player } = {}) {\n\tif (gameState.turn == 2 && player == 1) {\n\t\tif (gameState.player1.gameBoard.isValidAttack(row, col)) {\n\t\t\tgameState.player1.gameBoard.receiveAttack(row, col);\n\t\t\t_render__WEBPACK_IMPORTED_MODULE_3__[\"render\"].updateGameBoard(gameState.player1.gameBoard.board, 1);\n\n\t\t\tif (gameState.player1.gameBoard.allShipSunk()) {\n\t\t\t\t_render__WEBPACK_IMPORTED_MODULE_3__[\"render\"].declareWinner(gameState.player2);\n\t\t\t}\n\n\t\t\tgameState.turn = 1;\n\t\t} else return;\n\t} else if (gameState.turn == 1 && player == 2) {\n\t\tgameState.player1.gameBoard.receiveAttack(computer.attack());\n\t\t_render__WEBPACK_IMPORTED_MODULE_3__[\"render\"].updateGameBoard(gameState.player1.gameBoard.board, 2);\n\n\t\tif (gameState.player1.gameBoard.allShipSunk()) {\n\t\t\t_render__WEBPACK_IMPORTED_MODULE_3__[\"render\"].declareWinner(gameState.player2);\n\t\t}\n\n\t\tgameState.turn = 1;\n\t} else {\n\t\tconsole.error(\"wrong spot mr.\");\n\t}\n}\n\nfunction setShips(gameBoard) {\n\tgameBoard.placeShip(0, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(5));\n\tgameBoard.placeShip(2, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(2));\n\tgameBoard.placeShip(4, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(2));\n\tgameBoard.placeShip(6, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(2));\n\tgameBoard.placeShip(8, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(1));\n\tgameBoard.placeShip(8, 2, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(1));\n\tgameBoard.placeShip(8, 4, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(1));\n\tgameBoard.placeShip(8, 6, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(1));\n\tgameBoard.placeShip(8, 8, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(1));\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _clickHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickHandler */ \"./src/clickHandler.js\");\n\n\nconst render = (() => {\n\tconst updateGameBoard = (board, num) => {\n\t\tif (num == 1) {\n\t\t\tconst gameBoard = document.getElementById(\"game-board-one\");\n\t\t\t_clearElement(gameBoard);\n\t\t\t_addTinyDivs(gameBoard, 1, board);\n\t\t} else {\n\t\t\tconst gameBoard = document.getElementById(\"game-board-two\");\n\t\t\t_clearElement(gameBoard);\n\t\t\t_addTinyDivs(gameBoard, 2, board);\n\t\t}\n\t};\n\tconst declareWinner = (player) => {\n\t\tconst message = document.getElementById(\"message\");\n\t\tmessage.textContent = player.name + \" Wins!!\";\n\t\talert(player.name + \" wins\");\n\t};\n\tfunction _addTinyDivs(element, num, board) {\n\t\tconst message = document.getElementById(\"message\");\n\t\tmessage.textContent = `Player ${num} Turn`;\n\t\tfor (let i = 0; i < 10; i++) {\n\t\t\tfor (let j = 0; j < 10; j++) {\n\t\t\t\tconst div = document.createElement(\"div\");\n\n\t\t\t\tdiv.className = \"square\";\n\n\t\t\t\tdiv.setAttribute(\"data-x\", i);\n\t\t\t\tdiv.setAttribute(\"data-y\", j);\n\t\t\t\tdiv.setAttribute(\"data-player\", num);\n\n\t\t\t\tif (board[i][j] < 0) {\n\t\t\t\t\tdiv.textContent = \"X\";\n\t\t\t\t\tdiv.style.padding = \"2px\";\n\t\t\t\t\tdiv.style.color = \"red\";\n\t\t\t\t} else if (board[i][j] > 0) {\n\t\t\t\t\tdiv.style.padding = \"2px\";\n\t\t\t\t\tdiv.style.backgroundColor = \"lightblue\";\n\t\t\t\t}\n\n\t\t\t\tdiv.addEventListener(\"click\", (e) => {\n\t\t\t\t\t_clickHandler__WEBPACK_IMPORTED_MODULE_0__[\"clickHandler\"].handleClick({\n\t\t\t\t\t\trow: e.target.dataset.x,\n\t\t\t\t\t\tcol: e.target.dataset.y,\n\t\t\t\t\t\tplayer: e.target.dataset.player,\n\t\t\t\t\t\tvalue: e.target.dataset.value,\n\t\t\t\t\t});\n\t\t\t\t\t_disableBattlefield(e.target.dataset.player);\n\t\t\t\t\t_enableBattlefield(e.target.dataset.player == 1 ? 2 : 1);\n\t\t\t\t});\n\t\t\t\telement.appendChild(div);\n\t\t\t}\n\t\t}\n\t}\n\tfunction _disableBattlefield(player) {\n\t\tif (player == 1) {\n\t\t\tconst battlefield = document.getElementById(\"game-board-one\");\n\t\t\tbattlefield.style.opacity = 0.5;\n\t\t} else if (player == 2) {\n\t\t\tconst battlefield = document.getElementById(\"game-board-two\");\n\t\t\tbattlefield.style.opacity = 0.5;\n\t\t}\n\t}\n\tfunction _enableBattlefield(player) {\n\t\tif (player == 1) {\n\t\t\tconst battlefield = document.getElementById(\"game-board-one\");\n\t\t\tbattlefield.style.opacity = 1;\n\t\t} else if (player == 2) {\n\t\t\tconst battlefield = document.getElementById(\"game-board-two\");\n\t\t\tbattlefield.style.opacity = 1;\n\t\t}\n\t}\n\tfunction _clearElement(element) {\n\t\telement.innerHTML = \"\";\n\t}\n\treturn {\n\t\tupdateGameBoard,\n\t\tdeclareWinner,\n\t};\n})();\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });