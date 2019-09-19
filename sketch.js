let player
let zombie

function setup() {
  createCanvas(400, 400);
  player = new Player()
  zombie = new Sprite(width -10, height / 2, "red")
}

function draw() {
  background(220);
  zombie.draw()
  zombie.move()
  player.draw()
}

function keyPressed() {
  player.keyPressed(keyCode)
}