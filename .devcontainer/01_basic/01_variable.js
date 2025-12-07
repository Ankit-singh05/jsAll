const accountId = 1234
let accountEmail = "ankit@google.com"
var accountPassword = "12345678"
accountCity = "Noida"

// accountId = 2 // not allowed 

accountEmail = "v@google.com"
accountPassword = "123456789"
accountCity = "New Ashok Nagar"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and function scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity])