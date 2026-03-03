import styles from "./Main.module.css";
import { MainWindow } from "@components/MainWindow";
import { Button } from "@components/Button";
import { Gallery } from "@components/Gallery";
import dataArr from "@data/images.json";
import { useState } from "react";

export function Main() {
    const [data, setData] = useState(dataArr);
    const [currentIndex, setCurrentIndex] = useState(0);
    const photo = data[currentIndex];

    function previousPhoto(){
        const prev = currentIndex;
        prev === 0 ? setCurrentIndex(data.length - 1) : setCurrentIndex(prev - 1);

    }
    function randomPhoto() {
        const randomIndex = Math.floor(Math.random() * (data.length));
        setCurrentIndex(randomIndex);
    }
    function fisherYatesShuffle(arr){
        const newArr = [...arr];
        for(let i = arr.length - 1; i > 0 ; i--){
            const random = Math.floor(Math.random() * (i + 1));
           [newArr[i], newArr[random]] = [newArr[random], newArr[i]];
        }
        return newArr;
    }
    function randomGallery() {
        const currPhoto = data[currentIndex];
        const newdata = fisherYatesShuffle(data);
        setData(newdata);
        const index = newdata.findIndex((photo) => photo.id === currPhoto.id);
        setCurrentIndex(index);
    }
    function nextPhoto(){
        const prev = currentIndex;
        prev === data.length - 1 ? setCurrentIndex(0) : setCurrentIndex(prev + 1);
    }

    return (
        <div className={styles.container}>
            <MainWindow imgUrl={ photo.url} imgText={photo.title}></MainWindow>
            <Button fPrevious={ () => previousPhoto()} fRandom1={ () => randomPhoto()} fRandom2={ () => randomGallery() } fNext={ () => nextPhoto()}></Button>
            <Gallery dataArr={ data} currIndex={ currentIndex }></Gallery>
        </div>
    )
}