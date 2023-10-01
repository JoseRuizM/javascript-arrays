import { students, developers } from "./data/sample_data.js";

let ages = 0;
for (let i = 0; i < students.length; i++) {
    ages += students[i].age;
}

const result = students.reduce((total, student) => total + student.age,0)

//using an array to agroup by skills
/**Verify explanation on the following link: 
https://www.youtube.com/watch?v=qqR1enOceVg 
Minute: 42:00 (Reduce section)
**/
const allDevSkills = developers.reduce((allskills,student)=> Array.from(new Set([...allskills, ...student.skills])),[])

//data
console.log(developers);
console.log(students);

//results 
console.log(ages);
console.log(result);
console.log(allDevSkills);