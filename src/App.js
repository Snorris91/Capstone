import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { GenreList } from "./genres/GenreList";
import { AllBooks } from "./allBooks/AllBooks";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="/allBooks" element={<AllBooks />} />
      </Route>
    </Routes>
  );
}

export default App;
