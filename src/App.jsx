import { useState } from "react";
import { MainImage } from "@components/MainImage";
import { Buttons } from "@components/Buttons";
import data from "@data/images.json";
import { Gallery } from "./components/Gallery/Gallery";
import shuffleArray from "./utils/shuffleArray";

function App() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoArr, setPhotoArray] = useState(data);
  const selectedPhoto = photoArr[photoIndex];

  const handleSelect = (i) => {
    setPhotoIndex(i);
  };
  const handlePrevious = () => {
    if (photoIndex === 0) setPhotoIndex(photoArr.length - 1);
    else setPhotoIndex(photoIndex - 1);
  };
  const handleRandomizePhoto = () => {
    setPhotoIndex(Math.floor(Math.random() * photoArr.length));
  };
  const handleRandomizeGallery = () => {
    const currentImgId = photoArr[photoIndex].id;
    const shuffled = shuffleArray([...photoArr]);

    const newIndex = shuffled.findIndex((photo) => photo.id === currentImgId);
    setPhotoArray(shuffled);
    setPhotoIndex(newIndex);
  };
  const handleNext = () => {
    if (photoIndex === photoArr.length - 1) setPhotoIndex(0);
    else setPhotoIndex(photoIndex + 1);
  };

  return (
    <>
      <MainImage image={selectedPhoto} />
      <Buttons
        previous={handlePrevious}
        next={handleNext}
        randomPhoto={handleRandomizePhoto}
        randomGallery={handleRandomizeGallery}
      />
      <Gallery
        photoArr={photoArr}
        onSelect={handleSelect}
        selectedPhoto={selectedPhoto}
      />
    </>
  );
}

export default App;
