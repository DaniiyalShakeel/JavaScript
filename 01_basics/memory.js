 
// Stack (Premitive), 

let myYoutubename =   "daniiyalshakeel"
let anothername =   myYoutubename
let anothername2 = anothername
let anothername3 = anothername2
let anothername4 = anothername3
anothername4 = "daniyalshakeel705"

// console.log(anothername4);
// console.log(myYoutubename);

// Heap (Non Premitive)

let userOne = {
    email:  "userone@gmail.com",
    id:  "userone"
}

let userTwo = userOne
userTwo.email = "userthree@gmail.com"
userTwo.id = "sdfaf"

console.log(userTwo);
console.log(userOne);
