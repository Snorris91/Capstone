export const getExpandedReviews = (currentUser) => {
    return fetch(`http://localhost:8088/reviews?userId=${currentUser.id}&_expand=book&_expand=user
    `).then((res) => res.json())
}

export const postNewReview = (review) => {
    return fetch(`http://localhost:8088/reviews` , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(review),
    })
}