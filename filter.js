import { students } from "./data/sample_data.js";

//Select elements under some conditions

//without using filter method
const developers = []
for (let i = 0; i < students.length; i++) {
    if(students[i].course === 'Web Development'){
        developers.push(students[i]);
    }    
}

//Filter Method

const result = students.filter((student)=>{
    if(student.course === 'Web Development'){
        return true;
    }
})

// Best way
const result2 = students.filter(student => student.course === 'Web Development')

const ages = students.filter(students => students.age < 24)

console.log(students);
console.log(developers);
console.log(result);
console.log(result2);
console.log(ages);
