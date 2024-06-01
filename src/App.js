import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddBlogPage from "./Components/AddBlogPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/view" element={<AddBlogPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
