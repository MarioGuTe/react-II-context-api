import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react";
import Context from "../Context";

export default function Home() {
  const { photos, setPhotos } = useContext(Context);

  const setFavorite = (id) => {
    const photoIndex = photos.findIndex((f) => f.id === id);
    photos[photoIndex].liked = !photos[photoIndex].liked;
    setPhotos([...photos]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.map((photo) => (
        <div
          className="foto"
          key={photo.id}
          style={{ backgroundImage: `url(${photo.src.tiny})` }}
          onClick={() => {
            setFavorite(photo.id);
          }}
        >
          <Heart filled={photo.liked} />
          <p>{photo.alt}</p>
        </div>
      ))}
    </div>
  );
}
