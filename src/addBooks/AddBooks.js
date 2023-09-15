import { useEffect, useState } from "react";
import { getGenreList } from "../services/genreService";
import { useNavigate } from "react-router-dom";
import { postNewBook } from "../services/bookService";
import "./addBooks.css"

export const AddBooks = () => {
  const [genres, setGenre] = useState([]);
    const navigate = useNavigate()

  const [newItem, setNewItem] = useState({
    title: "",
    author: "",
    genreId: 0,
    description: "",
    image: ""

  })

  useEffect(() => {
    getGenreList().then((genreArray) => {
      setGenre(genreArray);
    });
  }, []);


  const handleInputChange = (e) => {
    const itemCopy = {...newItem}
    itemCopy[e.target.name] = e.target.value
    setNewItem(itemCopy)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newBook = {
        title: newItem.title,
        author: newItem.author,
        genreId: parseInt(newItem.genreId),
        description: newItem.description,
        image: newItem.image
    }

    postNewBook(newBook).then(() => {
        navigate("/allBooks")
    })
  }

  return (
    <form className="form"> 
      <h1>Add A New Book!</h1>
      <fieldset>
        <div>
          <label>Book Title: </label>
          <input
            name="title"
            type="text"
            className="form-field"
            placeholder="Title of Book Here"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Book Author: </label>
          <input
            name="author"
            type="text"
            className="form-field"
            placeholder="Book Author Here"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Book Genre: </label>
          
            <select className="form-field" name="genreId" required
            onChange={handleInputChange}>
              <option value="0">Select Genre</option>
              {genres.map((genre) => {
                return (
                  <option  value={genre.id} key={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
          
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Discription: </label>
          <textarea
            name="description"
            type="text"
            rows="10"
            className="form-field-des"
            placeholder="Enter A Bried Description of The Book"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Book Title: </label>
          <input
            name="image"
            type="text"
            className="form-field"
            placeholder="Paste A Image URL"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <button className="btn" onClick={handleSubmit}>Submit Book So Others Can Enjoy</button>
    </form>
  );
};
