//1-methods-->function inside oject,this/window opertor is the window object 
// const person={name:"ali",age:12,about:function(){console.log(this.name)}}
// person.about()

// function func(){console.log( `person name is ${this.name} and age is ${this.age}`)}
// const p1={name:"ali",age:12,about:func}
// p1.about()

//call(it takes the value of this with whom it will be used)/bind-->are the methods in javascript

//function about(para1,para2){console.log(this.age,this.name,para1)}
//const p={name:"ali",age:12}
//p.about()
//
//const p1 = {
//  name: "ali",
//  age: 12,
//  
//};
//p.about.call(p1,"new para");//here this of p will now point to the p1 object .

//apply is similar to call--> the parameters in call we were passing separately but thorugh this mthod we can pass array of the list
//p.about.apply(p1, "new para",["item1","item2"]);

//bind-->it actually returns the function that we can call in future
// const func=p.about.call(p1, "new para");
// func()

//dont do this mistake
//if we simple store the address of the members then this not bind but if we call then this will bind
//const p={age:12,about:function(){console.log(this.age,)}}
//const func=p.about//here we simple storing the address not calling so this will not bind
//const func=p.about.bind(p)//here we simple storing the address not calling so this will  bind using bind method
//const func1=p.about()//here we simple calling so now this will work

//2- arrow functions for objects have different behaviour coz they use this from upper level which is window ojbect not object
// const p={age:12,name:"ali",about:()=>{console.log(this.name)}}
// p.about.call(p)
//short cut to write the method in objects
// const p={age:12,name:"ali",about(){console.log(this.name)}}
// p.about.call(p)

//3-function to create the multiple ojbects
//3.1.store methods in different object--below functin is working fine but issue is that tow methods is18 and about are creating at every user coz they have same functionalities
//so i want that they should created only once so to remove thsi issue i will parse into swparate object and their reference i will use to create only once
// const p={about:function(){return `age ${this.age} and name ${this.name}`},is18:function(){return this.age>=18;}}
// function createobjects(name,age,email){
//     const user={}
//     user.name = name,
//     user.age = age,
//     user.email = email,
//     user.about=p.about,
//     user.is18=p.is18
//     user.newfunction=p.newfunction
//     return user
// }
// const user1=createobjects("ali",12,"alisher@gmail.com")
// console.log(user1)
// const is18=user1.is18()
// console.log(is18)
// const about=user1.about()
// console.log(about)

//4-solution using object.create to create new object or proto/reference or chain of proto of the other object
    //const obj1={name :"ali",age :12}
    //const obj2=Object.create(obj1)//it actually carry prototype mean reference of the other object,mean it setting the proto of the obj1
    //console.log(obj2 )// it actually will go to the first obj2 then obj1 if value not found, so now the bove code is like

// const p={about:function(){return `age ${this.age} and name ${this.name}`},is18:function(){return this.age>=18;}}
// function createobjects(name,age,email){
//     const user=Object.create(p)//creating the chain of the proto/objects
//     user.name = name,
//     user.age = age,
//     user.email = email,
//     user.about=p.about,
//     user.is18=p.is18
//     user.newfunction=p.newfunction
//     return user
// }
// const user1=createobjects("ali",12,"alisher@gmail.com")
// console.log(user1)
// const is18=user1.is18()
// console.log(is18)
// const about=user1.about()
// console.log(about)

//5-prototype-->function gives us a space which we can say object or prototype,only function provides prototype property

// function hello(){console.log("hello ")}
// //hello.name//-->gives us name of function ,similary we can do apply,bind,call mthods
// if(hello.prototype){console.log("prototype is present")}
// //we can add the properties using prototype
// hello.prototype.kchb="kchb"
// hello.prototype.xyz="xyz"
// hello.prototype.func=function(){console.log("new functin can also be added")}
// console.log(hello.prototype)

//6-creating the connection for proto and prototype
// function createobjects(name,age,email){
//     const user=Object.create(createobjects.prototype)//creating the chain of the proto/objects
//     user.name = name,
//     user.age = age,
//     user.email = email
//     return user
// }
// createobjects.prototype.about=function (){return `age ${this.age} and name ${this.name}`}
// createobjects.prototype.is18=function(){return this.age>=18;}
// const user1=createobjects("ali",12,"alisher@gmail.com")
// console.log(user1.about())

//7- new keyword-->it does three task ,1- creates new empty object,2-return this mean empty object,3-this keyword create the chain using prototype ,so here no need to create the object.create(obj1) coz this thing is doing the this keyword
// function Createobjects(name,age,email){//this is also called constructor function and if in future we have to create using new then we write the functin with capital letter
//     this.name = name,
//     this.age = age,
//     this.email = email
//     return this
// }
// const user2 = new Createobjects("ali", 12, "alisher@gmail.com");
// console.log(user2)

//8- hasownproperty --> when we dont have to use the prototype properties then this is used
//for(let key in user2){user2.hasownproperty(key)}

//9-More about prototypes,since prototypes are only fucntions have then how array here can have prototypes coz array is created using array method
// let numbers=[1,2,3]//array are also object in javascript but they are changed from object prototype
// console.log(numbers)
// let numbers1=new Array(1,2,3)
// console.log(Object.getPrototypeOf(numbers1))
// numbers1.push(5)
// console.log(Array.prototype)
// console.log(numbers1)

//10-classes in javascript-->the task that we will do through class internally its working lke above code
// class Createobjects{
//     constructor(name,age,email){console.log("constructor is called"); this.name,this.age,this.email}
//     about(){return `age ${this.age} and name ${this.name}`}
//     is18(){return this.age >= 18;}
// }

// const user1=new Createobjects("ali",12,"alisher@gmail.com")
// console.log(user1.about())

//11- extends and super keyword
// class Animal{
//     constructor(name,age){this.name=name,this.age=age}

// }
// class dog extends Animal{
//    constructor(name,age,speed)
//    {
//     super(name,age);
//     this.speed=speed
//    }
//    run(){return `tommy is running at ${this.speed}`}
// }
// const tommy=new dog("tommy",2,34)
// console.log(tommy.run())

//12-getters when we have to call the fucntion without paranthesis/as a property then with fucntion definition we have to write the get  and setters(split the string in list )
// class Person{
//     constructor(name,age){this.name=name,this.age=age}
//     get fullname(){return `${this.name} and age is ${this.age}`}
//     set fullname(fulname){
//         const[fname,lname]=fullname.split(" ")//it works as list and split the string and split where it will get the space
//         this.fname=fname;
//         this.lname=lname;
//     }
// }
// const person1=new Person("ali",12)
// console.log(person1.setname("ali","sher"))
// person1.fname="ali"
// person1.lname="sher"
// console.log(person1.fullname)
// console.log(person1.fname)
// console.log(person1.lname)
// console.log(person1.fullname)
// person1.fullname="ali sher"

//13-static methods
class Person{
    constructor(name,age){this.name=name,this.age=age}
    get fullname(){return `${this.name} and age is ${this.age}`}
    set fullname(fulname){
        const[fname,lname]=fullname.split(" ")//it works as list and split the string and split where it will get the space
        this.fname=fname;
        this.lname=lname;
    }

    static classinfo(){return `this is the class method`}
    static desc="this si the class property"
}
const person1=new Person("ali",12)
const staticmethod=Person.classinfo()
console.log(staticmethod)
console.log(Person.desc)