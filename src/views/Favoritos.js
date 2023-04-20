import Context from "../Context";
import { useContext } from "react";

export default function Favoritos() {
  const { photos, setPhotos } = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {photos
          .filter((item) => item.liked)
          .map((photo) => (
            <div
              className="foto"
              key={photo.id}
              style={{ backgroundImage: `url(${photo.src.tiny})` }}
            ></div>
          ))}
      </div>
    </div>
  );
}
