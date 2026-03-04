import styles from "./controls.module.css";

import previous from "../../assets/previous.svg";
import nextIcon from "../../assets/next.svg";
import random1 from "../../assets/random1.svg";
import random2 from "../../assets/random2.svg";

export default function Controls({ prev, next, randomImage, shuffle }) {
  return (
    <div className={styles.controls}>
      
      <button className={styles.controls__btn} onClick={prev}>
        <img src={previous} alt="Previous" />
      </button>

      <button className={styles.controls__btn} onClick={randomImage}>
        <img src={random1} alt="Random image" />
      </button>

      <button className={styles.controls__btn} onClick={shuffle}>
        <img src={random2} alt="Shuffle images" />
      </button>

      <button className={styles.controls__btn} onClick={next}>
        <img src={nextIcon} alt="Next" />
      </button>

    </div>
  );
}