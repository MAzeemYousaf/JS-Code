// ############## STRING ################

const name = "Mr. Sing";
const city = "England";

console.log(`Hi ${name} we are Zyle.Online from ${city}.`);

// >>>>>>>>>>>>>>>> CONCATINATION <<<<<<<<<<<<<<<<<<<<<<<<<<

const addString = name + city

console.log(addString);


//>>>>>>>>>>>>>>>>>>> String as a Object <<<<<<<<<<<<<<<<<<

const obstr = new String("United-State-Of-Amarica")

console.log(typeof obstr);

console.log(obstr.length);
console.log(obstr[13]);

// >>>>>>>>> USING OBJECT PROPERTIES <<<<<<<<<<<

console.log(name.toUpperCase()); // use to capitelized all letters
console.log(name.toLowerCase()); // use for lower case all letters
console.log(name.charAt(6)); // use for find a specific letter by index number
console.log(name.indexOf("n")); // use for find which charachter having index
console.log(name.substring(0,3)); // use for getting specific letters from a statement
console.log(name.slice(-3, 7))





