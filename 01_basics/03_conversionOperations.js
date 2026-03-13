let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//number
console.log(valueInNumber); //NaN
console.log(typeof null); //0
console.log(typeof false); //0


//"33" =>33
//"33abs" =>NaN
//true => 1; false=>0

let isLoggedIn =1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"hitesh" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log( typeof someNumber);
console.log( typeof stringNumber);
