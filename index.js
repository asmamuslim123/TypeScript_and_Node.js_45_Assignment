//task # 2 : Personal Message: Store a person’s name in a variable, and print 
// a message to that person. Your message should be simple, such as,
//  “Hello Eric, would you like to learn some Python today?”
const personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
//task # 3 : Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
// Store the person's name in a variable
let personName = "asma";
// Print the name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Print the name in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Print the name in titlecase
console.log("Titlecase:", personName[0].toUpperCase() + personName.substring(1).toLowerCase());
//task # 4 : Famous Quote: Find a quote from a famous person you admire.
// Print the quote and the name of its author. Your output should look 
//something like the following, including the quotation marks:
//Albert Einstein once said,
// “A person who never made a mistake never tried anything new.”
const Author = "Albert Einstein";
const quote = "A person who never made a mistake never tried anything new.";
console.log(`"${Author}" - ${quote}`);
const famous_person = "Albert Einstein";
const quote = "A person who never made a mistake never tried anything new.";
const message = `${famous_person}  once said," ${quote}"`;
console.log(message);
export {};
