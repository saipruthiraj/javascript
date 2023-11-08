//array
const Myarr=[0,1,2,3,4,true,"sai"]
console.log(Myarr)

//Array in copy system make sallow copy
//Sallow copy of an object means a copy whose properties share the same refference
//Deep copy do not share the same refference
const myheros=new Array(1,2,2,4)
//array methods
Myarr.push(3)
console.log(Myarr)
Myarr.pop()
Myarr.unshift(0)
Myarr.shift()
//join convert array into string
const newArray=Myarr.join()
console.log(newArray)

//splice and slice
//Splice manupulate original array slice don't
//slice
const myArray=[0,1,2,3,4]
console.log(myArray.slice(1,3))

console.log(myArray)

console.log(myArray.splice(1,3))

console.log(myArray)

//Spread method in array

const sectionC=new Array("sai","Shiva","kanha","sipun")
const sectionB=["nira","jajat bhai","kirtti bhai"]
// sectionC.push(sectionB)
frienship=[...sectionB,...sectionC]
console.log(frienship)

//nested array
const anotherArray=[1,2,3,[4,5,[6,7]]]




