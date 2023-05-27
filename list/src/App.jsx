import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllDataPage from "./pages/AllDataPage";
import SingleItemPage from "./pages/SingleItemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={AllDataPage} />
        <Route path="/:item:id" Component={SingleItemPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
