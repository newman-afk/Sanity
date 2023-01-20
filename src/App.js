import Notes from "./componets/Notes/Notes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Notes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
