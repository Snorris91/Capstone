export const getAllBooks = () => {
    return fetch("http://localhost:8088/books?_expand=genre").then(res => res.json())
}

export const getAllBooksByGenre = () => {
    return fetch("http://localhost:8088/books?_expand=genre").then(res => res.json())
}