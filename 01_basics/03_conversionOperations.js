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

//******************Operations******** ***//

let value =3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);

let str1 = " Samrudhi";
let str2 = "Hello";

let str3 = str2+str1;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2); //122
console.log(2+2+"1"); //41

console.log(((3+4)*5)%3);

console.log(+true); //1
//console.log(true+); //error
console.log(true+1); //2

let num1, num2, num3;
num1=num2 = num3 = 2+2;

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment