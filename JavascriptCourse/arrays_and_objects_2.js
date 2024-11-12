//1- arrays which is reference(mean mutable or can say changeable) type are also called objects ,first we have read the primitive types
// let fruits=["mango","grapes","apple"]
//let num=[1,2,4,5]
// let mixed=[1,2,"ali","sher"]
//let mixed=fruits+num
// num[1]="sher"
//console.log(typeof num)
//how to check that array is really array or another object so below line is telling
//console.log(Array.isArray(num)); 
//console.log(num)
//num.push(6);//push adds the value at the end,
//let retunnew=num.pop()//removes from last but also return that value which is removing
//console.log(returnnew)
//num.unshift(0)//it adds at the start 
//num.shift()//it remove from start,push and pop are fast as compared to these methods coz shift and unshift first have to shift the elements into the memory
//console.log(num);

//2-primitive vs reference data type
// let num1=6;
// let num2=num1;
// console.log(num1)
// console.log(num2)
// console.log("after incrementing the values")
// num1++;
// console.log(num1)
// console.log(num2)
// reference type
// let array1=["itme1","item2"]
// let array2=array1
// console.log("array1",array1)
// console.log("array2",array2)
// array1.push("item3")
// console.log("after pushging hte new item")
// console.log("array1", array1);
// console.log("array2", array2);
//how they store in the memory primitive vs reference
// in primitive ,in stack when we assign the value to the variables they get space in the stack but when we assign the value to the new variable original variable then they get seprate space in the stack so when we change in one variable it does not affect the other coz they are in sperate block in stack
//in reference, they get the same space/address in the heap ,so when we change in the one it changes automatically in the others also coz they are getting or at the same address/space mean there is same array on although they have separate pointers for that one array

//3-clone array using copy, spread operator,slice,concat and methods
//let array1=["item1","item2"]
//let array3=["item1","item2"]
//let array2=array1// also create/clone the array
//let array2=array1.slice(0).concat(["item3","item4"])// it also create/clone the new array,slice starts whcih we wil pass the index and goes to the end and we can add/concat new items in this array
//let array2=[].concat(array1,"item3","item4")//it is also clone/create the new array
//let array2=[...array1,"item3","item4",...array3]// it is widely used,we can also add new items in it
//console.log(array1===array2)

//4-const we can use if we have to store the values into the array without cloning it if we have to then use the let,but mostly we use hte const for arrays
//const fruits=["apple","grapes"]
//fruits.push("newfruit")
//fruits=[]//it shows the error

//5- for of loop(it iterate to the length of array but return values) and for in loop(it iterates till end but return indexes but if we want to get the values of each index then we )
// fruits=["apple","grapes"]
// for(let fruit of fruits){
//     console.log(fruit)
// }
// for (let index in fruits) {
//   //console.log(index);
//   console.log(fruits[index]);// if to get the values of each index
// }

//6-array destructuring--> to stroe the values of the array into the variables
//const fruits=["apples","grapes","new","nww"]
//let var1=fruits["apples"]
//let var2=fruits["grapes"]
//  OR
// here ...newfru
//let [var1,,var2,...newfruits]=fruits//var1.var2 are normal variables now,if we have to assign the desire values to the desire variable then just use the comma in the destructuring array

//console.log(var1,var2,newfruits)

//7-objects--> arrays are not sufficient for real world data so object is come here in the field
//const person={naem:"ali",age:22}
//console.log(person.naem)
//person.gender="male"
//person["gender"]="male"
//console.log(person.gender)
//person["naem"]//we can access the keys usign dot and [""] notation
// if we have the long words then we write the words in the "",also if we have the key="email"
//and we have to use that key in object as key then will be written as
// key="email"
// person[key]="alisher@mail.com"
// console.log(person)

//8-iteration the object
// for in loop
// Object.keys

// for(let key in person)
// {
//     //console.log(person[key]) or
//     console.log(`${key}:${person[key]}`)
// }

//console.log(Object.keys(person))
// for(let key of Object.keys(person)){
//     console.log(person[key])
// }

//9-computed properties
// const key1="k1"
// const key2="k2"

// const val1="v1"
// const val2="v2"

// const object={
// [key1]:val1,
// [key2]:val2
// }
// //OR
// const obj={}
// obj[key1]=val1
// obj[key2]=val2

//10-spread operator we can only apply on iterable like array,srings,objects
// const arra1=[2,3,5]
// const newarray=[...arra1]
// spread operator in objects case
// const obj={
//     key1:"val1",
//     key2:"val2"
// }
// const obj1={
//     key1:"val2",
//     key2:"val2"
// }

// const obj2={...obj,...obj1,newkey:'newval'}
//const str={..."abc"}// it will convert into integer index keys and abc values
//console.log(str)

//11- object destructuring
// const band={
//     key1:'val1',
//     key2:'val2'
// }
// const key3=band[key1]
// const key4=band[key2]
// console.log(key3,key4)
// //OR
// const {key1,key2}=band
// console.log(key1,key2)
// //OR
// const {key1:var1,key2:var2}=band //if we want to change the variable name like key1 to var1 then we can use the colon and  declare that variable 
// console.log(var1,var2)
// const{key1:var1,key2:var2,...restkeysvalues}=band

//12- object inside array
// const users=[
//     {userid:1,name:"ali",rollno:12},
//     {userid:2,name:"ali",rollno:12},
//     {userid:3,name:"ali",rollno:12},
// ]
// for(let user of users){

//     console.log(user.userid)
// }

//13-nested destructuring
// const users=[
//     {userid:1,name:"ali",rollno:12},
//     {userid:2,name:"ali",rollno:12},
//     {userid:3,name:"ali",rollno:12},
// ]
//const [user1,user2,user3]=users
// const [{name:user1name},,{rollno:user3rollno}]=users// if we have to destructure the objects inside the array mean we have to get the values of different objects
// console.log(user1name,user3rollno)