// let mass = "kg";

// let height = "m";

// let BMI = "Body Mass Index"; // BMI = kg/m2
// BMI = mass / height ** 2;

// MEASUREMENTS
console.log("MEASUREMENTS");

let meter = "m";
console.log(meter);

let kilograms = "kg";
console.log(kilograms);

// DATA 1 //
console.log("DATA 1");

// Mark

let mark_weight = 78;
console.log(mark_weight + " " + kilograms);

let mark_height = 1.69;
console.log(mark_height + " " + meter);

// Mark's BMI

let mark_BMI = mark_weight / mark_height ** 2;
console.log("Mark's BMI ---->", mark_BMI);

// John

let john_weight = 92;
console.log(john_weight + " " + kilograms);

let john_height = 1.95;
console.log(john_height + " " + meter);

// John's BMI

let john_BMI = john_weight / john_height ** 2;
console.log("John's BMI ---->", john_BMI);

/////////////////////////////////////////////////////

// DATA 2 //
console.log("DATA 2");

// Mark

console.log("Mark");

let mark_weight_2 = 95;
console.log(mark_weight_2 + " " + kilograms);

let mark_height_2 = 1.88;
console.log(mark_height_2 + " " + meter);

// Mark's BMI

console.log();

let mark_BMI_2 = mark_weight_2 / mark_height_2 ** 2;
console.log("Mark's BMI ---->", mark_BMI_2);

// John

console.log("John");

let john_weight_2 = 85;
console.log(john_weight_2 + " " + kilograms);

let john_height_2 = 1.76;
console.log(john_height_2 + " " + meter);

// John's BMI

let john_BMI_2 = john_weight_2 / john_height_2 ** 2;
console.log("John's BMI ---->", john_BMI_2);

// COMPARISION

let markHigherBMI = mark_BMI > john_BMI;
let markHigherBMI_2 = mark_BMI_2 > john_BMI_2;
console.log("Data 1, Mark has a hight BMI than John ----->", markHigherBMI);
console.log("Data 2, Mark has a hight BMI than John ----->", markHigherBMI_2);
