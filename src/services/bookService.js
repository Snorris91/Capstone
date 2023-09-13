export const getAllBooks = () => {
    return fetch("http://localhost:8088/books?_expand=genre").then(res => res.json())
}

export const getAllBooksByGenre = () => {
    return fetch("http://localhost:8088/books?_expand=genre").then(res => res.json())
}

export const postNewBook = (book) => {
    return fetch(`http://localhost:8088/books` , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
    })
}