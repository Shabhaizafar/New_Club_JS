// Question 1: Basics (5 marks)
// Create a function createSecretMessage that takes a string message and returns a new string with each letter shifted by three positions in the alphabet.
// Wrap from 'z' to 'a' if needed. Non-alphabetic characters should remain unchanged.
// Example:
// createSecretMessage("hello"); // "khoor"
// createSecretMessage("hello, world!"); // "khoor, zruog!"

// var Str = "hello";
// var temp = "";
// function createSecretMessage(Str)
// {
// for (const iterator of Str) {
//     if(iterator.charCodeAt()>=65  && iterator.charCodeAt()<=90)
//     {
//         temp+=String.fromCharCode(iterator.charCodeAt()+3);
//     }
//     else if(iterator.charCodeAt()>=97 && iterator.charCodeAt()<=122)
//     {
//         temp+=String.fromCharCode(iterator.charCodeAt()+3);
//     }
//     else
//     {
//         temp+=iterator;
//     }
// }
// return temp;
// }
// var output = createSecretMessage(Str);
// console.log(output);

// -------------------------------------------------------
// Question 2: Arrays - Map, Filter, Reduce (8 marks)
// Given an array of strings containing both words and numbers, perform the following operations:
// 1. Use the map method to transform each word to uppercase and each number to its square.
// 2. Use the filter method to select only the elements that are strings.
// 3. Use the reduce method to concatenate all the filtered strings.
// Example:
// const data = ["hello", 5, "world", 3, "foo", 2];
// // Step 1: ["HELLO", 25, "WORLD", 9, "FOO", 4]
// // Step 2: ["HELLO", "WORLD", "FOO"]
// // Step 3: "HELLOWORLDFOO"

// const data = ["hello", 5, "world", 3, "foo", 2];
// // console.log(data);
// function All(data){
//     var newArr = data.map((v)=>{
//         if(typeof(v)=='string')
//         {
//             return v.toUpperCase();
//         }
//         else if(typeof(v)=='number')
//             {
//               return  v*v;
//             }
//     });
//     console.log(newArr);
    
//     var StrArr = newArr.filter((v)=>{
//         return typeof(v)=='string';
//     });
//     console.log(StrArr);
    
//     var Output = StrArr.reduce(
//         function(c,p){
//             return c+p;
//         }
//     );
    
//     console.log(Output);
// }
// All(data);
// ---------------------------------------
// Question 3: Objects and Optional Chaining (5 marks)
// Create a function getUserCountry that takes a user object and returns the country the user lives in. Handle cases where the user object or address
// information might be nested at different levels and use optional chaining.
// Example:
// const user = {
//  name: "John",
//  address: {
//  location: {
//  city: "Paris",
//  country: "France"
//  }
//  }
// };
// getUserCountry(user); // "France"

// const user = {
//     name: "John",
//     address: {
//     location: {
//     city: "Paris",
//     country: "France"
//     }
//     }
//    };

// function getUserCountry(user){
// return user?.address?.location?.country;
// }
// var output = getUserCountry(user);
// console.log(output);

// ---------------------------------------------
// Consider a menu of dishes offered by a restaurant. Each dish object contains information about its name, ingredients, and whether it is vegetarian-friendly
// or not. Write two functions:
// 1. areAllVegetarian that checks if all dishes on the menu are vegetarian-friendly.
// 2. hasGlutenFreeOption that checks if there is any gluten-free dish on the menu.
// Example:
// const menu = [
//  { name: "Vegetable Stir Fry", ingredients: ["vegetables", "soy sauce"], vegetarian: true, glutenFree: true },
//  { name: "Beef Burger", ingredients: ["beef patty", "cheese", "bun"], vegetarian: false, glutenFree: false },
//  { name: "Quinoa Salad", ingredients: ["quinoa", "vegetables", "dressing"], vegetarian: true, glutenFree: true }
// ];
// areAllVegetarian(menu); // false
// hasGlutenFreeOption(menu); // true


const menu = [
    { name: "Vegetable Stir Fry", ingredients: ["vegetables", "soy sauce"], vegetarian: true, glutenFree: false },
    { name: "Beef Burger", ingredients: ["beef patty", "cheese", "bun"], vegetarian: false, glutenFree: true },
    { name: "Quinoa Salad", ingredients: ["quinoa", "vegetables", "dressing"], vegetarian: true, glutenFree: false }
];
   
// console.log(menu);
// var ans= true;

// function areAllVegetarian(menu){

//     menu.forEach(element => {
//         for (const key in element) {
//             if(key=='vegetarian' && element[key]==false)
//                 {
//                     ans = false;
//                 }
//             }
//         });
//         return ans;
// }
// var output1 = areAllVegetarian(menu);
// console.log(output1);


// var ans = menu.find(
//     function (v){
//         return v.glutenFree == true;
//     }
// );
// console.log((typeof(ans?.glutenFree)=='undefined')? false : true);
// -------------------------------------------
// Question 5: Sets and Maps (6 marks)
// 1. Create a set of unique words from the text of the first paragraph of a famous novel or any lengthy text of your choice.
// 2. Create a map that counts the occurrences of each word in the paragraph.
// Example:
// const paragraph = "It was the best of times, it was the worst of times, ...";
// // Set: {"It", "was", "the", "best", "of", "times", ...}
// // Map: { "It" => 2, "was" => 2, "the" => 2, "best" => 1, "of" => 2, "times" => 2, ... }
// const paragraph = "It was the best of times, it was the worst of times".toLowerCase();

// var mySet = new Set(paragraph.toLowerCase().split(' '));
// console.log(mySet);

// var myMap = new Map();

// for (const iterator of paragraph.split(' ')) {
//     var count = 0;
//     for (const iterator2 of paragraph.split(' ')) {
//         if(iterator==iterator2)
//         {
//             count++;
//        }
//     }
//     myMap.set(iterator,count);
// }
// console.log(myMap);