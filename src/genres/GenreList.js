import { useEffect, useState } from "react"
import { getGenreList } from "../services/genreService"




export const GenreList = () => {
    const [genres, setGenre] = useState([])

    useEffect(() => {
        getGenreList().then((genreArray) => {
            setGenre(genreArray)
            console.log(genres)
        })
    },[])


    return (
        <div>
            <select>
                <option value="0">Select Genre</option>
                {genres.map((genre) => {
                    return (
                        <option value={genre.id} key={genre.id}>{genre.name}</option>
                    )
                })}
            </select>
        </div>
    )
}