// 1. **Basic Object Creation and Access:**
//- Create an object `person` with properties `name`, `age`, and `city`. Access and print each property using both dot and bracket notation.
// const  person = {
//     fname : "Mohak",
//     age : 1,
//     city  : "Apna Ghar"
// };

// console.log(person.fname);
// console.log(person['city']);



   
// 2. **Iterating over Object Properties:**
//    - Create an object `car` with properties `brand`, `model`, and `year`. Use a `for...in` loop to iterate over all the properties of the `car` object and print them.
// const car = {
//     brand : "ABC",
//     model : "xyz-12",
//     year  : 2050
// };
// for (const key in car) {
//     console.log(key,":",car[key]);
// }


// 3. **Computed Properties and Methods:**
//    - Create an object `user` with a property `username`. Prompt the user for a property name and assign a value using computed property syntax (`user[propertyName] = propertyValue`). Print the updated `user` object.

// var uname = "zafar";
// var temp = "username";
// const user = {
//     [temp] : uname
// }
// console.log(user);

// user[temp]  = "Z";
// console.log(user);


// 4. **Spread Operator in Objects:**
//    - Create two objects: `person1` with properties `name` and `age`, and `person2` with properties `city` and `country`. Use the spread operator to create a third object `person3` that combines properties from both `person1` and `person2`. Print `person3`.

// const person1 = {
//     fname : "Mohak",
//     age : 2
// }
// const person2 = {
//     city : "Science city",
//     country : "Ni bataunga"
// }

// const person3 = {...person1,...person2};
// console.log(person3);



// 5. **Object Destructuring:**
//    - Create an object `student` with properties `name`, `age`, and `grade`. Use object destructuring to extract and print the `name` and `grade` properties.

// 6. **Objects Inside Array:**
//    - Create an array `library` containing multiple objects where each object represents a book with properties `title`, `author`, and `genre`. Write a function to iterate through the `library` array and print all book titles.

// 7. **Nested Destructuring:**
//    - Create an object `organization` with properties `name` and `address`, where `address` itself is an object with properties `city` and `country`. Use nested destructuring to extract and print `name`, `city`, and `country` directly.

// 8. **Object Methods:**
//    - Create an object `calculator` with methods `add`, `subtract`, `multiply`, and `divide` that perform basic arithmetic operations. Test each method by performing calculations and printing the results.

// 9. **Object Prototype and Inheritance:**
//    - Create a base object `Animal` with properties `name` and `type`. Create a derived object `Dog` that inherits from `Animal` and adds a method `bark()`. Test the `bark()` method on an instance of `Dog`.

// 10. **Object Serialization and Deserialization:**
//     - Convert an object `student` with properties `name`, `age`, and `grade` into a JSON string. Parse the JSON string back into an object and print its properties.
