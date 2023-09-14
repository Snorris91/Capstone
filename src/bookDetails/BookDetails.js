import { useEffect, useState } from "react";
import "./bookDetails.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBookByBookId } from "../services/bookService";
import { getUser } from "../services/userService";
import { getGenreList } from "../services/genreService";

export const BookDetails = () => {
  const [user, setUser] = useState([]);
  const [assignedGenre, setAssignedGenre] = useState({});
  const [genre, setGenre] = useState([]);
  const [bookObj, setBook] = useState({});
  const { bookId } = useParams();
  // const navigate = useNavigate()

  useEffect(() => {
    getBookByBookId(bookId).then((bookObj) => {
      setBook(bookObj);
      console.log(bookObj);
    });

    getGenreList().then((genreObj) => {
      setGenre(genreObj);
    });

    getUser().then((userObj) => {
      setUser(userObj);
    });
  }, [bookId]);

  useEffect(() => {
    const currentGenre = genre.find((genre) => genre.id === bookObj.genreId);
    setAssignedGenre(currentGenre);
    console.log(currentGenre);
  }, [bookObj, genre]);

  return (
    <div className="container">
      <section className="book-details-container">
        <div className="book-img">
          <Link to="/allBooks">
            <img src={bookObj.image} alt={bookObj.title} />
          </Link>

          <div>
            <button>Leave a Review</button>
          </div>
        </div>
        <div className="details">
          <h1>
            Book Title<br></br>
            <span className="detail-title">{bookObj.title}</span>
          </h1>
          <h1>
            Author<br></br>
            <span className="detail-author">{bookObj.author}</span>
          </h1>
          <h1>
            Genre<br></br>
            <span className="detail-genre">{assignedGenre?.name}</span>
          </h1>
        </div>
        <div>
          {bookObj.reviews?.map((review) => {
            return (
              <p>"{review.text}"</p> //insert link to user profile here
            );
          })}
        </div>
      </section>

      <div>
        <p className="description">{bookObj.description}</p>
      </div>
    </div>
  );
};
