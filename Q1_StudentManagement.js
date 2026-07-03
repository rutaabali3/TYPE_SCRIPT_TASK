"use strict";
const students = [
    { id: 1, name: "Ali", age: 20, department: "Computer Science", cgpa: 3.45 },
    { id: 2, name: "Sara", age: 21, department: "Software Engineering", cgpa: 3.82 },
    { id: 3, name: "Ahmed", age: 19, department: "Information Technology", cgpa: 3.61 },
    { id: 4, name: "Ayesha", age: 22, department: "Data Science", cgpa: 3.93 },
    { id: 5, name: "Hassan", age: 20, department: "Cyber Security", cgpa: 3.25 },
];
console.log("All Students:");
console.table(students);
const highestCgpaStudent = students.reduce((highest, current) => current.cgpa > highest.cgpa ? current : highest);
console.log("Student With Highest CGPA:");
console.table([highestCgpaStudent]);



