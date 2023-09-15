import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { AllBooks } from "../allBooks/AllBooks"
import { Welcome } from "../components/welcome/Welcome"
import { AddBooks } from "../addBooks/AddBooks"
import { Profile } from "../profile/Profile"
import { BookDetails } from "../bookDetails/BookDetails"
import { useEffect, useState } from "react"
import { AddReview } from "../addReview/AddReview"

export const ApplicationViews = () => {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localBookUser = localStorage.getItem("book-user");
    const bookUserObject = JSON.parse(localBookUser);

    setCurrentUser(bookUserObject);
  }, []);


  return <Routes>
  <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />}/>
        <Route path="allBooks">
          <Route index element={<AllBooks />} />
          <Route path=":bookId" element={<BookDetails currentUser={currentUser} />}/>
          <Route path=":bookId/AddReview" element={<AddReview currentUser={currentUser} />}/>
          </Route> 
        <Route path="addBooks" element={<AddBooks />} />
        <Route path="profile" element={<Profile currentUser={currentUser} />} />
      </Route>
      </Routes>
}
