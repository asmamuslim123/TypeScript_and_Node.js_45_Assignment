//task # 1 : Install Node.js, TypeScript and VS Code on your computer.
console.log("Hello Ayaan");


//task # 2 : Personal Message: Store a person’s name in a variable, and print 
//a message to that person. Your message should be simple, such as,
//“Hello Eric, would you like to learn some Python today?”

const personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);


//task # 3 : Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.


//Store the person's name in a variable
let personName: string = "asma";
//Print the name in lowercase
console.log("Lowercase:", personName.toLowerCase());
//Print the name in uppercase
console.log("Uppercase:", personName.toUpperCase());

//Print the name in titlecase
console.log("Titlecase:", personName[0].toUpperCase() + personName.substring(1).toLowerCase());


//task # 4 : Famous Quote: Find a quote from a famous person you admire.
//Print the quote and the name of its author. Your output should look 
//something like the following, including the quotation marks:
//Albert Einstein once said,
//“A person who never made a mistake never tried anything new.”

const Author: string = "Albert Einstein";
const quote: string = "A person who never made a mistake never tried anything new."

console.log(`"${Author}" - ${quote}`);

//task # 5 : Famous Quote 2: Repeat Exercise 4, but this time store the
//famous person’s name in a variable called famous_person. Then compose 
//your message and store it in a new variable called message. Print your message.

const famous_person: string = "Albert Einstein";
const quote: string = "A person who never made a mistake never tried anything new.";
const message: string = `${famous_person}  once said," ${quote}"`;

console.log(message);

//task # 6 : Stripping Names: Store a person’s name, and include some whitespace characters at 
//the beginning and end of the name.Make sure you use each character combination, "\t" and "\n",
//at least once. Print the name once, so the whitespace around the
//name is displayed. Then print the name after striping the white spaces.
let personName: string = "\t\n   Ayaan \n\t";
console.log("original",personName);
console.log("Stripped",personName.trim());


//task # 7 : Number Eight: Write addition, subtraction, multiplication, and division 
//operations that each result in the number 8. Be sure to enclose your operations 
//in print statements to see the results.

//task # 8 : You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);

//task # 9 : Favorite Number: Store your favorite number in a variable.
//Then, using that variable, create a message
//that reveals your favorite number. Print that message.

//store my favourite number in a variable
const favorite_Number: number = 20;

//revealing my favourite number
console.log(`My favorite number is, ${favorite_Number}`);


//task # 10 : Adding Comments: Choose two of the programs you’ve written, and add at least
//one comment to each. If you don’t have anything specific to write because 
//your programs are too simple at this point, just add your name and the current 
//date at the top of each
//program file. Then write one sentence describing what the program does.

//Asma Muslim
//Thrusday, feb-5-2024


//task # 11 : Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in
//the list, one at a time.

//storing friends names in an Array
const names: string[] = ["Ayaan", "Rayaan", "Asma", "Muslim"];

//printing names one by one
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//Task # 12 : Greetings: Start with the array you used in Exercise 11, but instead 
//of just printing each person’s name, print a message to them. The text
//of each message should be the same, but each message should be
//personalized with the person’s name.

const names: string[] = ["Ayaan", "Rayaan", "Asma", "Muslim"];

const message : string = "Do you like to play Game?"
    console.log(names[0] + " "+ message)
    console.log(names[1] + " "+ message)
    console.log(names[2] + " "+ message)
    console.log(names[3] + " "+ message)

//task # 13 : Your Own Array: Think of your favorite mode of
//transportation, such as a motorcycle or a car, and make a list 
//that stores several examples. Use your list to print a series of
//statements about these items, such as “I would like to own a Honda motorcycle.”

const transportation: string[] = ["Honda", "Motorcycle", "Bicycle", "Train"];
transportation.map((items) => console.log(`i would like to own a ${items}`));

//task # 14 : Guest List: If you could invite anyone,
//living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d
//like to invite to dinner. Then use your list to print a 
//message to each person, inviting them to dinner.

//Initial guest list
let guest_List: string[] = ["Ayaan", "Rayaan", "Aslam",];
guest_List.map((items) => (console.log(`Dear ${items}, You are invited to the dinner`)))


//task # 15 : Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

//Initial guest list
let guest_List: string[] = ["Ayaan", "Rayaan", "Aslam",];

