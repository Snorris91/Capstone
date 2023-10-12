import { Link, useParams } from "react-router-dom";
import "./otherProfile.css";
import { useEffect, useState } from "react";
import { getAllUserDetails } from "../services/userService";

export const OtherProfile = () => {
  const [user, setUser] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    getAllUserDetails(userId).then((userObj) => {
      setUser(userObj);
    });
  }, [userId]);

  return (
    <>
      <h1>Welcome to {user?.name}'s Profile</h1>
      <div className="main-container">
        <div className="user-details">
          <h2>{user?.name}</h2>
          <h2>{user?.email}</h2>
          <h2>{user?.phone}</h2>
        </div>
        <div className="review-details">
          <h2 className="review-title">My Reviews</h2>
          <p className="details-other">Click a review to visit the Book!</p>
          {user.reviews?.map((review) => {
            return (
              <Link key={review?.id} to={`/allBooks/${review?.bookId}`}>
                <li className="review-text">{review?.text}</li>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
