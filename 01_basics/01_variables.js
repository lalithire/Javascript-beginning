const accountId = 3041
let accountEmail = "lalithireofficial1@gmail.com"
var accountPassword = "12345"
accountCity = "jalgaon"
let accountState;

// accountId = 2 // not allowed because it is a constant and value assigned to the constant never changes


accountEmail = "lalithire4603@gmail.com"
accountPassword = "30041"
accountCity = "bhadgaon"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])