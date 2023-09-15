import { useEffect, useState } from "react";
import "./profile.css";
import { createUser, getUserById } from "../services/userService";
import { Link, useParams } from "react-router-dom";
import { getExpandedReviews } from "../services/reviewService";

export const Profile = ({ currentUser }) => {
  const [user, setUser] = useState({});

  const [review, setReview] = useState([]);

  useEffect(() => {
    getUserById(currentUser.id).then((userObj) => {
      setUser(userObj[0]);
    });

    getExpandedReviews(currentUser).then((reviewObj) => {
      setReview(reviewObj);
      // console.log(review)
    });
  }, [currentUser]);

  return (
    <>
      <div>
        <header>
          <h1>Welcome {user?.name}</h1>
        </header>
      </div>
      <div className="profile-container">
        <div className="profile-user">
          <h2>{user?.name}</h2>
          <h2>{user?.email}</h2>
          <h2>{user?.phone}</h2>
          <button>KENOBI</button>
        </div>
        <div className="profile-reviews">
          <ul>
            {review.map((review) => {
              return (
                <Link to={`/allBooks/${review.bookId}`}>
                  <li className="review-text" key={review.id}>
                    My Review for <span className="book-title">{review.book.title}</span>:<br></br>~ {review.text}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};
