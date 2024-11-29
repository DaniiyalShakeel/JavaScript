
// const tinderuser = new Object();
const tinderuser = {}

tinderuser.id = "112233"
tinderuser.name = "daniyal"
tinderuser.email = "daniyal@gmail.com"
tinderuser.IsLoggedIn = "false"


// console.log(tinderuser);

const regularname = {
    email: "daniyal@gmail.com",
    fullname: {
        firstName: "daniyal",
        lastname: "shakeel"
    } 
}

// console.log(regularname. fullname.lastname);

const obj1 = {1: "daniyal", 2: "shakeel"}
const obj2 = {3: "daniyal", 4: "shakeel"}
const obj3 = {5: "daniyal", 6:"shakeel"}
const obj4 = {7: "daniyal", 8: "shakeel"}


const obj5 = Object.assign({},obj1,obj2,obj3,obj4)
// const obj5 = {...obj1,...obj2,...obj3,...obj4};
// console.log(obj5);


const users = [
    {
    id: 11223344,
    email: "daniyal@gmail.com",
    username: "daniyal",
    password: "1122"
},
{
    id: 11223344,
    email: "daniyal@gmail.com",
    username: "daniyal",
    password: "1122"
},
{
    id: 11223344,
    email: "daniyal@gmail.com",
    username: "daniyal",
    password: "1122"
},
{
    id: 11223344,
    email: "daniyal@gmail.com",
    username: "daniyal",
    password: "1122"
},
{
    id: 11223344,
    email: "daniyal@gmail.com",
    username: "daniyal",
    password: "1122"
},
{
    id: 11223344,
    email: "daniyal@gmail.com",
    username: "daniyal",
    password: "1122"
}
]

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty("IsLoggedIn"));
// console.log(tinderuser.hasOwnProperty("IsLogged"));


// console.log(users.id);

const course = {
    coursename: "java",
    courseteacher: "daniyal",
    price: 999
}

// course.courseteacher

const {courseteacher: teacher} = course

console.log(teacher);
