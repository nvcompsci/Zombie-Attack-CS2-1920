class Sprite {
  constructor(x, y, c) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.color = c
  }
  draw() {
    fill(this.color)
    ellipse(this.x, this.y, this.width, this.height)
  }
  move() {
    this.x++
    this.y++
  }
}