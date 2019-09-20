let player
let zombie
let sprites = []
let items = []

function setup() {
  createCanvas(400, 400);
  player = new Player()
  zombie = new Zombie()
  sprites.push(player)
  sprites.push(zombie)
  for (let i = 0; i < 12; i++) {
    let item = new Item("potion", Math.random() * 5 )
    sprites.push(item)
    items.push(item)
  }
}

function draw() {
  background(220);
  sprites.forEach(sprite => {
    sprite.update()
    sprite.draw()
  })
}

function keyPressed() {
  player.keyPressed()
}

function keyReleased() {
  player.stop()
}