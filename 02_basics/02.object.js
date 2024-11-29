// singleton
// Object.create

// Object literals

const mysym =   Symbol("key1")

const JS = {
    name: "daniyal",
    "full name": ("daniyal", "Shakeel"),
    mysym: "key1",
    age: 18,
    location: "Multan",
    email: "daniyal@gmai.com",
    isLoggedIn: false,
    lastlogindays: ["Monday", "Sunday"]

}
// Object.freeze(JS)                                  Freeze All types of Elements
// JS.age = 17,
// JS.email = "daniyal@google.com"
// JS.name = "Shakeel"
// JS.location = "Lahore"
// console.log(JS);


// console.log(JS["name"]);
// console.log(JS["name",'age']);
// console.log(JS["name",'age', 'location']);
// console.log(JS["name",'age', 'location', 'email']);
// console.log(JS["name",'age', 'location', 'email', 'isLoggedIn']);
// console.log(JS["name",'age', 'location', 'email', 'isLoggedIn', 'lastlogindays']);



// console.log(JS);


// console.log(typeof JS.mysym);

JS.greeting = function(){
    console.log("Hello i m Daniyal");
}
JS.greetingtwo = function(){
    console.log('Hello i m Daniyal, ');
}
    JS.greetingthree = function(){
        console.log('this is daniyal, ${this.name}'
        )
        
    }

// console.log(JS.greeting());
console.log(JS.greetingthree());