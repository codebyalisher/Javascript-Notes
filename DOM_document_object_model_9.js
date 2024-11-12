//1-dom(document_object_model) which is created by the browser,there are some web apis by using them we can manipulate the dom,we can load the js file in three ways
//1-inside the script in the start of hte body,2-at end of the body,3-async(both files load simulatenously but if read one first then other will stop and start the execution then again error coz file is half parse) and 4-using defer(both files load simultaneously and either load first but parse will not stop coz it load first then start execute ) at the start of the body coz when borwser parse the html files it does not find the elements untill load is done so it shows the 
// browser will make the object which have key value pair so this object is called document,then after making this object the browser will add it to the javascript object whcih is window
// so now window object has the document object inside it also document contains objects inside it,we can use this document directly with window obj or without it 
//console.log(document)

//2-Events--> there are a lot of events like click,scroll,submitt etc
//3-selecting element using get element by id,it gives the element but it returns the object 
//const mainheading=document.getElementById("main-heading")
//console.log(mainheading)
//4-query selector to select the elements,it works for all id's,classes,tags as we select in css etc.
//const mainheading=document.querySelector("#main-heading")//for id selecting
//console.log(mainheading)
//const header=document.querySelector(".header")//for selecting the class,it select the only one class which will be first either there are a lot of classes with the same name
//console.log(header)
//const btn = document.querySelectorAll(".btn");//for seleting the all classes with the same name. and it return the nodelist 
//console.log(btn)

//5-changing text
//const mainheading=document.getElementById("main-heading") //hre mainheading variable also contains methdos and properties whcih we cna use
//console.log( mainheading.textContent)//it return the all content
//mainheading.textContent="this is something else"
//mainheaing.innertext//return the hidden text if there exist
//console.log(mainheading.textContent)

//6-changing the style
//const mainheading=document.querySelector("h2")//we can also select the elements tags inside tags or class
//console.log(mainheading.style.color="blue")
//console.log(mainheading.style.backgroundColor="blue")//here we cant use the dash coz its error in js so we have to use the camelcase

//7-get and set attributes(id,name,placeholder,class,link,src,href,type,value etc)
//const link=document.querySelector("a")
//console.log(link.getAttribute("href"))// it get the attribute value
//console.log( link.setAttribute("href","https://www.github.com/codebyalisher"))// here it will take firs value which is attribute and second one is value 
//console.log(link.getAttribute("href"))
//console.log(link.getAttribute("href").slice(1));//here slice will remove the first text

//8-get multiple elements usign byclassname and get multiple elements items by queryslectorall
//const navitems=document.getElementsByClassName("nav-items")//here it is elementsbyclsname mean multiple and also there is lementbyclsname mean one
//console.log(navitems[0])//it return htmlcollection which is  array like object mean we can use indexing and push pop but not all array mehtods
//const navitems=document.querySelectorAll(".nav-items")
//console.log(navitems[1])//it also return nodelist array like object

//9-loop
//const navitems=document.getElementsByTagName("a")
//console.log(navitems)
//forloop,for of loop, foreach loop cant use in arraylike object
// for(let i=0;i<navitems.length;i++)
//     {
//         const navitem=navitems[i];
//         navitem.style.backgroundColor="#fff";
//         navitem.style.color="green";
//         navitem.style.fontWeight="bold";

//     }
// for(let navitem of navitems)
//     {
//              const navitem = navitems[i];
//              navitem.style.backgroundColor = "#fff";
//              navitem.style.color = "green";
//              navitem.style.fontWeight = "bold";
//     }

//10-change itemcollection array into array using array.from(itemclectin)
// let navitems = document.getElementsByTagName("a");
// Array.from(navitems)

//11-nodelist
//let navitems=document.getElementsByTagName("a");
//simple loop,for of loop,foreach loop ,all these loops can be used
// for(let i=0;i<navitems.length;i++)
//     {
//         const navitem=navitems[i];
//         navitem.style.backgroundColor="#fff";
//         navitem.style.color="green";
//         navitem.style.fontWeight="bold";

//     }
// for(let navitem of navitems)
//     {
//              const navitem = navitems[i];
//              navitem.style.backgroundColor = "#fff";
//              navitem.style.color = "green";
//              navitem.style.fontWeight = "bold";
//     }
//navitems.forEach(element => {
  //              const navitem = navitems[i];
  //              navitem.style.backgroundColor = "#fff";
  //              navitem.style.color = "green";
  //              navitem.style.fontWeight = "b
//});
//changing nodelist into array using array.from(nodelistarrayname)
//Array.from(navitems)//now array methods can be used

//12-innerhtml--> tags inside the tags ,those tage are innerhtml 
//const headline=document.querySelector(".headline")
//console.log(headline.innerHTML)
//headline.innerHTML="<h1> this is the inner html changed</h1>";//here innerhtml are being changed
//headline.innerHTML +="<button class=\"btn\">learn more</button>"// here changes are being added in that innerhtml changed,also "\ "\ this is used to ignore the comas inside the commas
//console.log(headline.innerHTML)

