//1-when function return another functin then the returned fucntion will returned along with the local variables which are present in local memory
//when function reurn a functin then that function return along with the local variables which are present in the local memory ,this is called closures
// function outerfunction(){
//     function inerfunction(fname,lname){console.log(fname,lname)}
//     return inerfunction
// }
// const ans=outerfunction("ali","sher")
// console.log(ans)

// function hello(x){
//     const a="ali"
//     const b="sher"
//     return function(){
//         console.log(a,b,x)
//     }
// }
// const ans=hello("args")
// ans()
const myfunc=power=>number=>number**power //it is the smae as above the function