//1-actually javascript is a synchronous programming and single threaded
//2-setTimeout()-->it return id fter executing
//console.log("script start")
//const id=setTimeout(()=>{console.log("hello world")},0);
//for(let i=1;i<100;i++){console.log("...")}
//console.log("script end")
//clearTimeout(id)//when not to use the settimeout

//3-callstack done GEC in it-->eventloop and callback queue send the event to the eventloop whcih is received by web broser in the callback queue
//4-setinterval()-->
// console.log("script start")
// setInterval(() => {
//     console.log(Math.random()*15)
// }, 3000);
// console.log("scritp end")
//program to change the color of the body using setinterval method
// const body=document.querySelector("body")
// const id=setInterval(()=>{
// const red = Math.floor(Math.random() * 126);
// const green = Math.floor(Math.random() * 126);
// const blue = Math.floor(Math.random() * 126);
// const rgb = `rgb(${red},${green},${blue})`;
// //console.log(rgb)
// body.style.background=rgb;
// },1000)
// const btn=document.querySelector("#one")
// btn.addEventListener("click",()=>{
//     clearInterval(id);
//     btn.textContent=body.style.background;
// })

//4-callback in synchronous js-->function pass as a parameter to the function
// function func1(){console.log("task1 doing")}
// func1()
// function func2(callback) {console.log("task2 doing")
//     callback();}
// func2(func1);

//function gettwonumber(n1,n2,onsuccess,onerror){console.log(n1,n2);onsuccess(n1,n2),onerror(n1,n2)}
//function addtwonumb(n1,n2){console.log(n1,n2)}
//gettwonumber(1,2,()=>{console.log(n1+n2)},()=>{console.log(n1*n2)})

//5- callback/callbackhell function inside function in asynchronous js using setinterval
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
// setTimeout(() => { ///callback hell which is pyramid of dom happeinging here
//     heading1.textContent="heading1";
//     heading1.style.color="violet";
//     setTimeout(() => {
//       heading2.textContent = "heading2";
//       heading2.style.color = "red";
//     setTimeout(() => {
//       heading3.textContent = "heading3";
//       heading3.style.color = "green";
//     setTimeout(() => {
//       heading4.textContent = "heading4";
//       heading4.style.color = "green";

//     setTimeout(() => {
//       heading5.textContent = "heading5";
//       heading5.style.color = "green";
//     }, 7000);
//     }, 6000);
//     }, 4000);
//     }, 3000);
// }, 1000);

//6-callback hell which is  pyrmaid of dom mean calling a lot of functions inside the function
function changeText(
  element,
  text,
  color,
  time,
  oncallbacksuccess,
  onfailurecallback
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (oncallbacksuccess) {
        oncallbacksuccess();
      }
    } else {
      if (onfailurecallback) {
        onfailurecallback();
      }
      console.log("element does not exist");
    }
  }, time);
}
changeText(heading2, "one", "violet", 3000, () => {
  changeText(
    heading3,
    "three",
    "green",
    5000,
    () => {
      changeText(
        heading4,
        "four",
        "cyan",
        7000,
        () => {
          changeText(
            heading4,
            "four",
            "cyan",
            7000,
            () => {changeText(
                heading4,
                "four",
                "cyan",
                7000,
                () => {
                  changeText(
                    heading4,
                    "four",
                    "cyan",
                    7000,
                    () => {
                      console.log("successfully executed");
                    },
                    () => {
                      console.log("failure occured");
                    }
                  );
                },
                () => {
                  console.log("failure occured");
                }
              );
            },
            () => {
              console.log("failure occured");
            }
          );
        },
        () => {
          console.log("failure occured");
        }
      );
    },
    () => {
      console.log("failure occured");
    }
  );
});
