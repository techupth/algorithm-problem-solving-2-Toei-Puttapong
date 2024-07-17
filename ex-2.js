function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = books.length - 1;

  while (left <= right) {
    let midValue = Math.floor((left + right) / 2);
    if (books[midValue].title === searchTitle) {
      return midValue;
    } else if (books[midValue].title < searchTitle) {
      left = midValue + 1;
    } else {
      right = midValue - 1;
    }
  }
  return -1;
}

let books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

let searchBook = "Fahrenheit 451";
let result = findBookIndex(books, searchBook);
console.log(result);
