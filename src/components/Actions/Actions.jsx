import RandomImg1 from "../../assets/random1.svg";
import RandomImg2 from "../../assets/random2.svg";
import PreviousImg from "../../assets/previous.svg";
import NextImg from "../../assets/next.svg";
import styles from "./Actions.module.css";

function Actions({ onRandomSelect, onRandomize, onNext, onPrevious }) {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={onPrevious}>
                <img className={styles.image} src={PreviousImg} />
            </button>
            <button className={styles.button} onClick={onRandomSelect}>
                <img className={styles.image} src={RandomImg1} />
            </button>
            <button className={styles.button} onClick={onRandomize}>
                <img className={styles.image} src={RandomImg2} />
            </button>
            <button className={styles.button} onClick={onNext}>
                <img className={styles.image} src={NextImg} />
            </button>
        </div>
    );
}

export default Actions;
