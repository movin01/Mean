// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";
// After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, look back at how the code is hoisted by the interpreter.

// Note
// Run the same code as above with ES6 syntax and compare your results:

// console.log(example);
// let example = "I'm the example!";    
// Even if let and const prevent a lot of the confusing behavior of JavaScript's hoisting, these are ES6 constructs and a huge amount of the world's live JavaScript code is still ES5. Understanding how ES5 hoists var and the rules of scoping are important for every JavaScript developer!






// 1 Given
// console.log(hello);
// var hello = "world";
console.log(hello);
var hello = 'world';
// undefined

// 2 Given
// console.log (haystack);
// var example = "magnet"
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// answer = "magnet"
3
// Given
// console.log(brendan):
//  var brendan = "super cool"
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//  answer "super cool"

4
// Given
// console.log(food);
// var food = "chicken"
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// answer "chicken"
// "half-chicken"


5
// Given
// console.log(food);
// var food = "chicken"
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// answer
// "error"
// "TypeError: mean is not a function
//     at gihugegeme.js:1:6
//     at https://static.jsbin.com/js/prod/runner-4.1.7.min.js:1:13924
//     at https://static.jsbin.com/js/prod/runner-4.1.7.min.js:1:10866"
6

// Given
// console.log(genre)
// var genre = "disco"

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// answer
// undefined
// "rock"
// "r&b"
// "disco"


7
// Given
// console.log(dojo)
// var dojo =" san jose", "seattle","burbank"
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// answer
// "san jose"
// "seattle"
// "burbank"
// "san jose"

// Given
// console.log(makedojo("chicago, 65"))
// console.log(makedojo("berekely", 0))
// var = 
8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
// answer
// [object Object] {
//   hiring: true,
//   name: "Chicago",
//   students: 65
// }