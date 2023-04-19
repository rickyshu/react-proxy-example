import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import DisplayBoard from "./components/DisplayBoard";
import CreateBook from "./components/CreateBook";
import { getAllBooks, createBook } from "./services/BookService";
import { getAllTodos, createTodo } from "./services/TodoService";
import Footer from "./components/Footer";

function App() {
  const Category = {
    book: "Get All Books",
    todo: "Get All Todos",
  };
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [numberOfTodos, setNumberOfTodos] = useState(0);
  const handleSubmit = () => {
    createBook(bookShelf).then(() => {
      setNumberBooks(numberOfBooks + 1);
    });
  };
  const getAllBook = () => {
    getAllBooks().then((data) => {
      setBooks(data);
      setNumberBooks(data.length);
    });
  };

  const getAllTodo = () => {
    getAllTodos().then((date) => {
      setTodos(date);
      setNumberOfTodos(date.length);
    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === "book") {
      bookShelf.book = e.target.value;
    } else if (e.target.name === "category") {
      bookShelf.category = e.target.value;
    } else if (e.target.name === "author") {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard
          Category={Category.book}
          numberOfBooks={numberOfBooks}
          getAllBook={getAllBook}
        />
        <BookTable books={books} />
        <DisplayBoard
          Category={Category.todo}
          numberOfTodos={numberOfTodos}
          getAllBook={getAllTodo}
        />
        <BookTable books={todos} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
