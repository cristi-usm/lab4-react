import { useMemo, useState } from "react";

import MainImage from "../MainImage/mainImage.jsx";
import Controls from "../Controls/controls.jsx";
import ThumbnailList from "../ThumbnailList/thumbnaiList.jsx";

import styles from "./gallery.module.css";
import imagesData from "../../data/images.json";

export default function Gallery() {
  const [images, setImages] = useState(imagesData);
  const [selected, setSelected] = useState(0);

  const current = useMemo(() => images[selected], [images, selected]);

  function next() {
    if (!images.length) return;
    setSelected((i) => (i + 1) % images.length);
  }

  function prev() {
    if (!images.length) return;
    setSelected((i) => (i - 1 + images.length) % images.length);
  }

  function randomImage() {
    if (!images.length) return;
    if (images.length === 1) return;
    let r = selected;
    while (r === selected) r = Math.floor(Math.random() * images.length);
    setSelected(r);
  }

  function shuffle() {
    const currentId = images[selected]?.id;
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setImages(shuffled);

    const newIndex = shuffled.findIndex((x) => x.id === currentId);
    setSelected(newIndex >= 0 ? newIndex : 0);
  }

  return (
    <div className={styles.gallery}>
      <h1 className={styles.gallery__title}>😺 Galerie de Pisici</h1>

      <div className={styles.gallery__main}>
        <MainImage image={current} />
      </div>

      <Controls prev={prev} next={next} randomImage={randomImage} shuffle={shuffle} />

      <ThumbnailList images={images} selected={selected} setSelected={setSelected} />
    </div>
  );
}