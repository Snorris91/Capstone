import { useEffect, useState } from "react";
import "./profile.css";
import { getUserById } from "../services/userService";
import { Link, useNavigate } from "react-router-dom";
import { deleteReview,  getExpandedReviews } from "../services/reviewService";

export const Profile = ({ currentUser }) => {
  const [user, setUser] = useState({});
  const [review, setReview] = useState([]);
  const [rerender, setRerender] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    getUserById(currentUser.id).then((userObj) => {
      setUser(userObj[0]);
    });

    getExpandedReviews(currentUser).then((reviewObj) => {
      setReview(reviewObj);
      // console.log(review)
    });
  }, [currentUser, rerender]);

  const handleDelete = (review) => {
    deleteReview(review).then(() => {
        setRerender(!rerender)
        navigate(`/profile`)
 
      
    })
  }

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
          <button
            onClick={() => {
              navigate(`/profile/${user.id}/edit`);
            }}
          >
            EDIT PROFILE
          </button>
        </div>
        <div className="profile-reviews">
          <ul>
            {review.map((review) => {
              return (
                <div key={review.id}>
                  <Link to={`/allBooks/${review.bookId}`} value={review.userId}>
                    <li className="review-text" value={review.id}>
                      My Review for{" "}
                      <span className="book-title">{review.book.title}</span>:
                      <br></br>~ {review.text}
                    </li>
                  </Link>{" "}
                  <div>
                    <button onClick={() => {
                      navigate(`/profile/${review.id}/review`)
                    }}>Edit</button>
                    <button onClick={() => {handleDelete(review)}}>Delete</button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};
