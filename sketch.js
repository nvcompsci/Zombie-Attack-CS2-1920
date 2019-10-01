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
  sprites.filter(sprite => sprite.active).forEach(sprite => {
    sprite.update()
    sprite.draw()
  })
  checkCollisions()
}

function checkCollisions() {
  if (zombie.alive &&  checkCC(zombie.x, zombie.y, zombie.width, player.x, player.y, player.width) ) {
      player.health -= 50
  }
  for (let i = 0; i < items.length; i++) {
     let item = items[i]
     player.collect(item)
  }
}

function keyPressed() {
  player.keyPressed()
  if (keyCode === 32)
    player.attack(zombie)
}

function keyReleased() {
  player.stop()
}

function checkCC(x, y,d, x2, y2, d2, b = 0) {
  if( dist(x,y,x2,y2) <= (d/2)+(d2/2) + b){
    return true;
  }
  return false;
}