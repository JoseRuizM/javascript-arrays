import { students } from "./data/sample_data.js";


const sortedStudents = students.sort((studentA, studentB) => {
    if(studentA.age > studentB.age){
        return 1;
    }else{
        return -1;
    }
});

const sortedStudentsBw = students.sort((a,b)=> a.age > b.age ? 1 : -1)

console.log(students);

console.log(sortedStudents)
console.log(sortedStudentsBw)