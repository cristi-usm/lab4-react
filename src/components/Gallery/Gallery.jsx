import { useState } from "react";
import MainImage from "../MainImage";
import Actions from "../Actions";
import images from "../../data/images.json";
import Image from "../Image";
import styles from "./Gallery.module.css";

const imagesInit = images.map((image, index) => {
    return {
        ...image,
        isSelected: index === 0,
    };
});

function Gallery() {
    const [images, setImages] = useState(imagesInit);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    function handleClick(id) {
        const newImages = images.map((image) => {
            if (image.id === id) {
                setSelectedImage(image);
                return {
                    ...image,
                    isSelected: true,
                };
            }
            return {
                ...image,
                isSelected: false,
            };
        });
        setImages(newImages);
    }

    function selectRandom() {
        const randomIndex = Math.floor(Math.random() * images.length);
        handleClick(images[randomIndex].id);
    }

    function randomizeImages() {
        const shuffledImages = [...images].sort(() => Math.random() - 0.5);
        setImages(shuffledImages);
    }

    function nextImage() {
        const currentIndex = images.findIndex((image) => image.isSelected);
        const nextIndex = (currentIndex + 1) % images.length;
        handleClick(images[nextIndex].id);
    }

    function previousImage() {
        const currentIndex = images.findIndex((image) => image.isSelected);
        const previousIndex =
            (currentIndex - 1 + images.length) % images.length;
        handleClick(images[previousIndex].id);
    }

    return (
        <div>
            <MainImage image={selectedImage} />
            <Actions
                onRandomSelect={selectRandom}
                onRandomize={randomizeImages}
                onNext={nextImage}
                onPrevious={previousImage}
            />
            <div className={styles.imageList}>
                {images.map((image) => {
                    return (
                        <Image
                            key={image.id}
                            image={image}
                            onClick={() => {
                                handleClick(image.id);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Gallery;
