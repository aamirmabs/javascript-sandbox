// Prototypes
// ==========
// let arr = [1, 2, 3, 4, 5];

// ----------
// look at array properties and operations
// console.log(arr);
// console.log(arr.length);
// console.log(arr.includes(0));
// console.log(arr.includes(1));

// ----------
// how we push a value on the array
// console.log(arr);
// console.log(arr.push(0));
// console.log(arr);

// ----------
// a look at Array.prototype
// console.log(Array.prototype);

// ----------
// we can define new properties in the prototype
// there is no .half() function on an array
// arr.half();

// Array.prototype.half = function () {
//   console.log(this.map((value) => value / 2));
//   return this.map((value) => value / 2);
// };

// arr.half();
// [50, 30, 15, 9999990].half();

// ----------
// we can also redefine inbuilt properties of the prototype
// arr.push(100);

// Array.prototype.push = (value) => {
//   console.log(`No more!!! I'm tired.`);
// };

// console.log(arr);
// arr.push(1);
// console.log(arr);

// ----------
// ==========

// classes
// ==========
// demo class of a car
function Car(brand, model) {
  this.brand = brand;
  this.model = model || `default model`;
  this.year = 2000;
  // this.print = () => console.log(`Brand: ${this.brand} Model: ${this.model}`);
}

let car1 = new Car("toyota", `corolla`);
let car2 = new Car("ford");
const car3 = new Car(`audi`, `a6`);

// console.log(car1.brand);
// console.log(car2);
// console.log(car3);

// using .prototype to add properties and functions
Car.prototype.doors = 4;

console.log(car1);
console.log(car1.doors);
car1.doors = 2;
console.log(car1);
console.log(car1.doors);
// console.log(car2);
// console.log(car2.year);
// console.log(car3);
// ----------

// ----------
// inheritance with extends and super
class Animal {
  constructor(eyes, mouth, nose) {
    console.log(`in Animal constructor`);
    this.eyes = eyes;
    this.mouth = mouth;
    this.nose = nose;
    console.log(`variables assigned`);
  }
}

console.log(Animal.prototype);
let animal = new Animal();
Animal.prototype.printAnimal = function () {
  console.log(`I am an animal`);
  console.log(this.eyes);
};
console.log(Animal.prototype);
console.log(animal.printAnimal);
animal.printAnimal();
// ==========

// section
// ==========
// ----------
// ==========

// section
// ==========
// ----------
// ==========
