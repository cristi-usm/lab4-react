import style from "./Buttons.module.css";
import prevImage from "@assets/previous.svg";
import nextImage from "@assets/next.svg";
import randomImage1 from "@assets/random1.svg";
import randomImage2 from "@assets/random2.svg";
import { Button } from "../Button/Button";

export const Buttons = ({ previous, next, randomPhoto, randomGallery }) => {
  return (
    <div className={style.icons}>
      <Button btnImg={prevImage} desc="previous" onClick={previous} />
      <Button
        btnImg={randomImage1}
        desc="randomize image"
        onClick={randomPhoto}
      />
      <Button
        btnImg={randomImage2}
        desc="randomize gallery"
        onClick={randomGallery}
      />
      <Button btnImg={nextImage} desc="next" onClick={next} />
    </div>
  );
};
