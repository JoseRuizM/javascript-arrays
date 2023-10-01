import { students } from "./data/sample_data.js";


// for(let i=0;i<students.length;i++){
//     console.log(students[i]);
// }

//To add names to an array
const fullNames = [];

students.forEach((student, index, students)=> {
    console.log(`El estudiante ${student.name} ${student.lastname} esta inscrito al curso de ${student.course}`);

    // console.log(index);
    // console.log(students);
});


students.forEach((student)=> fullNames.push(student.name + ' ' + student.lastname))

console.log(fullNames)

