import { useState } from 'react'

import leftArrow from './assets/previous.svg'
import rightArrow from './assets/next.svg'
import imageData from './data/images.json'
import diceSingle from './assets/random1.svg'
import diceDouble from './assets/random2.svg'
import './App.css'

function App() {
    const [currentImages, setCurrentImages] = useState(imageData);
    const [selectedImage, setSelectedImage] = useState(null);

    const handlePrev = () => {
        if (!selectedImage) { setSelectedImage(currentImages[currentImages.length - 1]); return; }
        const currentIndex = currentImages.findIndex(item => item.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        setSelectedImage(currentImages[prevIndex]);
    };

    const handleNext = () => {
        if (!selectedImage) { setSelectedImage(currentImages[0]); return; }
        const currentIndex = currentImages.findIndex(item => item.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % currentImages.length;
        setSelectedImage(currentImages[nextIndex]);
    };

    const handleRandomSelect = () => {
        const randomIndex = Math.floor(Math.random() * currentImages.length);
        setSelectedImage(currentImages[randomIndex]);
    };

    const handleShuffleGrid = () => {
        const shuffled = [...currentImages].sort(() => Math.random() - 0.5);
        setCurrentImages(shuffled);
    };

    return (
        <div className="container">
            <div className="viewer-wrapper">
                <img src={leftArrow} alt="Prev" className="arrow" onClick={handlePrev} />

                <div className="big-rectangle-container">
                    <div className="big-rectangle">
                        {selectedImage && (
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="main-display-img"
                            />
                        )}
                    </div>

                    <div className="button-group">
                        <img
                            src={diceSingle}
                            alt="Random Select"
                            className="action-icon"
                            onClick={handleRandomSelect}
                            title="Select Random Image"
                        />
                        <img
                            src={diceDouble}
                            alt="Shuffle Grid"
                            className="action-icon"
                            onClick={handleShuffleGrid}
                            title="Shuffle Order"
                        />
                    </div>
                </div>

                <img src={rightArrow} alt="Next" className="arrow" onClick={handleNext} />
            </div>

            <div className="grid">
                {currentImages.map((item) => (
                    <div
                        key={item.id}
                        className={`small-box ${selectedImage?.id === item.id ? 'active' : ''}`}
                        onClick={() => setSelectedImage(item)}
                    >
                        <img src={item.url} alt={item.title} className="cat-img" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App