export class Circle {
  constructor(radius: number) {
    this.radius = radius
  }

  area(): number {
    return Math.PI * this.radius * this.radius
  }
}

export class Rectangle {
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  area(): number {
    return this.width * this.height;
  }
}
