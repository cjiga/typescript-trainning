import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

// declare an array of shapes .. initially empty
let shapes: Shape[] = [];

shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for (const shape of shapes) {
  console.log(shape.getInfo());
}
