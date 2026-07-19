// FUNCTIONS

// SYNTAX

// Function Declaration
// function function_name(){
  // Statements
// }
// Function Call / Invoke the function
// function_name()

// function sayHello(){
//   console.log('Hello Everyone From Function')
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();

// function squareNum(a){
//   return  a*a;
// }

// let result = squareNum(7);
// console.log(result)

// const squareNum = () => {}
  // const squareNum = a => a*a

  const calculateSI = (p,t,r) => {
    let si = p*t*r/100
    console.log(si)
  }

  calculateSI(1000, 2, 2); 
  calculateSI(10000, 2, 2);
  calculateSI(100000, 2, 20)