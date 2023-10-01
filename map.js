import { students } from "./data/sample_data.js";

// const fullNames = students.map((student)=>{
//     return student.name + ' ' + student.lastname;
// });

const fullNames = students.map((student)=>student.name + ' ' + student.lastname);

const names = students.map((student)=>{
    return {
        fullName: student.name + ' ' + student.lastname,
        age: student.age,
        course: student.course
    }
});

const studentCourse = students.map((student)=>{
    return {
        ...student,
        title: `${student.name} - ${student.course}`
    }
});


const newCourses = students.map((student)=>({
    ...student,
    course: 'Programming'
}));


//We can use the returned array to apply map and modified our array

const newAge = newCourses.map((student)=> ({
    ...student,
    age: student.age * 2
}));


//concatenate .map

const doubleAge = students.map((student)=>({
    ...student,
    course: 'Programming'
})).map((student)=> ({
    ...student,
    age: student.age * 2
}));


console.log(students)

console.log(fullNames);
console.log(names);
console.log(studentCourse);
console.log(newCourses);

console.log(newAge);
console.log(doubleAge);

/**
 * map is not modifying the main array
 */