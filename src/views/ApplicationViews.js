import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { AllBooks } from "../allBooks/AllBooks"
import { Welcome } from "../components/welcome/Welcome"
import { AddBooks } from "../addBooks/AddBooks"
import { Profile } from "../profile/Profile"
import { BookDetails } from "../bookDetails/BookDetails"

export const ApplicationViews = () => {
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
          <Route index element={<AllBooks/>} />
          <Route path=":bookId" element={<BookDetails />}/>
          </Route> 
        <Route path="addBooks" element={<AddBooks />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      </Routes>
}
