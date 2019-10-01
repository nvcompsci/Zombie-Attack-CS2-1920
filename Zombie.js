class Zombie extends Sprite {
   constructor() {
    super(width -10, height * Math.random(), "red")
     this.SPEED = 2
    this.vx = -this.SPEED
  }
  
  collect(item) {
    if ( item.active && checkCC(this.x, this.y, this.width, item.x, item.y, item.width) ) {
        item.die()
    }
  }
}
