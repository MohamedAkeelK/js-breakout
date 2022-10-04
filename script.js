const container = document.querySelector(".game");

const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_RIGHT = 39;
const KEY_LEFT = 37;
const KEY_SPACE = 32;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const STATE = {
  x_pos: 0,
  y_pos: 0,
  move_right: false,
  move_left: false,
  shoot: false,
  lasers: [],
  enemyLasers: [],
  enemies: [],
  spaceship_width: 50,
  enemy_width: 50,
  cooldown: 0,
  number_of_enemies: 16,
  enemy_cooldown: 0,
  gameOver: false,
};

// General purpose functions

function setPosition(element, x, y) {
  element.style.transform = `translate(${x}px, ${y}px)`;
}

function setSize($element, width) {
  $element.style.width = `${width}px`;
  $element.style.height = "auto";
}

// Enemy
function createEnemy(container, x, y) {}

function createEnemies(container) {}

function updateEnemies(container) {}

// Player
function createPlayer(container) {
  STATE.x_pos = GAME_WIDTH / 2;
  STATE.y_pos = GAME_HEIGHT - 50;
  const player = document.createElement("img");
  player.src =
    "https://raw.githubusercontent.com/codewmax/space-invaders/master/img/background-blue.png";
  player.classList.add("player");
  container.append(player);
  setPosition(player, STATE.x_pos, STATE.y_pos);
  setSize(player, STATE.spaceship_width);
}

function updatePlayer() {}

// Player Laser
function createLaser(container, x, y) {}

function updateLaser(container) {}

// Enemy Laser
function createEnemyLaser(container, x, y) {}

function updateEnemyLaser(container) {}

// Delete Laser
function deleteLaser(lasers, laser, $laser) {}

// Key Presses
function KeyPress(event) {
  if (event.keyCode === KEY_RIGHT) {
    STATE.move_right = true;
  } else if (event.keyCode === KEY_LEFT) {
    STATE.move_left = true;
  } else if (event.keyCode === KEY_SPACE) {
    STATE.shoot = true;
  }
}

function KeyRelease(event) {
  if (event.keyCode === KEY_RIGHT) {
    STATE.move_right = false;
  } else if (event.keyCode === KEY_LEFT) {
    STATE.move_left = false;
  } else if (event.keyCode === KEY_SPACE) {
    STATE.shoot = false;
  }
}

// Main Update Function
function update() {
  window.requestAnimationFrame(update);
}

// Initialize the Game
createPlayer(container);
// createEnemies(container);

// Key Press Event Listener
window.addEventListener("keydown", KeyPress);
window.addEventListener("keyup", KeyRelease);
update();
