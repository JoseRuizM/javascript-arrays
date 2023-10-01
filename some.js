import { students } from "./data/sample_data.js";

//find students that are greater than 24 years old
const result = students.some(student => student.age > 24)

console.log(students);

console.log(result);