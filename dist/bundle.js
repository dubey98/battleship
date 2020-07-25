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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickHandler\", function() { return clickHandler; });\nconst clickHandler = (() => {\n\tconst handleClick = ({ row, col, player, value } = {}) => {\n\t\tconsole.log(\"rows  : \" + row);\n\t\tconsole.log(\"ClickHnadler invoked\");\n\t};\n\treturn {\n\t\thandleClick,\n\t};\n})();\n\n\n//# sourceURL=webpack:///./src/clickHandler.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! exports provided: GameBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameBoard\", function() { return GameBoard; });\n/**GameBoard values meaning\n *                  not yet Attacked    Attacked\n *  empty cell           100              -100\n *  contains ship         n                -n\n *  where n = ship number\n */\nconst GameBoard = () => {\n\tconst board = [];\n\tconst shipData = [];\n\tconst size = 10;\n\tfor (let i = 0; i < size; i++) {\n\t\tlet temp = [];\n\t\tfor (let j = 0; j < size; j++) {\n\t\t\ttemp.push(100);\n\t\t}\n\t\tboard.push(temp);\n\t}\n\n\tconst placeShip = (x, y, ship) => {\n\t\t/**Length of the ship greater than the board */\n\t\tif (ship.length + y > size) {\n\t\t\tconsole.error(\n\t\t\t\t\"The length of the ship is greter than to accomadate there\"\n\t\t\t);\n\t\t\treturn;\n\t\t}\n\t\tconst shipIndex = shipData.length + 1;\n\t\tfor (let i = 0; i < ship.length && i + y < size; i++) {\n\t\t\tboard[x][i + y] = shipIndex;\n\t\t}\n\t\tshipData.push({\n\t\t\tx: x,\n\t\t\ty: y,\n\t\t\tship: ship,\n\t\t});\n\t\treturn shipData;\n\t};\n\n\tconst receiveAttack = (x, y) => {\n\t\tconst ship = shipData[board[x][y] - 1].ship;\n\t\tconst startY = shipData[board[x][y] - 1].y;\n\t\tship.isHit(y - startY);\n\t\tboard[x][y] = -board[x][y];\n\t\treturn board;\n\t};\n\n\tconst allShipSunk = () => {\n\t\tfor (let i = 0; i < shipData.length; i++) {\n\t\t\tif (!shipData[i].ship.isSunk()) return false;\n\t\t}\n\t\treturn true;\n\t};\n\n\tconst isValidAttack = (x, y) => {\n\t\treturn board[x][y] > 0 ? true : false;\n\t};\n\n\treturn {\n\t\tboard,\n\t\tshipData,\n\t\tplaceShip,\n\t\treceiveAttack,\n\t\tallShipSunk,\n\t\tisValidAttack,\n\t};\n};\n\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\n\n\nfunction Game() {\n\t// // const name = prompt(\"what is players name ? \");\n\n\t// const human = Player(name);\n\t// const computer = Player(\"computer\");\n\n\tconst gameBoard = Object(_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"GameBoard\"])();\n\tgameBoard.placeShip(1, 1, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(2));\n\tgameBoard.placeShip(3, 3, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(3));\n\tgameBoard.placeShip(5, 5, Object(_Ship__WEBPACK_IMPORTED_MODULE_0__[\"shipYard\"])(5));\n\n\t_render__WEBPACK_IMPORTED_MODULE_3__[\"render\"].renderGameBoard(gameBoard.board);\n\n\t// while (1) {\n\t// \trender.displayTurn(human);\n\t// \tif (computer.gameBoard.allShipSunk()) {\n\t// \t\trender.displayWinner(human);\n\t// \t}\n\t// \trender.displayTurn(computer);\n\t// \tif (human.gameBoard.allShipSunk()) {\n\t// \t\trender.displayWinner(computer);\n\t// \t}\n\t// }\n}\nGame();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _clickHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickHandler */ \"./src/clickHandler.js\");\n\n\nconst render = (() => {\n\tfunction _addTinyDivs(element, num, board) {\n\t\tfor (let i = 0; i < 10; i++) {\n\t\t\tfor (let j = 0; j < 10; j++) {\n\t\t\t\tconst div = document.createElement(\"div\");\n\t\t\t\tdiv.className = \"square\";\n\t\t\t\tdiv.id = `${i}+${j}+${num}+${board[i][j]}`;\n\t\t\t\tdiv.addEventListener(\"click\", (e) => {\n\t\t\t\t\tconst [row, col, player, value] = e.target.id.split(\"+\");\n\t\t\t\t\t_clickHandler__WEBPACK_IMPORTED_MODULE_0__[\"clickHandler\"].handleClick({\n\t\t\t\t\t\trow,\n\t\t\t\t\t\tcol,\n\t\t\t\t\t\tplayer,\n\t\t\t\t\t\tvalue,\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t\telement.appendChild(div);\n\t\t\t}\n\t\t}\n\t}\n\tconst renderGameBoard = (board) => {\n\t\tconsole.table(board);\n\t\tconst gameBoardFirst = document.getElementById(\"game-board-one\");\n\t\tconst gameBoardSecond = document.getElementById(\"game-board-two\");\n\t\tconst message = document.getElementById(\"message\");\n\n\t\t_addTinyDivs(gameBoardFirst, 1, board);\n\t\t_addTinyDivs(gameBoardSecond, 2, board);\n\t};\n\n\treturn {\n\t\trenderGameBoard,\n\t};\n})();\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });