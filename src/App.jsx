import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import CinemaPage from "./page/Cinema";
import AnimePage from "./page/Anime";
import CartoonPage from "./page/Cartoon";
import ContentPage from "./page/Content";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/cinema" element={<CinemaPage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/cartoon" element={<CartoonPage />} />
        <Route path="/content" element={<ContentPage />} />

        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
