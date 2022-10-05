const game = document.querySelector(".game");
let spaceShip = document.createElement("img");
spaceShip.classList.add(".player");
spaceShip.src =
  "https://raw.githubusercontent.com/codewmax/space-invaders/master/img/spaceship.png";
spaceShip.style.width = "50px";
spaceShip.style.height = "50px";
spaceShip.style.position = "absolute";
spaceShip.style.left = "375px";
spaceShip.style.top = "500px";

game.append(spaceShip);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

class Game {
  constructor() {
    this.player = spaceShip;
    this.x_pos = 0;
    this.y_pos = 0;
    this.move_left = false;
    this.move_right = false;
  }
  setPosition(ship) {
    // console.log(ship);
    ship.style.transform = `translate(${this.x_pos}px, ${this.y_pos}px)`;
  }

  updatePlayer() {
    if (this.move_left) {
      this.x_pos -= 3;
      this.setPosition(spaceShip);
    }
    if (this.move_right) {
      this.x_pos += 3;
      this.setPosition(spaceShip);
    }
  }
}

// Main Update Function
function update() {
  game1.updatePlayer();
  window.requestAnimationFrame(update);
}

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

let game1 = new Game();
update();
// console.log(game1);
