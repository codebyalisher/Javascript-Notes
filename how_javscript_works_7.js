/*
JavaScript Execution Phases
JavaScript code execution happens in two main phases: the Compilation Phase and the Execution Phase.

Compilation Phase
Global Context Creation:

This phase sets up the global execution context, including creating the global object (window in browsers) and setting up the scope chain.
It also involves variable hoisting, where variable declarations are moved to the top of their scope. However, initializations are not hoisted.
During this phase, the JavaScript engine also checks for syntax errors and prepares the memory for variables and functions.
Scope Checking:

The JavaScript engine performs scope checking to ensure that all variables and functions are declared properly within their scopes.
Errors related to scope (like accessing a variable before it's declared with let or const) are identified here.
Execution Phase
Global Execution Context (GEC):

Memory Creation: All variables and functions are assigned memory in the global context. For var, the initial value is undefined. For let and const, they are uninitialized and will throw a ReferenceError if accessed before their declaration.
Line-by-Line Execution: The code is executed line by line. At this point, variables are assigned their actual values, and functions are available for execution.
Function and Block Contexts:

When a function is invoked, a new execution context is created, known as the Local Execution Context (LEC).
This context also goes through memory creation and line-by-line execution similar to the global context.
Local context contains its own scope and can access variables in its parent scope if they are not found locally.


Key Points
During the compilation phase, the scope and memory for variables are set up.
In the execution phase, the code runs line by line, assigning values to variables.
Global Context: The global execution context has a default global object (window in browsers).
Local Context: Each function call creates a local execution context, which has its own scope and can access variables from its parent scopes.
Scope Chain: If a variable is not found in the local context, the JavaScript engine will look up the scope chain to find the variable in parent contexts.
Difference in Objects: The global execution context's default object is the global object (window), whereas in local execution contexts, the default object is specific to the function or block scope.


In Urdu Explanation:
since there are two phases in code execution frst is globla context creation mean global memory create huti h smjhny kliy aesa keh skty hn es me varible ko values wgra assign huti hn jb control es me enter huta h aur ye global context stack me b store huta jb es glbl cntxt ki baari aati h,
 variable k respect se hm hoisting kr skty hn but let,const me ye huta h k hoisting huti h but differently mtlb k agr varble ki value set kr rakhi h but variable ko pehly access kr rahy hn tu phr ye uninitialized ka error dy ga but agr value set he ni ki hugi aur variable ko access krny ki Koshish kre gy tu ye alg error dy ga jo k undefined hugi,
  axha compilation jo h us me tokenization hu rahe h aur parsing hu rahe huti h wgra but es me just scope wgra ka knowledge rakhta h takeh execution se pehly error ko check kiya ja sky,
  aur execution phase me jo GEC huta h aur es me jo global memory wala phase huta h us me un variable ki value set ki jaati hn aur phr jb control line by line execute krta h tu wo phr glbl memory ko yaha se original values set krta h aur jb ye sara execute hu jata h tu phr ye GEC stack se delete hu jata h aur jo next GEC huta h uski execution start huti h.

Conclusion:- compilation phase me scope check huta h aur GEC m jo memory creation phase huta h us me varible ki type set ki jaati h aur jo line by line execute huta h us me un variable ko values assigned huti hn axha jb es me function ya classes wgra execute huny lagti hn tu en kliy phr usi GCE me ek child LCE(local context execution)bnta h jo same procedure mtlb local memory creation aur line by execution ko follow krega aur ye saary call stack me track huty rahy gy, ek aur chota sa difference wo ye h k Global GEC me object by default window huta h but child GEC me by default object ek array object huta h uski property hm index aur length ko use kr k access kr skty hn ,es local m ye huta h k agr varble ko value local execution m ni Mili tu wo eska jo parent huga us me dekhy ga agr waha b ni mili tu wo us k parent ko dekhy ga aur es trh dekhta rahega agr kahein b ni milti tu phr ye error throw krega.
*/

// Global Execution Context (GEC)
console.log(x); // undefined due to hoisting
var x = 10;

//console.log(b); // ReferenceError: Cannot access 'b' before initialization
//let b = 10;

function foo() {
  // Local Execution Context (LEC) for foo
  var y = 20;
  console.log(y); // 20

  function bar() {
    // LEC for bar
    let z = 30;
    console.log(x); // 10, accesses global variable x
    console.log(y); // 20, accesses parent scope variable y
    console.log(z); // 30
  }
  bar();
}

foo();
