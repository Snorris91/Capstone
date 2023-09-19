import "./editProfile.css"
import { useEffect, useState } from "react";
import { editUser, getUserById } from "../services/userService";
import { useNavigate } from "react-router-dom";

export const EditProfile = ({ currentUser }) => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getUserById(currentUser.id).then((userObj) => {
      setUser(userObj[0]);
    });
  }, [currentUser.id]);

  const handleSave = (event) => {
    event.preventDefault();

    const updatedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };

    editUser(updatedUser).then(() => {
      navigate(`/profile`);
    });
  };

  return (
    <form className="form-container">
      <h1 className="title">Edit Profile</h1>
      <fieldset>
        <div>
          <label>Name:</label>
          <input
            name="name"
            value={user?.name ? user?.name : ""}
            type="text"
            placeholder="user Name"
            onChange={(event) => {
              const userCopy = { ...user };
              userCopy.name = event.target.value;
              setUser(userCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <div>
            <label>Email:</label>
            <input
              name="email"
              value={user?.email ? user?.email : ""}
              type="text"
              placeholder="user Email"
              onChange={(event) => {
                const userCopy = { ...user };
                userCopy.email = event.target.value;
                setUser(userCopy);
              }}
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div>
          <div>
            <label>Phone Number:</label>
            <input
              name="phone"
              value={user?.phone ? user?.phone : ""}
              type="text"
              maxLength={10}
              placeholder="user Phone"
              onChange={(event) => {
                const userCopy = { ...user };
                userCopy.phone = event.target.value;
                setUser(userCopy);
              }}
            />
          </div>
          <div>
            <button className="btn-area" onClick={handleSave}>Save</button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};
