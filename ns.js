
// import using require
const Shape = require('./shape');
// declare class

class Circle extends Shape {
	constructor(color) {
		super(color);
	}  
	calculateArea() {}
}

// export class using module.exports
module.exports = Circle;

// declare class

class Shape {
  constructor(color) {
    this.color = color;
  }
  calculateArea() {}
  drawShape() {}
}

// Shape.color = '...' //! Static properties

module.exports = Shape;
// export class using module.exports
