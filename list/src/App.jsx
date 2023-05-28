import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import SingleItemPage from "./pages/SingleItemPage";
import Pagination from "./pages/Pagination";
import Infinite from "./pages/Infinite";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to={"/pagination"}
          style={{
            padding: "1em 2em",
            backgroundColor: "greenyellow",
            color: "black",
          }}
        >
          Pagination Page
        </NavLink>

        <NavLink
          to={"/infinite"}
          style={{
            padding: "1em 2em",
            backgroundColor: "greenyellow",
            color: "black",
          }}
        >
          Infinite
        </NavLink>
      </nav>
      <Routes>
        <Route exact path="/pagination" Component={Pagination} />
        <Route exact path="/infinite" Component={Infinite} />
        <Route path="/:item/:id" Component={SingleItemPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