for(let i = 0; i<guest_List.length; i++){
    console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.Thank You!\n')}

    let absent_Guest : string = 'Ayaan';
    let new_Guest :string = 'Shayan';
    guest_List[0] = new_Guest;
    
for(let i = 0; i<guest_List.length; i++){
    console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.Thank You')}
    console.log(`Mr. ${absent_Guest} is not coming to the party.`)



//task # 16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//Initial guest list
let guest_List: string[] = ["Ayaan", "Rayaan", "Aslam",];

    let absent_Guest : string = 'Ayaan';
    let new_Guest :string = 'Shayan';
    guest_List[0] = new_Guest;

//Informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table so we are inviting 3 more guests!");
//Adding a new guest to the beginning of the array
guest_List.unshift("usman");
//Adding a new guest to the middle of the array
guest_List.splice(2, 0, "Asma");
//Adding a new guest to the end of the array using append()
guest_List.push("Tsleem");

for(let i = 0; i<guest_List.length; i++){
    console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to invite you in our party.\nThank You')}


//task # 17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//Initial guest list
let guest_List: string[] = ["Ayaan", "Rayaan", "Aslam"]
//for(let i = 0; i<guest_List.length; i++){
//console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.Thank You!\n')}

    let absent_Guest : string = 'Ayaan';
    let new_Guest :string = 'Shayan';
    guest_List[0] = new_Guest;

//for(let i = 0; i<guest_List.length; i++){
//console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.\nThank You')}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);
//Informing people about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table so we are inviting 3 more guests!");

//Adding a new guest to the beginning of the array
guest_List.unshift("usman");
//Adding a new guest to the middle of the array
guest_List.splice(2, 0, "Asma");
//Adding a new guest to the end of the array using append()
guest_List.push("Tsleem");

for(let i = 0; i<guest_List.length; i++){
    console.log('Dear Mr.' + guest_List[i] + ',\n It is our pleasure to invite you in our party.\nThank You')}



    //Informing about the limited space
    console.log("\nUnfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people for dinner.");
    //Removing guests until only two names remain
    while (guest_List.length > 2) {
        const removedGuest = guest_List.pop();
        console.log(`Sorry ${removedGuest}, I'm unable to invite you to dinner.`);
    }
    for(let i = 0; i<guest_List.length; i++){
        console.log('Dear Mr.' + guest_List[i] + ' you are still invited to dinner.,\nThank You')
    }
        guest_List.splice(0, 2);
        console.log(guest_List);


//task # 18 : Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places: string[] = ["Japan", "Italy", "Australia", "Egypt", "Canada"];

//Print the array in its original order
console.log('Original ' + places);

//Print the array in alphabetical order without modifying the actual list
console.log('copy ' + [...places].sort());

//Print the array to confirm it's still in its original order
console.log('Original ' + places);

//Print the array in reverse alphabetical order without changing the order of the original list
console.log('copy ' + [...places].sort().reverse());

//Print the array to confirm it's still in its original order
console.log('Original ' + places);

//Reverse the order of the list
console.log('Original ' + places.reverse());

//Reverse the order of the list again to get back to the original order
console.log('Original ' + places.reverse());

//Sort the array in alphabetical order
console.log('Original ' + places.sort());

//Sort the array in reverse alphabetical order
console.log('original ' + places.sort().reverse());


//task # 19  task # 17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//Initial guest list
let guest_List: string[] = ["Ayaan", "Rayaan", "Aslam",];
//      for(let i = 0; i<guest_List.length; i++){
//      console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.Thank You!\n')}

    let absent_Guest : string = 'Ayaan';
    let new_Guest :string = 'Shayan';
    guest_List[0] = new_Guest;

//      for(let i = 0; i<guest_List.length; i++){
//      console.log('Dear Mr.' + guest_List[i] + ',It is our pleasure to you in our party.\nThank You')}

//      console.log(`Mr. ${absent_Guest} is not coming to the party.`);
//      Informing people about the bigger dinner table
//      console.log("\nGood news! We found a bigger dinner table so we are inviting 3 more guests!");

//Adding a new guest to the beginning of the array
        guest_List.unshift("usman");
//Adding a new guest to the middle of the array
        guest_List.splice(2, 0, "Asma");
//Adding a new guest to the end of the array using append()
        guest_List.push("Tsleem");

//for(let i = 0; i<guest_List.length; i++){
//console.log('Dear Mr.' + guest_List[i] + ',\n It is our pleasure to invite you in our party.\nThank You')}

//Informing about the limited space
//          console.log("\nUnfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people for dinner.");

//Removing guests until only two names remain
    while (guest_List.length > 2) {
        const removedGuest = guest_List.pop();
//          console.log(`Sorry ${removedGuest}, I'm unable to invite you to dinner.`);
    }
//          for(let i = 0; i<guest_List.length; i++){
//          console.log('Dear Mr.' + guest_List[i] + ' you are still invited to dinner.,\nThank You')
//  }
        guest_List.splice(0, 2);
        console.log(guest_List);

//  task # 19 : Dinner Guests: Working with one of the programs from 
//  Exercises 14 through 18, print a message indicating the number of 
//  people you are inviting to dinner.

// Print the number of people invited to dinner
        console.log(`Number of dinner guests: ${guest_List.length}`);


//task # 20 : Think of something you could store in a array. 
//For example, you could make a list of mountains, rivers,
//countries, cities, languages, or anything else you’d like.
//Write a program that creates a list containing these items.


// Array containing names of cities in Pakistan
const citiesInPakistan: string[] = ["Karachi","Lahore","Islamabad","Rawalpindi",];

// Printing each city in Pakistan
console.log("List of Cities in Pakistan:");
console.log(citiesInPakistan);


//Task # 21 : They think of something you could store in a TypeScript Object.
//Write a program that creates Objects containing these items.

// Creating person objects
const person: {name: string, gender: string, age: number} =
 {name: "Ayaan",  gender: "Male", age: 30}

console.log(person);


//task # 22 : Intentional Error: If you haven’t received an array index error in one
//of your programs yet, try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.

const days : string [] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
//console.log(days{7})
 console.log(days[6])


 //task # 23 : Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';

//Test 1: Is car == 'subaru'? Prediction: True
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

//Test 2: Is car == 'honda'? Prediction: False
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

// Test 3: Is car != 'toyota'? Prediction: True
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// Test 4: Is car === 'subaru'? Prediction: True
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 5: Is car !== 'subaru'? Prediction: False
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

// Test 6: Is car starts with 'sub'? Prediction: True
console.log("Does car start with 'sub'? I predict True.");
console.log(car.startsWith('sub'));

// Test 7: Is car ends with 'ru'? Prediction: True
console.log("Does car end with 'ru'? I predict True.");
console.log(car.endsWith('ru'));

// Test 8: Is car includes 'aru'? Prediction: True
console.log("Does car include 'aru'? I predict True.");
console.log(car.includes('aru'));

// Test 9: Is car includes 'hond'? Prediction: False
console.log("Does car include 'hond'? I predict False.");
console.log(car.includes('hond'));

// Test 10: Is car length greater than 5? Prediction: False
console.log("Is car length greater than 5? I predict False.");
console.log(car.length > 5);


//Task # 24 : More Conditional Tests: You don’t have to limit the number 
//of tests you create to 10. If you want to try more comparisons, write more tests.
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

let name_1 : string = "Asma"
let name_2 : string = "Asma Muslim"
let name_3 : string = "Miss Asma Muslim"

// if(name_1 == name_3){
//     console.log("names are equal")
// } else {
//     console.log("names are not equal")
// }

// if (name_1 != name_2){
//     console.log("names are equal")
// }

// if (name_1 != name_3){
//     console.log("names are not equal")
// }

let age_1 : number = 20
let age_2: number = 25

// if(age_1 == 20){
//     console.log("ellgible for vote")
// }

// if(age_1 != 25){
//    console.log("ellgible for vote in older category")
// }

// if(age_1 <= age_2){
//     console.log("younger")
// }

// if(age_2 >= age_1){
//     console.log("older")
// }

// if (age_1 == 20 && age_2 == 25){
//     console.log("person isellgible for vote")
// }

// if (age_1 == 20 || age_2 != 25){
//     console.log("person is ellgible not for vote")
// }

let country : string [] = ["pakistan", "india", "japan", "china"]
// if (country.includes("pakistan")){
//     console.log("pakistan is in country list")
// }

if(!country.includes("america")){
    console.log("america is not includ in an array")
}


//Task # 25 : Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

//    let alien_color: string = 'green';

//    if (alien_color == 'green') 
//     console.log("Congratulations! The player just earned 5 points.");

let alien_color: string = 'red'; // or 'yellow'

if (alien_color == 'green') 
   console.log("no output");


   //task # 26 : Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

// let alien_color = "green"
// if(alien_color == "green"){
// console.log("player just earned 5 points for shooting the allen")
//  }else{
//     console.log("player just earned 10 points")
//  }

 let alien_color = "red"
 if(alien_color == "green"){
 console.log("player just earned 5 points for shooting the allen")
  }else{
     console.log("player just earned 10 points")
  }


  //task # 27 : Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Version 1: Alien is green
// let alien_color: string = "green";

// if (alien_color == "green") {
//     console.log("The player earned 5 points.");
// } else if (alien_color == "yellow") {
//     console.log("The player earned 10 points.");
// } else {
//     console.log("The player earned 15 points.");
// }

// // Version 2: Alien is yellow
// const alien_color2: string = "yellow";

// if (alien_color2 == "green") {
//     console.log("The player earned 5 points.");
// } else if (alien_color2 == "yellow") {
//     console.log("The player earned 10 points.");
// } else {
//     console.log("The player earned 15 points.");
// }

// // Version 3: Alien is red
const alien_color3: string = "red";

if (alien_color3 == "green") {
    console.log("The player earned 5 points.");
} else if (alien_color3 == "yellow") {
    console.log("The player earned 10 points.");
} else {
    console.log("The player earned 15 points.");
}


//task # 28 : Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.

const age: number = 5; // Example age

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");

} else if (age < 13) {
    console.log("The person is a kid.");

} else if (age < 20) {
    console.log("The person is a teenager.");

} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}



//task # 29 : Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["banana", "apple", "strawberry"];

if (favorite_fruits.includes("banana")) {
    console.log("banana");
}

if (favorite_fruits.includes("apple")) {
    console.log("apple");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("strawberry");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}



//task # 30 : Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames: string [] = ["admin", "asma", "ayaan", "rayaan", "sana"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}




//task # 31 : No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames: string[] = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}


//task # 32 : Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["admin", "rayaan", "asma", "sana", "khan"];
let new_users: string[] = ["admin", "khan", "aliza", "haseeb", "noor"];

let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for (let new_username of new_users) {
    if (current_users_lower.includes(new_username.toLowerCase())) {
        console.log(`Sorry ${new_username}, that name is taken.`);
    } else {
        console.log(`Yes, '${new_username}' is still available.`);
    }
}


//task # 33 : Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    if (number === 1) {
        console.log(`${number}st`)//1st
    } else if (number === 2) {
        console.log(`${number}nd`)//2nd
    } else if (number === 3) {
        console.log(`${number}rd`)//3rd
    } else {
        console.log(`${number}th`)//4th
    }
}


