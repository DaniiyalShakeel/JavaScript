// Array

const myArr = [1, 2, 3, 4, 5, 6, 7, 8] 


const Shops = ["Rehman", "Musa", "Usama"]


const myArray2 = new Array (1, 2,3,4,5,6,7,8,9)


// console.log(myArray[5]);

// Array Method

// myArr.push(10)
// myArr.push(5)
// myArr.push(4)

myArr.shift()
// console.log(myArr.includes(9));


// ***************************************Array*********************************

const Marvel_heros = ["thor", "ironman", "spidarman" ]
const Disney1_heros = ["superman", "flash", "batman" ]
const Disney2_heros = ["daniyal", "zeeshan", "shaheer" ]

// Marvel_heros.push (Disney_heros);


// Marvel_heros.includes (Disney_heros);
// Marvel_heros.push (Disney_heros);

// console.log(Marvel_heros[3][1][2]);

// const allheros = Marvel_heros.concat(Disney_heros[0][5]);
const newheros = [...Marvel_heros, ...Disney2_heros]
// console.log(newheros); 



const another_array = [1,2,3,4,5,6,7,8,9,[4,5],9,8,[10,11,12],]
const theanother_array = another_array.flat(Infinity);

// console.log(theanother_array);

console.log(Array.isArray("daniyal"))
console.log(Array.from("daniyal"))
// console.log(Array.from({name: "daniyal"}))  interesting

let score = 100
let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score, score1, score2, score3));

