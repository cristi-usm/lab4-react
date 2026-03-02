import { useState } from "react";
import Button from "./Button";
import data from "../src/data/images.json";
import "./App.css";
function App() {
  const [currImg, setCurrImg] = useState(data[0].url);
  const [images, setImages] = useState(data);

  const index = images.findIndex((image) => image.url === currImg);

  function nextImg() {
    setCurrImg(images[(index + 1) % images.length].url);
  }

  function prevImg() {
    setCurrImg(images[(index - 1 + images.length) % images.length].url);
  }

  function randomImg() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomElement = images[randomIndex].url;
    setCurrImg(randomElement);
  }

  function randomArrangement() {
    const randomDisplay = [...images].sort(() => 0.5 - Math.random());
    setImages(randomDisplay);
  }
  return (
    <>
      <img src={currImg} className="current-image" />
      <div className="img-container">
        {images.map((image) => (
          <img key={image.id} src={image.url} />
        ))}
      </div>
      <div className="buttons-container">
        <Button name="Urmatoarea imagine" btnFunc={nextImg}></Button>
        <Button name="Imaginea anterioara" btnFunc={prevImg}></Button>
        <Button name="Imagine aleatoare" btnFunc={randomImg}></Button>
        <Button name="Aranjare aleatoare" btnFunc={randomArrangement}></Button>
      </div>
    </>
  );
}

export default App;
