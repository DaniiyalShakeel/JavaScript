const accountId = 1122334455
let accountEmail = "daniyalshakeel@gmail.com"
var accountPassword = "112233"
accountCity = "Multan"
let accountState;
// accountId = 1424512 // not allowed

accountEmail = "danirajput@gmail.com"
accountPassword = "2121211"
accountCity = "Lahore"

// Prefare not to use var because  of issue block scope and functional scope

console.log(accountId);
console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])