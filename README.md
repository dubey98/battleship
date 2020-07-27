# BattleShip

> an online battleship game meant to be played between two players.

Tools used for building this project

- webpack
- jest for testing

The basic high level view of the project

- **Ship** A ship stores data about one indivisual ship, where the ship is hit and if sunk.
- **GameBoard** gameboard contains data about the battleField, which ships are where and whether any attack hits any ship. more about how the gameboard manages it can be found in the respective file.
- **render** contains methods for rendering the HTML using javascript and data from the gameboard. main methods are for updating the battlefield after every turn and declaring the winner.
- **Game** the game function contains function for attack on a player or attack by the computer.

### TODO

in no specific order

- improve the recieve attack method for better handling of attacks that hit a ship, possibly to mark all cells around it to be unattackable.

- improve the computer attack.

  - instead of try and error method choose from the remaining positions

  - make the computer try adjacent position after getting a hit.

- Implement drag and drop for placing ships.

- make it nicer.

- make it online multiplayer using socket.io and a backend.
