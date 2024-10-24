//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALUES / DATA TYPES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ************************* 1) PRIMTIVE VALUES ************************

// a) Numbers
// b) Srtings
// c) Boolean
// d) Undefined
// e) Null
// f) Symbol


// ********************** 2) NON-PRIMTIVE VALUES **************************

// a) Objects
// b) Arrays
// d) Functions


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MEMORY TYPES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// *********************************************  1) Stack Memory *****************************************************

// Holds all primtive values and gives a copy value of called variable.
// If the copy value changed this will not effact the original value.

// ########### For Example: #############



let originalValue = "This is original value";

let copyValue = originalValue;

console.log(originalValue);
console.log(copyValue);



// Now change the copy value.

copyValue = "This value is changed.";

console.log(originalValue);
console.log(copyValue);


// ************************************************** 2) Heap Memory *****************************************************

// This memory holds all Non-Primtive values and gives reference of original value.
// If the reference changed then the original value also be changed.


// ############ For Example ############


let user1 = {
    name: "Jhon",
    Email: "jhon@gmail.com",
    Id: 45
}

let user2 = user1;

console.log(user1.name); // => Jhon
console.log(user2.name); // => Jhon



// Change the reference of User2 

user2.name = "Iron Man";

console.log(user1.name); // => Iron Man
console.log(user2.name); // => Iron Man

