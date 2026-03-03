import styles from "./Gallery.module.css";
import { MainWindow } from "@components/MainWindow";

export function Gallery( {dataArr, currIndex} ) {
    return (
        <div className={styles.container}>
            {dataArr.map((photo, index) => (
                <MainWindow key={ photo.id } imgUrl = { photo.url } imgText = { photo.title } border={index === currIndex} type = "gallery_photo"></MainWindow>
            ))}
        </div>
    )
}

export default Gallery;