// const myDetails={
//     name:"sai",
//     roll:12
// }
// console.log(myDetails.name);
const tinderUser={}
tinderUser.name="sai"
tinderUser.id="123abc"
tinderUser.isLoggedin=false

// console.log(tinderUser)
// console.log(tinderUser.name)

const regularUser={
    email:"saipruthiraj@gmail.com",
    fullName:{
        userFullname:{
            Firstname:"sai",
            LastName:"Pruthiraj"
        }
    }

}
//console.log(regularUser.fullName.userFullname)
const obj1={
    1:"a",
    2:"b"

}
const obj2={3:"sai",4:"nayak"}
//obj3=Object.assign({},obj1,obj2)//assign method is used to combine objects
//the {} is not mandotory but it is help us to get a perticular result
//The first is target object and the rests are source object


//Now using spread method to combine objects
const obj3={...obj1,...obj2}
// console.log(obj3)


//object keys
console.log(Object.keys(tinderUser)[1])


//get the object values

console.log(Object.values(tinderUser))

//got the entries
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedin'))
