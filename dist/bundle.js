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

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/*! exports provided: shipYard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shipYard\", function() { return shipYard; });\nconst shipYard = (length) => {\n\tlet shipArray = [];\n\tfor (let i = 0; i < length; i++) {\n\t\tshipArray.push(1);\n\t}\n\n\tconst isHit = (pos) => {\n\t\tif (shipArray[pos] === 0 || pos >= length) {\n\t\t\treturn \"invalid position\";\n\t\t}\n\t\tshipArray[pos] = 0;\n\t};\n\n\tconst isSunk = () => {\n\t\tfor (let i = 0; i < shipArray.length; i++) {\n\t\t\tif (shipArray[i] === 1) return false;\n\t\t}\n\t\treturn true;\n\t};\n\treturn {\n\t\tlength,\n\t\tshipArray,\n\t\tisHit,\n\t\tisSunk,\n\t};\n};\n\n\n//# sourceURL=webpack:///./src/Ship.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! exports provided: GameBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameBoard\", function() { return GameBoard; });\n/**GameBoard values meaning\n *                  not yet Attacked    Attacked\n *  empty cell           100              -100\n *  contains ship         n                -n\n *  where n = ship number\n */\nconst GameBoard = () => {\n\tconst board = [];\n\tconst shipData = [];\n\tconst size = 10;\n\tfor (let i = 0; i < size; i++) {\n\t\tlet temp = [];\n\t\tfor (let j = 0; j < size; j++) {\n\t\t\ttemp.push(100);\n\t\t}\n\t\tboard.push(temp);\n\t}\n\n\tconst placeShip = (x, y, ship) => {\n\t\t/**Length of the ship greater than the board */\n\t\tif (ship.length + y > size) {\n\t\t\tconsole.error(\n\t\t\t\t\"The length of the ship is greter than to accomadate there\"\n\t\t\t);\n\t\t\treturn false;\n\t\t}\n\t\tconst shipIndex = shipData.length + 1;\n\t\tfor (let i = 0; i < ship.length && i + y < size; i++) {\n\t\t\tboard[x][i + y] = shipIndex;\n\t\t}\n\t\tshipData.push({\n\t\t\tx: x,\n\t\t\ty: y,\n\t\t\tship: ship,\n\t\t});\n\t\treturn true;\n\t};\n\n\tconst receiveAttack = (x, y) => {\n\t\tif (board[x][y] == 100) {\n\t\t\tboard[x][y] = -100;\n\t\t\treturn false;\n\t\t} else {\n\t\t\tconst ship = shipData[board[x][y] - 1].ship;\n\t\t\tconst startY = shipData[board[x][y] - 1].y;\n\t\t\tship.isHit(y - startY);\n\t\t\tboard[x][y] = -board[x][y];\n\t\t\treturn true;\n\t\t}\n\t};\n\n\tconst allShipSunk = () => {\n\t\tfor (let i = 0; i < shipData.length; i++) {\n\t\t\tif (!shipData[i].ship.isSunk()) return false;\n\t\t}\n\t\treturn true;\n\t};\n\n\tconst isValidAttack = (x, y) => {\n\t\treturn board[x][y] > 0 ? true : false;\n\t};\n\n\tconst getBattleField = () => {\n\t\treturn board;\n\t};\n\n\treturn {\n\t\tboard,\n\t\tshipData,\n\t\tplaceShip,\n\t\treceiveAttack,\n\t\tallShipSunk,\n\t\tisValidAttack,\n\t\tgetBattleField,\n\t};\n};\n\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: attackComputer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attackComputer\", function() { return attackComputer; });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\n\n\n\nlet turn = 1;\n\nconst player = {\n\tname: \"You\",\n\tbattleField: Object(_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"GameBoard\"])(),\n};\nconst computer = {\n\tname: \"Computer\",\n\tbattleField: Object(_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"GameBoard\"])(),\n};\n\n(function startGame() {\n\tplaceShips(player.battleField);\n\tplaceShips(computer.battleField);\n\n\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].updatePlayerField(player.battleField.board);\n\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].updateComputerField(computer.battleField.board);\n\n\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].showPlayersTurn();\n})();\n\nfunction placeShips(battleField) {\n\tbattleField.placeShip(0, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_2__[\"shipYard\"])(5));\n\tbattleField.placeShip(2, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_2__[\"shipYard\"])(3));\n\tbattleField.placeShip(4, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_2__[\"shipYard\"])(3));\n\tbattleField.placeShip(6, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_2__[\"shipYard\"])(2));\n\tbattleField.placeShip(8, 0, Object(_Ship__WEBPACK_IMPORTED_MODULE_2__[\"shipYard\"])(2));\n\tbattleField.placeShip(8, 3, Object(_Ship__WEBPACK_IMPORTED_MODULE_2__[\"shipYard\"])(1));\n\tbattleField.placeShip(8, 5, Object(_Ship__WEBPACK_IMPORTED_MODULE_2__[\"shipYard\"])(1));\n\tbattleField.placeShip(8, 7, Object(_Ship__WEBPACK_IMPORTED_MODULE_2__[\"shipYard\"])(1));\n\tbattleField.placeShip(8, 9, Object(_Ship__WEBPACK_IMPORTED_MODULE_2__[\"shipYard\"])(1));\n}\n\nfunction attackPlayer() {\n\tlet row = Math.floor(Math.random() * 9);\n\tlet col = Math.floor(Math.random() * 9);\n\tconsole.log({ row, col });\n\tif (player.battleField.isValidAttack(row, col)) {\n\t\tconst result = player.battleField.receiveAttack(row, col);\n\t\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].updatePlayerField(player.battleField.board);\n\t\tif (player.battleField.allShipSunk()) {\n\t\t\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].declareWinner(computer);\n\t\t}\n\t\tif (result) {\n\t\t\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].showComputersTurn();\n\t\t\tattackPlayer();\n\t\t} else {\n\t\t\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].showPlayersTurn();\n\t\t\treturn;\n\t\t}\n\t} else {\n\t\tattackPlayer();\n\t}\n}\n\nfunction attackComputer({ row, col, turn }) {\n\tconsole.log({ row, col });\n\tif (turn != 1) {\n\t\tconsole.log(\"wrong turn\");\n\t\treturn;\n\t}\n\tif (computer.battleField.isValidAttack(row, col)) {\n\t\tconsole.log(\"attacking\");\n\t\tconst result = computer.battleField.receiveAttack(row, col);\n\t\tif (computer.battleField.allShipSunk()) {\n\t\t\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].declareWinner(player);\n\t\t}\n\t\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].updateComputerField(computer.battleField.board);\n\t\tif (!result) {\n\t\t\t_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"].showComputersTurn();\n\t\t\tturn = 2;\n\t\t\tsetTimeout(() => attackPlayer(), 1000);\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst render = (() => {\n\tconst playerField = document.getElementById(\"player-game-board\");\n\tconst computerField = document.getElementById(\"computer-game-board\");\n\tconst message = document.getElementById(\"message\");\n\n\tconst updatePlayerField = function (battleField) {\n\t\t_removeChildren(playerField);\n\t\tfor (let i = 0; i < 10; i++) {\n\t\t\tfor (let j = 0; j < 10; j++) {\n\t\t\t\tconst div = document.createElement(\"div\");\n\t\t\t\tdiv.className = \"square\";\n\t\t\t\tdiv.textContent = battleField[i][j];\n\t\t\t\tplayerField.appendChild(div);\n\t\t\t}\n\t\t}\n\t};\n\tconst updateComputerField = (battleField) => {\n\t\t_removeChildren(computerField);\n\t\tlet turn = 1;\n\t\tfor (let row = 0; row < 10; row++) {\n\t\t\tfor (let col = 0; col < 10; col++) {\n\t\t\t\tconst div = document.createElement(\"div\");\n\t\t\t\tdiv.className = \"square\";\n\t\t\t\tdiv.textContent = battleField[row][col];\n\t\t\t\tdiv.addEventListener(\"click\", () => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"attackComputer\"])({ row, col, turn }));\n\t\t\t\tcomputerField.appendChild(div);\n\t\t\t}\n\t\t}\n\t};\n\tconst showPlayersTurn = () => {\n\t\tmessage.textContent = \"Your Turn!!\";\n\t\tcomputerField.style.opacity = \"1\";\n\t\tplayerField.style.opacity = \"0.5\";\n\t};\n\tconst showComputersTurn = () => {\n\t\tmessage.textContent = \"computers turn\";\n\t\tplayerField.style.opacity = \"1\";\n\t\tcomputerField.style.opacity = \"0.5\";\n\t};\n\tconst declareWinner = (player) => {\n\t\tmessage.textContent = `${player.name} Won the game.....!!`;\n\t};\n\tfunction _removeChildren(element) {\n\t\telement.innerHTML = \"\";\n\t}\n\treturn {\n\t\tupdatePlayerField,\n\t\tupdateComputerField,\n\t\tshowPlayersTurn,\n\t\tshowComputersTurn,\n\t\tdeclareWinner,\n\t};\n})();\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });