const accountId = 144553;
let accountEmail = "sam@gamil.com";
var accountPassword = "12345";
accountCity = "Kolhapur";
let accountState;

// accountId= 2;//Not allowed
accountEmail = "samrudhi@gmail.com";
accountPassword = "sam@123";
accountCity = "Sangli";
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefered not to use var because of issue in block and functional scope
*/