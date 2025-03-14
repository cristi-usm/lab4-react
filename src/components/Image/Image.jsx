import styles from "./Image.module.css";

function Image({ image, onClick }) {
    const cssClassesSelected = image.isSelected && styles.selected;

    return (
        <div
            onClick={onClick}
            className={`${styles.container} ${cssClassesSelected}`}
        >
            <img src={image.url} className={styles.image} alt={image.title} />
        </div>
    );
}

export default Image;
