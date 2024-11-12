/*

promise,XHR, fetch,async await:
promises are the actual replacement of callback hell.
promise is also a object coz it has status and status value as {status,vlaue},its  a future value,initially we see the status either it is pending or fullfilled,if promise is fulfill then value will resolve otherwise value will be rejected we can also resolve value by using then method and catch method for rejected,
 then always return promise that's why we can create chain by using then always return promise from then otherwise it will call itself and it's chain promise both simultaneously we can also remove curly braces from call back function and now no need to write the return,
 we can also return promise from function,it is fall in microtask queue ,we have two queues callbck and micro queue since micro has more priority so things in it will execute first, promise is a object , promise is consumed by the browser.

2-Request,3ways to request the server xmlhttpreqesust,fetch=>
ye b promise return krta h aur es m b hm promise ki trh chaining kr skty hn es me catch value ni leta until then me error throw krvaay ya network error jb tk na aay ye usually URL leta h but hm agr request post krni hu tu wo b es me kr skty hn by using curly braces aur phr us me jo b data huga pass kr dy gy aur ye promise ko .then kr k consume kiya ja raha h ,
async wait ye b jb use krty hn ek promise he return krta h aur phr es me b hm fetch wgra k saath await use kr k jis function me es ko bnaaya huga usko call kr k us k saath chaining wgra kr skty hn aur ye tb hm use krty hn jb hmy data ko fetch ya load krna hu aur agr arrow function use kry gy tu us me paranthsis se pehly phr async lagy ga aur normal function me pehly lagay ga aur ye broser k backend m run huga
Promise: Represents a future value, and can be resolved or rejected.
XHR: Old way of making HTTP requests, more complex to use.
Fetch API: Modern way of making HTTP requests, returns a Promise.
Async/Await: Syntactic sugar over Promises, making code more readable and easier to write.
*/
//2-creating promise
const myPromise = new Promise((resolve, reject) => {//it taking here executable function which furthere takes two functions resolve and reject on which behlaf values are rejected or resolved
  let condition = true;
  if (condition) {
    resolve("Promise is fulfilled!");// here any values can be passsed objects,string etc.
  } else {
    reject("Promise is rejected!");
  }
});
//we can also creat the promise using timeout
const myPromise2 = new Promise((resolve, reject) => {
  //it taking here executable function which furthere takes two functions resolve and reject on which behlaf values are rejected or resolved
  let condition = true;
  setTimeout(()=>{
      if (condition) {
    resolve("Promise is fulfilled!"); // here any values can be passsed objects,string etc. or it can also empty
  } else {
    reject("Promise is rejected!");
  }
  },2000)

});
// consuming the promise by browser
myPromise
  .then((value) => {
    console.log(value); // "Promise is fulfilled!"
  })
  .catch((error) => {
    console.error(error); // "Promise is rejected!"
  });

//const myPromise=new Promise.resolve(5)//it can smple return the value and then that value can be used.
//myPromise.then(value=>{console.log(value)})
//Promise.resolve(5).then(value=>{console.log(value)})//above two lines can be writtten as 
  
//3-chaining promises, since then always return promise whatever value will be returned in then that will be actual our promise, so we can creat the chaining
  const myPromise1 = new Promise((resolve, reject) => {
    resolve(10);
  });

  myPromise1
    .then((value) => {
      console.log(value); // 10
      return value * 2;
    })
    .then((value) => {
      console.log(value); // 20
      return value * 2;//promise.resolve(value) as actually happenign here
    })
    .then((value) => {
      console.log(value); // 40
    })
    .catch((error) => {
      console.error(error);
    });

    function changetext(element,text,color,time){
      return Promise((resolve, reject) => {
        //it taking here executable function which furthere takes two functions resolve and reject on which behlaf values are rejected or resolved
        setTimeout(() => {
          if (element) {
            element.textContent=text;
            element.style.color=color;
            resolve() // here any values can be passsed objects,string etc.
          } else {
            reject();
          }
        }, time);
      });
    }
    changetext(title, "one", green, 2000)
      .then(() => {
        return changetext(title, "two", green, 2000);
      })
      .then(() => {
        return changetext(title, "three", green, 2000);
      })
      .then(() => {
        return;//here it will return undefined
      });

//above code can alsor be written as 
        changetext(title, "one", green, 2000)
        .then(() => {changetext(title, "two", green, 2000)})
        .then(() => {changetext(title, "three", green, 2000)})
        .then(() => {changetext(title, "four", green, 2000)})
        .catch((error)=>{alert(error)});

//Ajaxfor-->asynchrous javascript and  making http request from browser which is client to fetch data,retrieve or update from server. so we can use javascript on front end.
  //ajax is a set of techniques for http request. there are ways to do this ,first one is xhr
  
   
    //4-XMLHttpRequest(XHR) to make http request in js,there are also states readystate 0,1,2,3,4, and status code
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log(JSON.parse(xhr.responseText));//we can also post the data her in this line by writing the same code
      } else {
        console.error("Request failed");
      }
    };
    xhr.onerror = function () {
      console.error("Network error");
    };
    xhr.send();


//5-Fetch API is a modern way to make http request and return a promise

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

//6-using FEtch wih Post method to make httprequest
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

//7-Async/wait using named function
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchData();

//8-Async/wait using arrow function
const fetchData1 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

fetchData1();
