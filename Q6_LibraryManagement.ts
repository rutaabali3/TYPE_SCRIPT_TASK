interface Book {
  bookId: number;
  title: string;
  author: string;
  category: string;
  available: boolean;
}

const books: Book[] = [
  { bookId: 1, title: "Clean Code", author: "Robert C. Martin", category: "Programming", available: true },
  { bookId: 2, title: "Atomic Habits", author: "James Clear", category: "Self Help", available: false },
  { bookId: 3, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", available: true },
  { bookId: 4, title: "Deep Work", author: "Cal Newport", category: "Productivity", available: true },
  { bookId: 5, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", available: false },
];

const availableBooks = books.filter((book) => book.available);

console.log("All Books:");
console.table(books);

console.log("Available Books:");
console.table(availableBooks);

console.log(`Total Available Books: ${availableBooks.length}`);
