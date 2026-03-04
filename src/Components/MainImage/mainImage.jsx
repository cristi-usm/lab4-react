import styles from "./mainImage.module.css";

export default function MainImage({ image }) {
  return (
    <div className={styles.mainImage}>
      <img
        className={styles.mainImage__img}
        src={image.url}
        alt={image.title}
      />
    </div>
  );
}