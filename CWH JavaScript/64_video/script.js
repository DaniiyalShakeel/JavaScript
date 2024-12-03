/*Create a bussiness name generator by combining list of adjest


Adjectives:
crazy
Amazing
FileReader


Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited 
hub
*/

Rand = Math.random()
let first, second, third;

if(Rand<0.33){
    first = "crazy"
}

else if(Rand<0.66 && Rand>=0.33){
    first = "Engine"
}

else{
    first = "Bros"
}

Rand = Math.random()
if(Rand<0.33){
    second = "Amazing"
}

else if(Rand<0.66 && Rand>=0.33){
    second = "Foods"
}

else{
    second = "Limited"
}

Rand = Math.random()
if(Rand<0.33){
    third = "FileReader"
}

else if(Rand<0.66 && Rand>=0.33){
    third = "Garments"
}

else{
    third = "hub"
}
console.log(Rand);

console.log(`${first} ${second} ${third}`);


