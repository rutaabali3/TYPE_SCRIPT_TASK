"use strict";
const employees = [
    { employeeId: 1, name: "Kamran", department: "IT", salary: 95000, experienceYears: 6 },
    { employeeId: 2, name: "Maha", department: "HR", salary: 70000, experienceYears: 4 },
    { employeeId: 3, name: "Danish", department: "Finance", salary: 110000, experienceYears: 8 },
    { employeeId: 4, name: "Iqra", department: "Marketing", salary: 85000, experienceYears: 5 },
    { employeeId: 5, name: "Saad", department: "Operations", salary: 120000, experienceYears: 9 },
];
console.log("All Employees:");
console.table(employees);
const highestSalaryEmployee = employees.reduce((highest, current) => current.salary > highest.salary ? current : highest);
console.log("Employee With Highest Salary:");
console.table([highestSalaryEmployee]);
console.log("Employees With More Than 5 Years Experience:");
console.table(employees.filter((employee) => employee.experienceYears > 5));
