class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("Abstract class");
        }
        this.name = name;
    }
    getArea() {
    return 0;
    }
    getPerimeter() {
    return 0;
    }
    toString() {
    return `Area of ${this.name}: ${this.getArea()}\nPerimeter of ${this.name}: ${this.getPerimeter()}`;
    }
}
class Square extends Shape {
    constructor(w, name = "Square") {
        super(name);
        this.width = w;
    }
    getArea() {
    return this.width * this.width;
    }
    getPerimeter() {
    return 4 * this.width;
    }
}
class Rectangle extends Square {
    constructor(w ,h) {
        super(w, "Rectangle");
        this.height = h;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle extends Shape {
    constructor(r) {
    super("Circle");
    this.radius = r;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `Area of ${this.name}: ${this.getArea()}\nPerimeter of ${this.name}: ${this.getPerimeter()}\nRadius: ${this.radius}`;
    }
}
export { Shape, Square, Rectangle, Circle };
