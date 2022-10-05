const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const game = document.querySelector(".game");

// create player
let spaceShip = document.createElement("img");
spaceShip.classList.add(".player");

class Game {
  constructor() {
    this.player = spaceShip;
    this.x_pos = 0;
    this.y_pos = 0;
    this.move_left = false;
    this.move_right = false;
    this.enemies = [];
    this.init_player();
  }
  init_player() {
    this.player.src =
      "https://raw.githubusercontent.com/codewmax/space-invaders/master/img/spaceship.png";
    this.player.style.width = "50px";
    this.player.style.height = "50px";
    this.player.style.position = "absolute";
    this.player.style.left = "375px";
    this.player.style.top = "500px";
    game.append(this.player);
  }
  setPosition(ship) {
    ship.style.transform = `translate(${this.x_pos}px, ${this.y_pos}px)`;
  }
  updatePlayer() {
    if (this.move_left) {
      if (this.x_pos >= -370) {
        this.x_pos -= 5;
        this.setPosition(spaceShip);
      }
    }
    if (this.move_right) {
      if (this.x_pos <= 320) {
        this.x_pos += 5;
        this.setPosition(spaceShip);
      }
    }
  }
}

// Main Update Function
function update() {
  game1.updatePlayer();
  window.requestAnimationFrame(update);
}

// Event Listeners
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    console.log("left key");
    game1.move_left = true;
  }
  if (e.key === "ArrowRight") {
    console.log("right key");
    game1.move_right = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    game1.move_left = false;
  }
  if (e.key === "ArrowRight") {
    game1.move_right = false;
  }
});

// Create a new game
let game1 = new Game();
update();
// console.log(game1);
