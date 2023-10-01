import { students } from "./data/sample_data.js";

//Using the every method,  all data has to accomplish with given condition
const result = students.every(student => student.age === 20);

const result2 = students.every(student => student.name.includes('J'))

console.log(result);
console.log(result2);