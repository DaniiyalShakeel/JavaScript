// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }

// // console.log(
// //  calculateCartPrice(200,400,500,2000));

//  const user = {
//     username: "dani",
//     price: 188
// }

// function handleObject(newObject) {
//     console.log(`username is ${newObject.username} and price is ${newObject.price}`);

// }


//  handleObject(user);

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(45,45,12,512));


const user ={
    username: "daniyal"
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject (user)