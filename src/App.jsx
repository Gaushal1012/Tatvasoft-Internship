import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Registration />}></Route>
        <Route exact path="/book" element={<Book />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
