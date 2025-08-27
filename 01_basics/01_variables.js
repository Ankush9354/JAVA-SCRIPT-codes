const accountID=12345
let accountemail= "ankush@google.com"
var accountPassword="123456"
accountcity="delhi"
let accountstate
 
// accountID=2 not allowed
console.log(accountID);
/*
prefer not to use var
becuse of issue in functional scope and block scope

*/

 accountemail= "aayush@google.com"
 accountPassword="5879"
 accountcity="mumbai"

 console.table([accountemail,accountPassword,accountcity,accountID,accountstate])