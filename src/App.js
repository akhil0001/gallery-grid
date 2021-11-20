import "./styles.css";
import { getImage } from "./api/getImage";
import { useCallback, useState } from "react";

export default function App() {
  const [imageURLs, setImageURLs] = useState([]);
  const onAddImageClickHandler = useCallback(async () => {
    const imageUrl = await getImage();
    setImageURLs((imageURLs) => [...imageURLs, imageUrl]);
  }, []);
  return (
    <div className="app">
      <button onClick={onAddImageClickHandler}>Add Image </button>
      <div className="image-flex">
        {imageURLs.map((url, index) => (
          <img
            src={url}
            key={index}
            alt="an unfortunate alt text"
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  );
}
