const game = document.querySelector(".game");
// console.log(game);

const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_RIGHT = 39;
const KEY_LEFT = 37;
const KEY_SPACE = 32;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

class SpaceInvaders {
  constructor() {
    this.player = new Player();
    this.enemies = [];
    this.score = 0;
    this.fillEnemies();
  }
  fillEnemies() {
    for (let i = 0; i < 15; i++) {
      this.enemies.push(new Enemy());
    }
    // console.log(this.enemies);
  }
}

class Player {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x_pos = GAME_WIDTH / 2 - 25;
    this.y_pos = GAME_HEIGHT - 50;
    this.missles = [];
    this.addPlayerToDom();
  }
  addPlayerToDom() {
    let spaceShip = document.createElement("img");
    spaceShip.src =
      "https://raw.githubusercontent.com/codewmax/space-invaders/master/img/spaceship.png";
    spaceShip.style.width = this.width + "px";
    spaceShip.style.height = this.height + "px";
    spaceShip.style.position = "absolute";
    spaceShip.style.left = this.x_pos + "px";
    spaceShip.style.top = this.y_pos + "px";

    game.append(spaceShip);
    // spaceShip.style.top
    // console.log(document.querySelect);
    // console.log(game);
  }
}

class Enemy {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x_pos;
    this.y_pos;
  }
}

let game1 = new SpaceInvaders();
// console.log(game1);
