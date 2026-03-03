import styles from "./MainWindow.module.css";

export function MainWindow({ imgUrl, imgText, type = "main", border=false}) {
    return (
        <div className={ `${styles[type]} ${border && styles.border}` }>
            <img src={ imgUrl } alt={ imgText } className={ styles.img } />
        </div>
    )
}

export default MainWindow;