class Player extends Sprite {
  constructor() {
    super(10, height / 2, "black")
    this.score = 0
    this.xp = 0
    this.hp = 0
  }

  attack(z) {
    if (checkCC(this.x, this.y, this.width, z.x, z.y, z.width, 20)) {
      z.die()
      this.score += 50
      this.xp += 50
    } else console.log("no hit")
  }
  
  collect(item) {
    
  }

  keyPressed() {
    if (keyCode === UP_ARROW) {
      this.move(0, -1)
    } else if (keyCode === DOWN_ARROW) {
      this.move(0, 1)
    } else if (keyCode === LEFT_ARROW) {
      this.move(-1, 0)
    } else if (keyCode === RIGHT_ARROW) {
      this.move(1, 0)
    }
  }
}