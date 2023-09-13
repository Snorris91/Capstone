import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { AllBooks } from "../allBooks/AllBooks"
import { Welcome } from "../components/welcome/Welcome"
import { AddBooks } from "../addBooks/AddBooks"

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
        <Route path="/allBooks" element={<AllBooks />} />
        <Route path="/addBooks" element={<AddBooks />} />
      </Route>
      </Routes>
}
