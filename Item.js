class Item extends Sprite {
  constructor(n, e) {
    super(Math.random() * width, Math.random() * height, "blue")
    this.width = 15
    this.height = 15
    this.name = n
    this.effect = e
  }
}