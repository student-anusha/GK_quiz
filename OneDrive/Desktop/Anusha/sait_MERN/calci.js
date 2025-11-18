let marks = prompt("Enter your marks:");
console.log("Marks =", marks);
console.log("Data Type of marks =", typeof marks);
let grade = null;
if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else if (marks >= 60) {
  grade = "D";
} else {
  grade = "F";
}
alert("Your grade is: " + grade);
console.log("Grade =", grade);