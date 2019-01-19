// Destructuring array
const myArray = [1,2,3,4,5];
const [x, y, z] = myArray;

console.log(x); // 1 (= console.log(myArray[0]))

const mySecondArray = ["Mary", "Anne", "Carl"];
let name1, name2, name3, name4;
[name1, name2, name3, name4] = mySecondArray;
console. log(name1, name2, name4); // Mary Anne undefined

// Assigning default values
[name1, name2, name3, name4 = "This is the default value"] = mySecondArray;
console. log(name1, name2, name4); // Mary Anne This is the default value

// Ignoring some values
[name1, , name2] = mySecondArray;
console.log(name1, name2) // Mary Carl

// Swapping variables
let a = 100;
let b = 250;
let c = 500;
console.log(a,b,c); // 100 250 500
[b,c] = [c,b];
console.log(a,b,c); // 100 500 250

// Using rest pattern
function sayHi(firstArg, ...restOfArgs){
 console.log(firstArg, restOfArgs);
}

sayHi("Chris", "123 Madison St"); // Chris 123 Madison St
sayHi("Chris", 30, "123 Madison St", 51, false) // Chris [30, "123 Madison St", 51, false]

const colorArray = ["white", "black", "yellow", "blue", "red"];
const [w,b,...restColors];
console.log(w,b,restColors); // white black ["yellow", "blue", "red"]