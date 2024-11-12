//history of javascript:
/*
Javascript Course:
History:1995,NETSCAPE NAVIGATOR BORWSER,BRENDAN EICH,CREATED JS IN 10 DAYS,NAMED MOCHA,LIVESCRIPT THEN JAVACRIPT DUE TO JAVA POPULARITY BUT LIVESCRPT AND JAVASCRIPT ARE DIFFERENT,THEN INTERNET EXPLORER MADE JSCRIPT DUE  TO THE POPULARITY OF NETSCAPE ,SO IN 1996 THERE WERE TWO LANGUAGES JAVASCRIPT AND JSCRIPT BUT THE ISSUE WAS THAT IF WE WRITE IN ONE LANGUAGE IT SHOW WEBISTE BEST ONLY CORRESPONDING BROWSER AND ALSO BUDGET ISSUE FOR TWO DIFFERENT LANGUAGES,THEN THEY GO TO ECMA WHICH IS NITERNATIONAL ORGANIZATION THEN THEY STANDARIZE THE FEATURES FOR EVERY BROWSER THAT THEY SHOULD IMPLEMENT THOSE FEATURES DOCUMENTATION OR SCRIPT  SO IT IS CALLED ECMASCRIPT2. IN  1997 ES1  CAME THIS EMPHASIZE THAT EACH BROWSER WILL USE THE SAME PROGRAMING ,THEN ES2,ES3,ES4,ES5 IN 2009 IT CAME WITH LOT OF NEW FEATURES AND GETS POPULARTY AMONG THE DEVELOPERS.IN 2015: ES6 CAME WITH BIGGEST UPDATE ,THIS IS ALSO CALED MODERN JAVASCRIPT, THERE IS ALSO A TC 39 MEAN TECHNIAL COMMINTIY IN ECMA WHICH DECIDE WHAT FEATURES WILL COME OR NOT IN JAVASCRIPT EVERY YEAR ,THAT’S WHY WE CAN SAY IT SAME AS  ES6:ES2015,ES7: ES2016,ES8: ES2017,
 FOUR STAGES HAVE TO PASS FOR NEW FEATURES IF IT HAS TO BE LAUCNHED IN JAVASCRIPT
IT IS BACKWARD COMPATIBLE MEAN THE FEATURES IN 1990 WERE ,ALSO WILL BE IN PRESENT,
BUT IT IS NOT FORWARD COMPATIBLE MEAN IT IS NOT RUN  IN OLD BROWSER OR OUTUPDATED.
BABEL IS JAVASCRIPT COMPILER TO CONVERT THE NEW FEATURE INTO OLD BROWSER
1-clg to print the vlues on the browser
2-variables declaration using var we can change the values but since it is case sensitive so we have to care a lot using var type but if we want to use strict mode then “use strict” this can be used in the program to avoid mistakes.to use separately each case sensitive variables then use strict mode is implemented. 
3- variables rules: we cant start with numbers ,we  can perform arithmetric operation with variables using numbers. With _ and bwt _ we can use variables. We can also use the variables using $ in start or ending of the variables.you cant use the space.start with small letters and camelCase.
4-var, let and const: in var we can change the variable name and also values but in let we cant change the variable name but values can be changed. Const that values cant be changed but arithmetric operation can be performed.
5-string: indexing: to acces the lettr name[index],trim() which return new  string by removing the extra spaces since strings are immutable mean they cant be changed. Slice() it takes start and end index and then return the string according to indexes given.
6-typeof operator: string ,int ,Boolean,undefined,null,bigint these are data types.typeof tells  the type of the .
Data conversion: we can change the number into string using + operator as num+string

*/

//1- console.log("hello world")

//2-variables declaration
"use strict"
// var firstname="ali"
// console.log(firstname)
// firstname="sher"
// console.log(firstname)
// firstName="ali"
// console.log(firstName)

//3-variables rules
// var val1=3
// console.log(val1*2)
// var _val2=4
// console.log(_val2)
// var val_val=5
// console.log(val_val)
// var $val=5
// console.log($val)
// var val$=7
// console.log(val$)

//4-var,let and const
// var firstname="ali"
// console.log(firstname)
// firstName="sher"
//console.log(firstName)
// let firstname="ali"
// console.log(firstname)
// firstname="sher"
// console.log(firstname)
// const pi=3.1456
// console.log(pi)


//5-string 
 //let firstName="alisher"
 //console.log(firstName[3])
 //length of string
 //console.log(firstName.length)
 //string methods-->trim,touppercase,tolowercase
 //let newstring="alisher"
 //newstring.trim()// it actually returns the new string by removing the extra spaces 
 //console.log(newstring)
 //newstring="alisher"
 //newstring=newstring.slice(3,5)
 //console.log(newstring)


 //6- typeof operator and data conversion
//  let num=22 //--> number to string
//  console.log(typeof(num+""))
// let num=+"22"// string to number
// console.log(typeof(num))
// let age=22 // through this can also convert
// age=String(age)
// console.log(typeof(age))
// var str1="ali" concatenation of the strings
// var str2="sher"
// var newstr=str1+str2
// console.log(newstr)
// let str1="1"
// let str2="5"
// var newstring=+str1 + +str2 concatenation of the numbers
// console.log(newstring)
// let age=22;
// let firstName="ali"
// //let aboutme="my name is " +firstName +"and my age is "+age;
// let aboutme= `my name is ${firstName} and my age is ${age}`//this si template string
// console.log(aboutme)


//7-undefined when we jsut declare the variable with let and var but wth const cant do
//let firstName;
//var firstName;
// let firstName;
// firstName="ali"
// console.log(firstName,typeof firstName)

//8-null mean nothing,but we can chagne the values of the null and null has object typ;e
// let firstName=null;
// firstName="ali"
// console.log(firstName,typeof null)

//9-bigint or 123n here n is also bigint,when we have to store the large number in the variable
// let mynumber=BigInt(123);
// let mynumber2=123n;
// console.log(mynumber2)

//10-boolean(true,false) and comparison operators,! operator
// let num1=1;
// let num2=2;
// num1>num2;
// console.log(num1==num2)//it only checks the values
// console.log(num1===num2)//it checks both values and types

//11-falsy(false,"",null,undefined)these are falsy rest are  truthy valeus
// let name="";
// if (name){
//     console.log(name)
// }

//12-ternary operator ? /ifelse condition and nested ifelse
// let age=5;
// let drink=age>=5?"coffe":"milk"
// console.log(drink)

//13-and or operator
//let firstName="ali";
//let age=10;
//firstName=firstName[0]=='a' && age>=10 ?"good":"not" and operator
//firstName=firstName[0]=='a' || age>=10 ?"good":"not" or operator
//console.log(firstName)

//14- prompt values 
// let num=12;
// let guess=+prompt("guess number")
// let pr=num===guess?"number is right":"not right"
// console.log(pr,typeof pr)

//15-switch statement
// let day=0;
// switch (day) {
//     case 0:
//         console.log("sunday")
//         break;
//     case 1:
//         console.log("monday")
//         break
//     default:
//         console.log("saturday")
//         break;
// }

//16-for loop,while loop,do while loop,break,continue when to use the pices of code again
// let i=0;
// while (i<5) {
//     let total=0;
//     total=total+i;
//     i++;
//     console.log(i)
// }
//another way to write the loop
// let num=5;
// let total=(num*(num+1))/2
// console.log(total)