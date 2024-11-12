//1-function declaration,return mean where we call/invoke function there we will receive that value which we are returning.
// function addeven(a){
    
//    return a % 2 ? "odd" : "even";
// }

// let c=addeven(4)
// console.log(c)

//2-function expresssion/anonymous functions who has no name but can be stored in the variables
//let func=function(array,target){console.log("hello world")}
// const func=function(){console.log("this is the function expression");}
// console.log(func())

//3-arrrow functions--> when there is arrow just understand it is arrow function either there is parmeter or not
//const arr=()=>{console.log("this is the arrow fucntion")}
//const newarr=(a,b,c)=>{console.log(`${a},${b},${c}`)}
//console.log(newarr)
//const arr=number=>{console.log("if one parameter is then this fucntion can be used ")}
//console.log(arr)
//const newarr=()=>{console.log("this ()can be written when there is zero parameter")}
//console.log(newarr)

//4- hoisting can be done only in declaration not in expression and arrow either with var(it will print undefined but with rest it will show error),let and const
//hello();
//function hello(){console.log("this is the hoisting function mean call it before define ")}

//5-function inside function,if there is variable/function inside the lexical scope/environment where that variable is declared if not then it will check its parent ,if also not there then it will check its grand parent
// const app=()=>{
//     const myvar="ali"
//     const myfunc=()=>{console.log("function inside function,lexical scope/environment",myvar)}
//     console.log(myfunc())
// }
// app()

//6- block vs fucntion scope ,var is fucntion and let,const are block scope
// {let name="ali"}
// console.log(name)
// {const name="ali"}
// console.log(name)

//7-default parameters,rest parameters
//const a=(b=3)=>{b+1}//default parameters
//console.log(a(2))
//function myfunc(a,...b){console.log(a,b)}//a will take value and rest will come into the b
//console.log(myfunc(2,3,5,6))

//8- parameters destructuring
// const person={name:"ali",age:12}
// const p=({name,age})=>{console.log(name,age)}
// console.log(p(person))

//9-call back function--> mean passing function as a pramater to the other function
// function myfunc(func){console.log(func)}
// function mynewfunc(){console.log("call back fucntion")}
// myfunc(mynewfunc())

//10-function returning functin
function returingfunctin(){
    let func=()=>{console.log("functin retruning function")}
    return func
}

console.log(returingfunctin())
//11- higher order fucntion mean in which function takes function as a parameter and return function this is called higer order fucntion