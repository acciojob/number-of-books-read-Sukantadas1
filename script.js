const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
   if (!library || !library.books || !Array.isArray(library.books)) {
    // Return 0 if the input is not valid
    return 0;
  }

  // Filter the books that have been read (readingStatus is true)
  const readBooks = library.books.filter(book => book.readingStatus === true);

  // Return the count of read books
  return readBooks.length;
};

// Do not change the code below

alert(numberOfBooksRead());
