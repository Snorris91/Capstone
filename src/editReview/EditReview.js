import "./editReview.css";
import { useEffect, useState } from "react";
import { editReview, getCurrentReviewById } from "../services/reviewService";
import { useNavigate, useParams } from "react-router-dom";

export const EditReview = () => {
  const navigate = useNavigate();
  const [review, setReview] = useState([]);
  const { reviewId } = useParams();

  useEffect(() => {
    getCurrentReviewById(reviewId).then((reviewObj) => {
      setReview(reviewObj[0]);
    });
  }, [reviewId]);

  const handleSave = (event) => {
    event.preventDefault();

    const updateReview = {
      id: review.id,
      bookId: review.bookId,
      userId: review.userId,
      text: review.text,
    };

    editReview(updateReview).then(() => {
      navigate(`/profile`);
    });
  };

  return (
    <form className="form-area">
      <h1><span className="form-title">Edit Your Review</span></h1>
      <fieldset>
        <div className="display-container">
          <div>
            <img src={review.book?.image} alt={review.book?.title} />
          </div>

          <div className="current-review">
            <label>
              <span className="book-title-edit-review">Your Current Review for</span>
              <br></br> <span className="book-title-edit-review">{review.book?.title}</span>:
            </label>
            <textarea
              cols={30}
              rows={10}
              name="review"
              value={review.text ? review.text : ""}
              type="text"
              placeholder="Enter Review Here"
              onChange={(event) => {
                const reviewCopy = { ...review };
                reviewCopy.text = event.target.value;
                setReview(reviewCopy);
              }}
            />
            <button className="edit-review-btn" onClick={handleSave}>Update Review</button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};