//task # 34 : Pizzas: Think of at least three kinds of your favorite pizza. Store 
//these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead 
//of printing just the name of the pizza. For each pizza you should have one line of
//output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop,
//that states how much you like pizza. The output should consist of three 
//or more lines about the kinds of pizza you like and then an additional sentence,
// such as I really love pizza!

const favorite_Pizzas: string [] = ["Pepperoni", "chicken", "BBQ Chicken"];

// Print pizza names
for (const pizza of favorite_Pizzas) {
    console.log(pizza);
}

// Print sentences about liking each pizza
console.log("\n")
for (const pizza of favorite_Pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Print additional sentence
console.log("\nI really love pizza!");


//task # 35 : Animals: Think of at least three different animals that have a 
//common characteristic. Store the names of these animals in a list, and then 
//use a for loop to print out the name of each animal. • Modify your program to 
//print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common.
//You could print a sentence such as Any of these animals would make a great pet!

const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print animal names
for (const animal of animals) {
    console.log(animal);
}
    console.log("\n")

// Print statements about each animal
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print additional sentence about common characteristic
console.log("\n All of these animals would make a great pet!");


//task # 36 : T-Shirt: Write a function called make_shirt() 
//that accepts a size and the text of a message that should be printed
//on the shirt. The function should print a sentence summarizing the size 
//of the shirt and the message printed on it. Call the function.

function make_Shirt(size: string, text: string): void {
    console.log(`You ordered a ${size} shirt that says ${text}`);
}
// Calling the function
make_Shirt("large", "I love TypeScript!");
make_Shirt("medium", "i need a big shirt")


//task # 37 :Large Shirts: Modify the make_shirt() function 
//so that shirts are large by default with a message that reads
//I love TypeScript. Make a large shirt and a medium shirt
//with the default message, and a shirt of any size with a different message.

function make_Shirt(size: string = "large", text: string = " I love TypeScript"): void {
    console.log(`You ordered a ${size} shirt that says${text}`);
}
// Making large shirt with default message
make_Shirt();

// Making medium shirt with default message
make_Shirt("medium");

// Making a shirt of any size with a different message
make_Shirt("small", " Keep coding!");


//task # 38 : Cities: Write a function called describe_city() 
//that accepts the name of a city and its country. The function should print a 
//simple sentence, such as Karachi is in Pakistan. Give the parameter for the
//country a default value. Call your function for three different cities, 
//at least one of which is not in the default country.

function describe_City(city: string, country: string = "pakistan"): void {
    console.log(`${city} is in ${country}`);
}
// Calling the function for three different cities
describe_City("Karachi");
describe_City("Paris", "France");
describe_City("lahore", "pakistan");


//task # 39 : City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
// Testing the function with three city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));


//task # 40 : Album: Write a function called make_album() 
//that builds a Object describing a music album. The function 
//should take in an artist name and an album title, and it should
//return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums.
//Print each return value to show that Objects are storing the album information
//correctly. Add an optional parameter to make_album() that allows you to store
//the number of tracks on an album. If the calling line includes a value for the
//number of tracks, add that value to the album’s Object. Make at least one new 
//function call that includes the number of tracks on an album.

function make_album(artist: string, title: string): {artist: string, title: string} {
    let dictionaries = {
         artist: artist.charAt(0).toUpperCase() + artist.slice(1),
         title: title.charAt(0).toUpperCase() + title.slice(1)
         };
          return dictionaries;
}

// Creating three albums
let album1 = make_album("Ayaan", "light");
let album2 = make_album("Shayaan", "red wave");
let album3 = make_album("Hamza", "seenbreez");

// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);


//task # 41 : Magicians: Make a array of magician’s names.
//Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// Array of magician's names
const magician: string[] = ["ayaan", "rayaan", "bilal"];

// Call the function to show magicians
show_magicians(magician);



//task # 42 : Great Magicians: Start with a copy of your program from 
//Exercise 39. Write a function called make_great() that modifies the 
//array of magicians by adding the phrase the Great to each magician’s name.
//Call show_magicians() to see that the list has actually been modified.


function show_magicians(magicians: string[]): void {
    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
const magicians: string [] = ["rayaan", "ayaan", "rashid", "usman"]

// Call make_great to modify the array
make_great(magicians)

// Call the function to show magicians
show_magicians(magicians)


//task # 43 : Unchanged Magicians: Start with your work from Exercise 40.
//Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in
//a separate array. Call show_magicians() with each array to show that you have one array
//of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}
function make_great2(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}

const magicians3: string[] = ["ayaan", "rayaan", "shayaan"];
const greatMagicians2: string[] = make_great2(magicians3);

show_magicians(magicians3);
show_magicians(greatMagicians2);


//task # 44 : Sandwiches: Write a function that accepts a array of items
//a person wants on a sandwich. The function should have one parameter that
//collects as many items as the function call provides, and it should print a 
//summary of the sandwich that is being ordered. Call the function three times,
//using a different number of arguments each time.


function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with:")
 for (let i = 0; i < items.length; i++) {
           console.log(`- ${items[i]}`)
}
}
console.log("Enjoy your sandwich ayaan!\n");

// Call the function with different numbers of arguments
makeSandwich("capsicum", "chicken", "Tomato");
makeSandwich("beef", "Cheese");
makeSandwich("garlic", "mayo sauce");

//task # 45 : Cars: Write a function that stores information about a car in a 
//Object. The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. Call the 
//function with the required information and two other name-value pairs, 
//such as a color or an optional feature. Print the Object that’s returned to
// make sure all the information was stored correctly.

type car = {
    manufacture: string
    model: string 
    [key: string]: any;
}
function createcar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const myCar: car = createcar("toyota", "corolla", {color: "siver", year: "2024"})
console.log(myCar)