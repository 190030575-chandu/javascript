class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set dimensions(dimensions) {
    [this.width, this.height] = dimensions;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area);  

rect.dimensions = [4, 6];
console.log(rect.area); 
