import styles from "./MainImage.module.css";

function MainImage({ image }) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image.url} />
        </div>
    );
}

export default MainImage;
