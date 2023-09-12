import "./allBooks.css";
import { useEffect, useState } from "react";
import { getAllBooks } from "../services/bookService";
import { getGenreList } from "../services/genreService";

export const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [chosenGenre, setChosenGenre] = useState(0);
  const [filteredBooks, setFileteredBooks] = useState([]);
  const [genres, setGenre] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllBooks().then((booksArray) => {
      setAllBooks(booksArray);
      console.log(booksArray);
    });

    getGenreList().then((genreArray) => {
      setGenre(genreArray);
      console.log(genreArray);
    });
  }, []);

  useEffect(() => {
    if (chosenGenre > 0) {
      const bookGenre = allBooks.filter(
        (book) => book.genre.id === parseInt(chosenGenre)
      );
      setFileteredBooks(bookGenre);
    } else {
      setFileteredBooks(allBooks);
    }
  }, [chosenGenre, allBooks]);

  useEffect(() => {
    const foundBook = allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    setFileteredBooks(foundBook);
  }, [searchTerm, allBooks]);

  return (
    <div className="books">
      <header className="page-header">
        <div className="drop-down-box">
          <select
            onChange={(event) => {
              setChosenGenre(event.target.value);
            }}
            type="filter"
          >
            <option value="0">Select Genre</option>
            {genres.map((genre) => {
              return (
                <option value={genre.id} key={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </div>
        <h1>All Books</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Here"
            className="search-field"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </header>
      <div className="books-container">
        {filteredBooks.map((book) => {
          return (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.name} className="book-img" />
              <div className="book-name">
                <i>{book.title}</i>
              </div>
              <div className="book-author">{book.author}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
