 
let random = Math.random()
let a = prompt("Enter your first number")
let c = prompt("Enter your operation") 
let b = prompt("Enter your second number")


let obj = {
    "+": "-",
    "-": "+",
    "*": "+",
    "/": "**",
}

if (random > 1){
    // Perform correct Calculation
    console.log;(`The result is ('${a} ${c} ${b}')`)
    // alert(`The result is ${eval('${a} ${c} ${b}')}`)
}

else {
    // Perform wrong Calculation
    c = obj[c]
    alert(`The result is ${eval('${a} ${c} ${b}')}`)
    
}