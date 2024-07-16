// Question: Create a function to reverse a string while preserving non-alphabetic characters in their original positions.

// Write a JavaScript function preserveNonAlphabeticReverse that takes a string str as input and returns a new string where alphabetic characters are reversed, while non-alphabetic characters remain unchanged.

// function preserveNonAlphabeticReverse(str){
//     var Arr = str.split('');   //['z', 'a', 'f', 'a', '9', 'r'] 
//     console.log(Arr);

//     var i = 0;
//     var j = Arr.length - 1;
//     var checker = (a)=>{
//         return (a.charCodeAt()>=65 && a.charCodeAt()<=90) || (a.charCodeAt()>=97 && a.charCodeAt()<=122);
//     }
//     while(i<j){  
//         if(checker(Arr[i]) && checker(Arr[j]))
//         {
//             [Arr[i],Arr[j]] = [Arr[j],Arr[i]];
//             i++;
//             j--;
//         }
//         if(!checker(Arr[i]))
//         {
//             i++;
//         }
        
//         if(!checker(Arr[j]))
//         {
//             j--;
//         }
//     }
//     console.log(Arr.join(''));
// }
// preserveNonAlphabeticReverse("Za6fa7r");
                    //        01
                    //        53
                    // z  9  f  a  a  r

                    // r  9  f  a  a  z


                     
////////////

// Question: Manipulate an array of objects representing students' grades.
// You have an array grades containing objects with student names and their respective grades. Perform the following operations:
// Map: Transform each object to only include the student's name and their grade as a letter grade ('A', 'B', 'C', 'D', 'F') based on the numerical grade.
// Filter: Select only students who have passed (grade of 'A', 'B', or 'C').
// Reduce: Calculate the average grade of the selected students.

// let Arr = [
//     { name: "Alice", grade: 85 },
//     { name: "Bob", grade: 76 },
//     { name: "Charlie", grade: 90 },
//     { name: "David", grade: 88 },
//     { name: "Eve", grade: 92 },
//     { name: "Frank", grade: 81 },
//     { name: "Grace", grade: 95 },
//     { name: "Hannah", grade: 87 },
//     { name: "Isaac", grade: 89 },
//     { name: "Jack", grade: 83 },
//     { name: "Katie", grade: 79 },
//     { name: "Liam", grade: 91 },
//     { name: "Mia", grade: 84 },
//     { name: "Nathan", grade: 82 },
//     { name: "Olivia", grade: 77 }
// ];
// function All(a){
//     if(a.grade>93)
//     {
//         a.agrade = "A";
//     }
//     else if(a.grade>90)
//     {
//         a.agrade = "B";
//     }
//     else if(a.grade>85)
//     {
//         a.agrade = "C";
//     }
//     else if(a.grade>=80)
//     {
//         a.agrade = "D";
//     }
//     else{
//         a.agrade = 'F';
//     }
//     return a;
// }
// Arr.map((v)=>{
//     return All(v);
// });

// console.log(Arr);

// var ans = Arr.filter((v)=>{
//     return v.agrade=='A' || v.agrade=='B' || v.agrade=='C';
// });

// var finals = ans.reduce((a,b)=>{
//     console.log(a.grade,b.grade,a.grade+b.grade);
    
//     return  a.grade+b.grade;
// });


// console.log(finals);

////////////////////
// Question: Create a function to retrieve information from a nested object structure.
// You have an object organization that contains information about departments and employees. Implement the following operations:

// Optional Chaining: Use optional chaining to safely retrieve the name of the manager of a specific department.

// Nullish Coalescing: Use nullish coalescing to provide a default value if the manager's name is not present.