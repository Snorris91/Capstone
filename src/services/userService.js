export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  );
};

export const getUser = () => {
  return fetch(`http://localhost:8088/users`).then((res) => res.json());
};

export const createUser = (customer) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());
};

export const getUserById = (userId) => {
  return fetch(`http://localhost:8088/users?id=${userId}`).then((res) =>
    res.json()
  );
};

export const editUser = (user) => {
  return fetch(`http://localhost:8088/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const getAllUserDetails = (userId) => {
  return fetch(`http://localhost:8088/users/${userId}?_embed=reviews`).then((res) =>
  res.json()
);
}