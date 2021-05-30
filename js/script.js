var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

/*  Log out each item that has an even numbered index

stuff.forEach(function (item, index) {
  if (index % 2 === 0) {
    console.log(`${index}: ${item}`);
  }
});  
*/

/* 
Create a function that removes an item from the array, then log out a message
that it was removed, or if it doesn't exist.

var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (array.includes(item)) {
    array.splice(index, 1);
    console.log(`"${item}" was removed from the array.`);
  } else {
    console.log(`"${item}" does not exist in the array.`);
  }
};


removeItem(stuff, "cats");

removeItem(stuff, "coffee");

console.log(stuff);

*/

/* Filter the stuff array to log out all the items that contain the letter s
Using new array and for...of loop*/

var newArray = [];

for (var item of stuff) {
  if (item.includes("s")) {
    newArray.push(item);
  }
}

console.log(newArray);

/* Filter the stuff array to log out all items with the letter s
using the filter() method  */

var itemsWithS = stuff.filter(function (item) {
  if (item.includes("s")) {
    return item;
  }
});

console.log(itemsWithS);
