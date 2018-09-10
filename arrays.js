/*
Developer:  Frankie Barrios 
Date:       9/10/18
Purpose:    Arrays Project:
Create all these programs in a generic fashion: the program output should reflect any update in the array 's content.
Musketeers
Write a program that: •Creates an array named musketeers containing values "Athos", "Porthos"
and "Aramis".
•Shows each array element using a
for loop.
•Adds the "D'Artagnan"
value to the array.
•Shows each array element using the forEach() method.
•Remove poor Aramis.
•Shows each array element using a
for - of loop.
Sum of values
Write a program that creates the following array, then calculates and shows the sum of its values(42 in that
    case).
const values = [3, 11, 7, 2, 9, 10];
Array maximum
Write a program that creates the following array, then calculates and shows the array 's maximum value.
const values = [3, 11, 7, 2, 9, 10];

*/


//Creates an array named musketeers containing values "Athos", "Porthos"
const musketeers = ["Athos", "Porthos", "Aramis"];


//Shows each array element using a for loop
for (i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}


//Adds the "D'Artagnan"
musketeers.push("D'Artagnan");


//Shows each array element using the forEach() method
musketeers.forEach(myElement => { //This is an anonymous function
    console.log(`${myElement}`);
});


//Remove poor Aramis.
musketeers.splice(2,1);


//Shows each array element using a for - of loop
let ofMusketeers;

for (ofMusketeers of musketeers) {
    console.log(ofMusketeers);
}


/************************SUM OF VALUES*********************************/
//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case)

var values = [3, 11, 7, 2, 9, 10];

var sum = 0;
for (var i = 0; i < values.length; i++) {
    sum += values[i]
}

console.log(sum);

/*************Array Maximum**************/
var values = [3, 11, 7, 2, 9, 10];

console.log(Math.max(...values));




