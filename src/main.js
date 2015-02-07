import {TraversableSet} from './collections'
import {Circle, Rectangle} from './shapes'

let shapes = new TraversableSet(new Circle(2), new Rectangle(2,3))

shapes.forEach(s => console.log(`area: ${s.area()}`))

let totalArea = shapes.reduce(0, (acc, shape) => acc + shape.area())

console.log("total area:", totalArea)
