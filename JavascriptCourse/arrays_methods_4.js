// Array Methods Demonstration

// Slice Method is used for selection of array elements,(es me slice method add aur delete kliy b use huta by using index)
const array1 = [1, 2, 3, 4, 5];
const slicedArray = array1.slice(1, 3);
console.log("Slice Method:", slicedArray); // [2, 3]

// ForEach Method--> ye callback function leta h aur loop ka kaam krta h aur hr iteration pe array ki value aur index return krta h
const array2 = [1, 2, 3];
console.log("ForEach Method:");
array2.forEach((value, index) => {
  console.log(`Value: ${value}, Index: ${index}`);
});

// Map Method --> ye ba callback function leta h aur array ki value aur index return krta h but es me frq ye h k ye un value ka array return krta h
const array3 = [1, 2, 3];
const mappedArray = array3.map((value, index) => value * 2);
console.log("Map Method:", mappedArray); // [2, 4, 6]

// Filter Method-->ye b callback function leta h but ye always us callback function se boolean value accept krta h
const array4 = [1, 2, 3, 4];
const filteredArray = array4.filter((value) => value > 2);
console.log("Filter Method:", filteredArray); // [3, 4]

// Reduce Method--> me ye huta h k ye b callback function leta h aur jb frst time function call huga us time frstvalue aur us array ki second value le ga aur phr jb next time call huga tb jo pehly waly call ki return value hugi wo accumulator hugi aur array ki third value currentvalue bn jaay gi es me hm accumulator ki default value b pass kr skty hn as 3rd parameter in reduce and so on for all the values of array ,

const array5 = [1, 2, 3, 4];
const sum = array5.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Reduce Method:", sum); // 10

// Sort Method-->sort method do sorting on string/number and change the array
const array6 = [3, 1, 4, 2];
array6.sort((a, b) => a - b);
console.log("Sort Method:", array6); // [1, 2, 3, 4]

// Find Method-->search the value of specific criteria
const array7 = [1, 2, 3, 4];
const foundValue = array7.find((value) => value > 2);
console.log("Find Method:", foundValue); // 3

// Every Method-->is similar to other but it return true when callback function also return the true for all values of array
const array8 = [1, 2, 3, 4];
const allGreaterThanZero = array8.every((value) => value > 0);
console.log("Every Method:", allGreaterThanZero); // true

// Some Method-->work only for one specific value in array
const array9 = [1, 2, 3, 4];
const someGreaterThanThree = array9.some((value) => value > 3);
console.log("Some Method:", someGreaterThanThree); // true

// Fill Method-->is used to insert the new values in existing values of array and it will change the array
const array10 = [1, 2, 3, 4];
array10.fill(0, 1, 3);
console.log("Fill Method:", array10); // [1, 0, 0, 4]

// Slice Method (again for completeness)
const array11 = [1, 2, 3, 4];
const slicedArrayAgain = array11.slice(1, 3);
console.log("Slice Method (again):", slicedArrayAgain); // [2, 3]
