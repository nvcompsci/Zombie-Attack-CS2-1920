let player
let zombie
let sprites = []

function setup() {
  createCanvas(400, 400);
  player = new Player()
  zombie = new Sprite(width -10, height / 2, "red")
  sprites.push(player)
  sprites.push(zombie)
}

function draw() {
  background(220);
  sprites.forEach(sprite => {
    sprite.update()
    sprite.draw()
  })
}

function keyPressed() {
  player.keyPressed(keyCode)
}

function keyReleased() {
  player.stop()
}