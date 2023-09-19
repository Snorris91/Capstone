import "./bookDetails.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBookByBookId } from "../services/bookService";
import { getGenreList } from "../services/genreService";

export const BookDetails = () => {
  const [assignedGenre, setAssignedGenre] = useState({});
  const [genre, setGenre] = useState([]);
  const [bookObj, setBook] = useState({});
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBookByBookId(bookId).then((bookObj) => {
      setBook(bookObj);
    });

    getGenreList().then((genreObj) => {
      setGenre(genreObj);
    });
  }, [bookId]);

  useEffect(() => {
    const currentGenre = genre.find((genre) => genre.id === bookObj.genreId);
    setAssignedGenre(currentGenre);
  }, [bookObj, genre]);

  return (
    <div className="container">
      <section className="book-details-container">
        <div className="book-img">
          <Link to="/allBooks">
            <img src={bookObj.image} alt={bookObj.title} />
          </Link>

          <div className="button-area" key={bookObj?.id}>
            <button className="review-btn1"
              onClick={() => {
                navigate(`/allBooks/${bookObj.id}/addReview`);
              }}
            >
              Leave a Review
            </button>
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
              <Link key={review.id} to={`/profile/${review.userId}/profile`}>
                <li className="review">"{review.text}" ~ </li>
              </Link>
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
