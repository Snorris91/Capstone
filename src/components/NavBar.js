import { Link, useNavigate } from "react-router-dom";


import "./NavBar.css";

export const NavBar = () => {
    const navigate = useNavigate()

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/allBooks">All Books</Link>
      </li>
      <li className="navbar-item">
        <Link to="/addBooks">Add Book</Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile">Profile</Link>
      </li>
      {localStorage.getItem("book-user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("book-user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
