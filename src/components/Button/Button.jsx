import styles from "./Button.module.css";
import next from "@assets/next.svg";
import previous from "@assets/previous.svg";
import random1 from "@assets/random1.svg";
import random2 from "@assets/random2.svg";

export function Button({ fPrevious, fNext, fRandom1, fRandom2 }) {
    return (
        <div className={styles.container}>
            <img src={ previous } onClick={ fPrevious } alt="previous_button"/>
            <img src={  random1 } onClick={ fRandom1 } alt="random1_button"/>
            <img src={ random2 } onClick={ fRandom2 } alt="random2_button"/>
            <img src={ next } onClick={ fNext } alt="next_button"/>
        </div>
    )
}

export default Button;