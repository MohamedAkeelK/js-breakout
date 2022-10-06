const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_WIDTH = 50;

const game = document.querySelector(".game");

// create player
let spaceShip = document.createElement("img");
spaceShip.classList.add(".player");

// Game class
class Game {
  constructor() {
    this.player = spaceShip;
    this.x_pos = GAME_WIDTH / 2;
    this.y_pos = GAME_HEIGHT - 50;
    this.move_x_by = 0;
    this.move_y_by = 0;
    this.move_left = false;
    this.move_right = false;
    this.shooting = false;
    this.bullets = [];
    this.enemies = [];
    this.init_player();
    this.createEnemies();
  }
  // Change player properties and append to .game
  init_player() {
    this.player.src =
      "https://raw.githubusercontent.com/codewmax/space-invaders/master/img/spaceship.png";
    this.player.style.width = "50px";
    this.player.style.height = "50px";
    this.player.style.position = "absolute";
    this.player.style.left = this.x_pos + "px";
    this.player.style.top = this.y_pos + "px";
    game.append(this.player);
  }
  // translate function
  setPosition() {
    this.player.style.transform = `translate(${this.move_x_by}px`;
  }
  // change player state and update position
  updatePlayer() {
    if (this.move_left) {
      if (this.move_x_by >= 0 - GAME_WIDTH / 2) {
        this.move_x_by -= 5;
        this.setPosition();
      }
    }
    if (this.move_right) {
      if (this.move_x_by <= GAME_WIDTH / 2 - 50) {
        this.move_x_by += 5;
        this.setPosition();
      }
    }
  }

  // ! Change player properties and append to .game
  init_bullet() {
    let bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.width = "50px";
    bullet.style.height = "50px";
    bullet.style.position = "absolute";
    bullet.style.left = this.x_pos + "px";
    bullet.style.top = this.y_pos + "px";
    this.bullets.push(bullet);
    game.append(bullet);
  }
  // translate function
  // setPositionBullet(bullet) {
  //   this.bullet.style.transform = `translate(${this.move_x_by}px`;
  // }
  // change player state and update position
  updateBullets() {
    if (this.shooting) {``
      this.init_bullet();
      // game1.append(this.bullets[0]);
      // this.setPosition();
    } else {
      return;
    }
  }

  // updateBullets() {
  //   if (this.shooting) {
  //     let bullet = document.createElement("div");
  //     bullet.classList.add("bullet");
  //     bullet.style.left = this.x_pos + "px";
  //     bullet.style.top = this.y_pos + "px";

  //     // console.log(bullet);
  //     this.bullets.push(bullet);
  //     console.log(this.bullets);
  //     // console.log("bullet");
  //     game.append(bullet);
  //   }
  // }

  // create enemies
  createEnemies() {
    let factor = 50; // player width
    for (let i = 0; i < 48; i++) {
      let enemy = document.createElement("img");
      enemy.classList.add("enemy");
      enemy.src =
        "https://raw.githubusercontent.com/codewmax/space-invaders/master/img/ufo.png";
      enemy.style.width = "50px";
      enemy.style.height = "50px";
      enemy.style.left = -20 + factor + "px";
      enemy.style.top = "300px";
      game.append(enemy);
      factor += 50;
    }
  }
}

// Main Update Function
function update() {
  game1.updatePlayer();
  game1.updateBullets();
  window.requestAnimationFrame(update);
}

// Event Listeners
window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    console.log("left key");
    game1.move_left = true;
  }
  if (e.key === "ArrowRight") {
    console.log("right key");
    game1.move_right = true;
  }
  if (e.key === " ") {
    // console.log("space");
    game1.shooting = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    game1.move_left = false;
  }
  if (e.key === "ArrowRight") {
    game1.move_right = false;
  }
  if (e.key === " ") {
    // console.log("space");
    game1.shooting = false;
  }
});

// Create a new game
let game1 = new Game();
update();
// console.log(game1);
