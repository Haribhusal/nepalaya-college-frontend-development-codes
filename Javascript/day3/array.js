

let colors = ["Red", "Green", "Blue", "Ram", 5, true, {}, "Orange"];

// let firstItem = colors[0]
// console.log(firstItem)
// let lastItem = colors[-1];
// console.log(lastItem)
// console.log(colors.length)
let lastItem = colors[colors.length-1];

console.log("Original", lastItem)

colors[colors.length -1] = "Purple";

let lastItemUpdated = colors[colors.length-1];
console.log("After Updated", lastItemUpdated);


// Understand and Implement the Array Methods