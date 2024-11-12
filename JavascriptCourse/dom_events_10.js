/*
DOM EVENTS:

Events mean to perform some action or clicks on the front end,we have different types of events like mouse hover,click,key press.

Ways to handle the events:

1-simple mean we pass/define function either regular or arrow or other task in the event directly

**2-**in this way we can define the function outside and call it in the event

**3-**We can use the eventaddlistener method through this we can occur the event ,we can also use the loop to do the event. And this way is more efficient.

How events works?

1-Event Captchurng: As we have the web api which holds the events and javascript GC (global context),
so when any event occur in the web api it passes the event in the call back queue, 
As stack empty it call those events one by one in the stack from the call back queue ,
so in this way events are run by js engine.

2-Bubbling: As we have seen above in Event Captchuring there is only one event occur at a time,

but in the bubbling all the events linked in the call back hell ,they all execute at once.

3-In Event Deligation: We can set the only one event for all elements instead of bubbling where for every element we set the event and so all the events call at a time.

*/
 

//1-dom events ,three ways to write the events 
//const btn =document.querySelector(".btn-headline");
//btn.onClick=function(){console.log("you cliekced me")}
//function clickme(){console.log("you click me")}
//btn.addEventListener("click",clickme())
//btn.addEventListener("click", () => {console.log("you clicked me");});
//btn.addEventListener("click", function(){console.log("you clicked me");});
// btn.addEventListener("click",()=>{
//     console.log("you clicked me")
//     console.log("you clicked me 2")
//     console.log(this)//here this pointing to the window object in case of arrow functions
// })
// btn.addEventListener("click",function (){
//   console.log("you clicked me");
//   console.log("you clicked me 2");
//   console.log(this); //here this pointing to the button object in case of normal functions
// });

//2-multiple buttons events adding in multiple-events.html file
//onst firstbutton=document.querySelector("#one")//adding event on one buton
//const allbuttons=document.querySelectorAll(".buttons");//adding event on all butons
//allbuttons.addEventListener("click",()=>{console.log("all button clicked")})
// for(let button of allbuttons)
//     {
//         button.addEventListener("click",
//             function(){
//                 console.log("you cliekced me");
//                 console.log(this.textContent);
//             })
        
//     }
//allbuttons.forEach(function(button){button.addEventListener("click",function(){console.log(this.textContent)})})
//const firstbutton=document.querySelector("#one")
//firstbutton.addEventListener("click",function(e){console.log(e)})

//3-browser gives event-->js engine+callbackfunction+information about the event occured and this iformation we will get as a object form and passed it to the callback function
//const allbuttons = document.querySelectorAll(".buttons");
//for(let button of allbuttons){button.addEventListener("click",(e)=>{console.log(e.target)})}

 //target/currenttarget mean which button has triggered the event
//4-webapi keep callback functin and send then to the event loop-->event loop store the buttons events and then send the event to the js engine-->js engine (callstack)
 
// const allbuttons = document.querySelectorAll(".buttons");
// for (let button of allbuttons) {
//   button.addEventListener("click", (e) => {
//     console.log(e.target.style.backgroundColor="yellow");
//   });
// }

//5- event bubbling-->mean event propagaion mtlb when click on one evnet it call its parents event and furthere its grandparent if there is event on it,bubling occured after capturing
//const grandparent=document.querySelector(".grandparent")
//const parent=document.querySelector(".parent")
//const child=document.querySelector(".child")
//grandparent.addEventListener("click",()=>{console.log("you clicked the grandparent")})
//parent.addEventListener("click",()=>{console.log("you clicked the parent")},true)
//child.addEventListener("click",()=>{console.log("you clicked the child")},true)
//6- event capturing mean if we pass the third argmnt in the addeventlistener it is called event capturing
//it will capture the event which is most grandparent then grandparent ,parent and chil,then whcih are not capturng will come, hence capturing and bubling occured

//7event delegation-->here in event delegation we can add one event which will perform the events for all elemnts by using target event object
//grandparent.addEventListener("click", (e) => {console.log(e.target.textContent);});

//To do Project using event delegtion in our index.html file
const todoform=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todolist=document.querySelector(".todo-list");
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const text=todoInput.value;
    const newli=document.createElement("li");
    const newliInnerHTML=`
          <span class="text">${text}</span>
            <div class="todo-buttons">
              <buttons class="todo-btn done">Done</buttons>
              <buttons class="todo-btn remove">Remove</buttons>            
            </div>`;
        newli.innerHTML=newliInnerHTML;
        todolist.append(newli)
    todoInput.value="";
})

todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    }
        if (e.target.classList.contains("remove")) {
          const targetli=e.target.parentNode.parentNode;
          targetli.remove();
        }
})