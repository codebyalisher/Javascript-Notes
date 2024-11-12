/* Explanation in Urdu
set me unique values huti hn es ki iterate b kiya ja skta h using of loop ,
map b object ki trh huti h but difence ye h k object me keys srf string ya symbol hu skti hn aur un pe of loop ni laga skty but in loop laga skty hn aur ye oprtr b ?. use krty hn jb hmy value ka pta na 
hu but hm ni chaaty k error aay us se bchny kliy ye use krty hn 
but map me hm koi b key use kr skty hn aur esko iterate b kr skty hn using of loop 
aur es me set method k through value add kr skty hn map me 
aur key ko get method k through access krty hn aur ye hmy array return krta h aur es array ko hm destructing b kr skty hn aur map m hm array bna kr phr us me array bna kr key value set kr skty hn

Explanation in English
Set: A collection of unique values. Can be iterated using for...of loop.
Map: A collection of key-value pairs where keys can be of any type. Can be iterated using for...of loop.
Optional Chaining (?. operator): Used to safely access nested properties without causing an error if a reference is null or undefined.
Destructuring with Map: Extracts key-value pairs for easier manipulation.
*/

const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Set(4) {1, 2, 3, 4}

for (const value of mySet) {
  console.log(value); // 1, 2, 3, 4
}


//3-map
const myMap = new Map();

// Adding values to the Map
myMap.set("name", "John");
myMap.set(42, "The Answer");
myMap.set(true, "Boolean Key");

// Accessing values
console.log(myMap.get("name")); // John
console.log(myMap.get(42)); // The Answer
console.log(myMap.get(true)); // Boolean Key

// Iterating over a Map
for (const [key, value] of myMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}

//3.1-Optional Chaining (?. operator)-->Optional chaining is used to safely access deeply nested properties without having to check if each reference in the chain is valid.
const user = {
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'Wonderland'
  }
};
console.log(user?.address?.street); // 123 Main St
console.log(user?.contact?.phone); // undefined (no error)

//3.2--map with arrray initialization
const myMap1 = new Map([
  ["name", "Alice"],
  [42, "The Answer"],
  [true, "Boolean Key"],
]);

console.log(myMap1.get("name")); // Alice

// Iterating using for...of loop
for (const [key, value] of myMap1) {
  console.log(`Key: ${key}, Value: ${value}`);
}

//3.3-Destructuring with map
const myMap2 = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'Wonderland']
]);

for (const [key, value] of myMap2) {
  console.log(`${key}: ${value}`); // name: Alice, age: 25, city: Wonderland
}

// Destructuring example
const [firstKey, firstValue] = myMap2.entries().next().value;
console.log(`First entry - Key: ${firstKey}, Value: ${firstValue}`); // First entry - Key: name, Value: Alice
