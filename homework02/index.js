const { Book } = require("./book.js");
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let books = [];

function askBookInfo(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function create() {
  const name = await askBookInfo("Enter book name: ");
  const author = await askBookInfo("Enter author name: ");
  const year = await askBookInfo("Enter year: ");
  const genre = await askBookInfo("Enter genre: ");

  books.push(new Book(name, author, year, genre));

  booktoAdd = JSON.stringify(books);

  try {
    fs.appendFile("myBooks.json", booktoAdd, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  } catch (err) {
    console.error(err);
  }

  rl.close();
}

try {
  const bookJson = fs.readFileSync("myBooks.json", "utf8");
  books = bookJson ? JSON.parse(bookJson) : [];
} catch (err) {
  console.error(err);
}

create();
