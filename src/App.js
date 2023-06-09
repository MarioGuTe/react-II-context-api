import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const endpoint = "/fotos.json";

  const getData = async () => {
    const response = await fetch(endpoint);
    let { photos } = await response.json();

    photos = photos.map((item) => {
      return {
        id: item.id,
        src: item.src,
        alt: item.alt,
        liked: item.liked,
      };
    });
    setPhotos(photos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ photos, setPhotos }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
