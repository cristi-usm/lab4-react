import styles from "./thumbnaiList.module.css";

export default function ThumbnailList({ images, selected, setSelected }) {
  return (
    <div className={styles.thumbs}>
      {images.map((img, index) => (
        <button
          key={img.id ?? img.url ?? index}
          className={`${styles.thumb} ${selected === index ? styles["thumb--active"] : ""}`}
          onClick={() => setSelected(index)}
          title={img.title}
        >
          <img src={img.url} alt={img.title ?? `Pisică ${index + 1}`} />
        </button>
      ))}
    </div>
  );
}