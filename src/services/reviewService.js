export const getExpandedReviews = (currentUser) => {
  return fetch(`http://localhost:8088/reviews?userId=${currentUser.id}&_expand=book&_expand=user
    `).then((res) => res.json());
};

export const postNewReview = (review) => {
  return fetch(`http://localhost:8088/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
};

export const deleteReview = (review) => {
  return fetch(`http://localhost:8088/reviews/${review.id}`, {
    method: "DELETE",
  });
};

export const getCurrentReviewById = (reviewId) => {
  return fetch(
    `http://localhost:8088/reviews?id=${reviewId}&_expand=book&_expand=user`
  ).then((res) => res.json());
};

export const editReview = (review) => {
  return fetch(`http://localhost:8088/reviews/${review.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  }).then((res) => res.json());
};
