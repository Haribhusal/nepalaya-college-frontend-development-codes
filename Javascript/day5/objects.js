

let car = {
  color: "red",
  cc: 1000,
  model: '200KV',
  brand: "suzuki",
  start: function(){
    console.log('BROOOM, BROOM')
  }
}
// console.log(car.brand) // Dot Notation
// console.log(car['model']) // bracket notation
// car.start();

car.color = "Blue";
console.log(car.color)