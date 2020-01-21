// function sum() {
//   // let sum = 0;
//   return Array.from(arguments).reduce((acc, num) => acc + num );
// }

// console.log(sum(1, 2, 3, 4) === 10);

// function sum2(...args) {
//   return args.reduce((acc, num) => acc + num);
// }
// console.log(sum2(1, 2, 3, 4) === 10);

// // Function.prototype.myBind = function() {
// //   const that = this;
// //   debugger;
// //   const args = Array.from(arguments);
// //   return function() {
// //     return that.apply(args[0], args.slice(1).concat(arguments));
// //   }
// // }

// // Function.prototype.myBind = function(...bindargs) {
// //   const that = this;
// //   return function(...callargs) {
// //     return that.apply(bindargs[0], bindargs.slice(1).concat(callargs));
// //   };
// // }

// Function.prototype.myBind = function (...bindargs) {

//   return (...callargs) => {
//     return this.apply(bindargs[0], bindargs.slice(1).concat(callargs));
//   };
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true


function curriedSum(numArgs) {
  const numbers = [];

  return function _curriedSum(num) {
    debugger;
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, num) => acc + num );
    }
    return _curriedSum;
  }
}

// const sum = curriedSum(3)
// debugger;
// sum(1)
// sum(2)

// Function.prototype.curry = function(numArgs) {
//   const that = this;
//   const args = [];
//   return function(arg) {
//     args.push(arg);
//     if  (args.length === numArgs) {
//       return that.apply(that, args);
//     } else {
//       return this;
//     }
//   }
// }

// Element.method.aplly(element, [arr])
Function.prototype.curry = function (numArgs) {
  const that = this;
  const args = [];
  return function _enterArgs(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _enterArgs;
    }
  }
}
  

// Function.prototype.curry = function (numArgs, ...args) {
//   if (args.length >= numArgs) {
//     return this.curry(this,args);
//   } else {
//     return this;
//   }
// }