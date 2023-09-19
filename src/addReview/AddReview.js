import "./addReview.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookByBookId } from "../services/bookService";
import { getUserById } from "../services/userService";
import { postNewReview } from "../services/reviewService";

export const AddReview = ({ currentUser }) => {
  const [book, setBook] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  const { bookId } = useParams();
  useEffect(() => {
    getBookByBookId(bookId).then((bookObj) => {
      setBook(bookObj);
    });

    getUserById(currentUser.id).then((userObj) => {
      setUser(userObj[0]);
    });
  }, [bookId, currentUser.id]);

  const [newReview, setNewReview] = useState({
    bookId: parseInt(bookId),
    userId: currentUser.id,
    text: "",
  });

  const handleInputChange = (e) => {
    const itemCopy = { ...newReview };
    itemCopy[e.target.name] = e.target.value;
    setNewReview(itemCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    postNewReview(newReview).then(() => {
        navigate(`/profile`)
    })
  }

  return (
    <>
      <h1>ADD BOOK REVIEW</h1>
      <div className="add-review-container">
        <div className="book-details">
          <img src={book.image} alt={book.title} />
          <h2><span className="book-title">{book.title}</span></h2>
        </div>
        <form className="book-form">
          <h1>{user?.name}</h1>
          <textarea
            name="text"
            className="text"
            rows={10}
            placeholder="Enter Your Review Here"
            required
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleSubmit} className="review-btn">Submit Review</button>
        </form>
      </div>
    </>
  );
};