//13- different vocabulary for the dom nodes like elemetns nodes,text node whch is space ,also title node etc.
// everything in dom we can say nodes,so we can traverse nodes if we know the root node similar to tree in DSA
//const rootnode=document.getRootNode()
//console.log(rootnode)
//console.log(rootnode.childNodes[0])//since it like array obj
//const childnodes=rootnode.childNodes[0]//since it like array obj
//console.log(childnodes.childNodes)//so in this way we can traverse in all tree
//console.log(childnodes.parentNode)//it return hte parent node of the child node
//console.log(childnodes.nextSibling)//relation between siblings along with white spaces
//console.log(rootnode.childNodes[0].parentNode.nextSibling.textContent)//relation between siblings,parent,rootnode,childnoe
//console.log(childnodes.nextElementSibling)//it only return the element without white space

//14- there is no need to get root node always we can select the elemnt and then get their parent or child node and perform operations
//const h1=document.querySelector("h1")
//const parentnode=h1.parentNode
//parentnode.style.backgroundColor="#fff"
//console.log(parentnode.parentNode)

//15-we can also traverse using queryselector
//const h1 = document.querySelector("h1");
//const title = h1.querySelector("title")
//console.log(title.childNodes)

//16-we can also get the elements without white space usign childere prorperty
//const div=document.querySelector(".container")
//console.log(div.children)//here children also return the only elements withour white space

//17-classlist-> mean in how many clases we can work mean classes can be added or reomved in the tags
//const sectionTodo=document.querySelector(".section-todo");
//console.log(sectionTodo.classList.add('bg-dark'))//class is being addded
//console.log(sectionTodo.classList.remove('bg-dark'))
//console.log(sectionTodo.classList.contains('container'))
//console.log(sectionTodo.classlist.toggle('bg-dark'))//if there will be clas then it will remove otherwise will add

//18-add new elements to the page,dont use the innerhtml element for creatign the new element
//const todolist=document.querySelector(".todo-list");
//todolist.innerHTML +="<li>New To Do2</li>";//we can use htmlinner only when we have to just make changes but not for new creatign elements coz it renders the entiere elements so it cause performance issues
//todolist.innerHTML +="<li>New To Do3</li>";

//19- CreateElement()--> this mthd only add new element without renderig the entire elemnts
//const todolist = document.createElement("li");
//const newtodolisttext=document.createTextNode("new To Do ")//Or
//newtodolisttext.textContent="new To Do";
//const todolistold=document.querySelector(".todo-list");
//todolist.appendChild(newtodolisttext)//Or
//todolist.append(newtodolisttext)
//todolist.preappend(newtodolisttext)//it add the elemetn at teh start
//todolistold.append(newtodolisttext)//its new to add the element at the last 
//console.log(todolist)

//20-adding the element using after,before methods
//const todolist = document.createElement("li");
//todolist.textContent="new To Do";
//const selectlist=document.querySelector(".todo-list")
//selectlist.before(todolist)
//selectlist.after(todolist)//till here 90% are used for elements inserting
//selectlist.insertAdjacentElement(todolist)

//21-usign inserthtml with beforeend,afterend,beforebegin,afterbegin but issue is that here everytime html will be selected 
//const todolist=document.querySelector(".todo-list")
//todolist.insertAdjacentHTML("beforeend","<li>new to do</li>")
//todolist.insertAdjacentHTML("afterend","<li>new to do</li>")
//todolist.insertAdjacentHTML("afterbegin","<li>new to do</li>")
//todolist.insertAdjacentHTML("beforebegin","<li>new to do</li>")

//22-removing the element 
//const todolist=document.querySelector(".todo-list")
//todolist.remove()

//23-clone nodes
//const ul=document.querySelector(".todo-list")
//const li=document.createElement("li")
//li.textContent="new todo";
//const li2=li.cloneNode(true)//here deep clone will occur mean with content it will clone the node
//ul.append(li)//here one will be exist append or prepend nodes
//ul.prepend(li2)

//24-some old methods to support poor IE(internet explorer)
// append,prepend,after,before does not work in IE
//appendchild,replacedchild,removechld,insertBefore
//const ul=document.querySelector(".todo-list")
//const li=document.createElement('li')
//const referencenode=document.querySelector(".todo-list li")
//li.textContent="new to do"
//ul.appendChild(li)
//ul.insertBefore(li,referencenode)//here is new li nod and we get old node referce where it to be insert
//ul.replaceChild(li,referencenode)//new node hre is li nad old is referncenode 
//ul.removeChild(li,referencenode)//to remove the child node which is li by usign previous node

//25-static list vs live list
//const listitem=document.querySelectorAll(".todo-list li")//it gives us static list
//const listitem=document.getElementsByTagName(".todo-list li")//it gives us live list mean immediately effect
//const newli=document.createElement("li")
//newli.textContent="new item "
//const ul=document.querySelector(".todo-list")
//ul.append(newli)//but issue is that nodelist will be static no new item will be added in it so

//26-how to get the dimensions of the element
//dimensions mean some extra information regarding the element like height widht etc
//const sectionnode=document.querySelector(".section-todo")
//const info=sectionnode.getBoundingClientRect()//some time we have to use the hegiht and widht dynamically so by geting information from here we will use that height and widht
//const info = sectionnode.getBoundingClientRect().height/width/top;//we can directyly prop height by usign height