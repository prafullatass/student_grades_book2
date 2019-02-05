const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {} // You'll need to change this line of code

const addToGrades = (grade) => {
    if (grades.hasOwnProperty(grade))
        grades[grade]++
    else
        grades[grade] = 1
}

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
    current_grade = scores[i]
    if (current_grade > 90)
        addToGrades("A")
    else if (current_grade > 80) {
        addToGrades("B")
    } else if (current_grade > 70) {
        addToGrades("C")
    } else if (current_grade > 60) {
        addToGrades("D")
    } else if (current_grade > 50)
        addToGrades("F")
}

// all grades
console.log("Grade and No. of students got that score")
for (const key in grades) {
    if (grades.hasOwnProperty(key)) {
        const element = grades[key];
        console.info(key, element)
    }
}

//What is the lowest score? Sort the array and find out.
scores.sort((a, b) => a - b)
console.log(`Ascending order : ${scores.join("  ")}`)
console.log(`Lowest score is : ${scores[0]}`)

//What is the highest score?
console.log(`Highest score is : ${scores[scores.length - 1]}`)
//OR
scores.sort((a, b) => b - a)
console.log(`desending order : ${scores.join("  ")}`)
console.log(`Highest score is : ${scores[0]}`)

//Which grade had the most students achieve it?
let currentGradeCount = 0
let keyOfStudent = ""
for (const key in grades) {
    if (grades.hasOwnProperty(key)) {
        const element = grades[key];

        if (element > currentGradeCount || keyOfStudent === ""){
            currentGradeCount = element
            keyOfStudent = key
        }
    }
}
console.log(`${keyOfStudent} has most ${currentGradeCount} students`)

//Which grade had the fewest students achieve it?
currentGradeCount = 0
 keyOfStudent = ""
for (const key in grades) {
    if (grades.hasOwnProperty(key)) {
        const element = grades[key];

        if (element < currentGradeCount || keyOfStudent === ""){
            currentGradeCount = element
            keyOfStudent = key
        }
    }
}
console.log(`${keyOfStudent} has least  ${currentGradeCount} students`)


