/*
	Lesson 15.14

	James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:

		var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

	but James had this:

		var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

	Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

		- Remove "Blackberry"
		- Add "Yellow" and "Green"
		- Add "Purple"
*/

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1,"Yellow", "Green");
rainbow.splice(rainbow.length, 0, "Purple");

console.log(rainbow);



//Alternative (1 splice)

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 2,"Yellow", "Green", "Blue", "Purple");

console.log(rainbow);