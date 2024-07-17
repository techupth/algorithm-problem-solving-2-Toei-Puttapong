function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length - 1;

  while (left <= right) {
    let midValue = Math.floor((left + right) / 2);
    if (students[midValue] === searchStudent) {
      return midValue;
    } else if (students[midValue] < searchStudent) {
      left = midValue + 1;
    } else {
      right = midValue - 1;
    }
  }
  return -1;
}

// ตอบคำถามตรงนี้จ้า
let students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];

let searchStudent = "Hannah";

let result = findStudentIndex(students, searchStudent);
console.log(result);
