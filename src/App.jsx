import { startTransition, useState } from 'react';
import imageData from './data/images.json';
import nextIcon from './assets/next.svg';
import previousIcon from './assets/previous.svg';
import randomImageIcon from './assets/random1.svg';
import shuffleIcon from './assets/random2.svg';

const imageModules = import.meta.glob('./assets/*.{jpg,jpeg}', {
    eager: true,
    import: 'default',
});

const galleryImages = imageData.map((image) => {
    const assetKey = image.url.replace('/src/', './');

    return {
        ...image,
        src: imageModules[assetKey] ?? image.url,
    };
});

function shuffleArray(items) {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledItems[index], shuffledItems[randomIndex]] = [
            shuffledItems[randomIndex],
            shuffledItems[index],
        ];
    }

    return shuffledItems;
}

function getRandomIndex(length, excludedIndex) {
    if (length <= 1) {
        return 0;
    }

    let nextIndex = Math.floor(Math.random() * length);

    while (nextIndex === excludedIndex) {
        nextIndex = Math.floor(Math.random() * length);
    }

    return nextIndex;
}

function App() {
    const [orderedImages, setOrderedImages] = useState(() => galleryImages);
    const [selectedId, setSelectedId] = useState(() => galleryImages[0]?.id ?? null);

    if (!orderedImages.length) {
        return (
            <main className="cat-gallery cat-gallery--empty">
                <p>Nu exista imagini in galerie.</p>
            </main>
        );
    }

    const selectedIndex = orderedImages.findIndex((image) => image.id === selectedId);
    const safeSelectedIndex = selectedIndex >= 0 ? selectedIndex : 0;
    const selectedImage = orderedImages[safeSelectedIndex];

    const showPreviousImage = () => {
        const nextIndex =
            (safeSelectedIndex - 1 + orderedImages.length) % orderedImages.length;
        setSelectedId(orderedImages[nextIndex].id);
    };

    const showNextImage = () => {
        const nextIndex = (safeSelectedIndex + 1) % orderedImages.length;
        setSelectedId(orderedImages[nextIndex].id);
    };

    const showRandomImage = () => {
        const nextIndex = getRandomIndex(orderedImages.length, safeSelectedIndex);
        setSelectedId(orderedImages[nextIndex].id);
    };

    const shuffleImages = () => {
        startTransition(() => {
            setOrderedImages((currentImages) => shuffleArray(currentImages));
        });
    };

    return (
        <main className="cat-gallery">
            <div className="cat-gallery__background" aria-hidden="true" />

            <section className="cat-gallery__hero">
                <div className="cat-gallery__copy">
                    <p className="cat-gallery__eyebrow">Galerie de Pisici</p>
                    <h1>Rasfoieste, alege si amesteca cele mai simpatice cadre.</h1>
                    <p className="cat-gallery__description">
                        Imaginile sunt incarcate din fisierul JSON, iar fiecare selectie este
                        afisata imediat in zona principala.
                    </p>
                </div>

                <figure className="cat-gallery__feature" key={selectedImage.id}>
                    <img
                        className="cat-gallery__feature-image"
                        src={selectedImage.src}
                        alt={selectedImage.title}
                    />

                    <figcaption className="cat-gallery__feature-meta">
                        <span>{selectedImage.title}</span>
                        <span>
                            {safeSelectedIndex + 1} / {orderedImages.length}
                        </span>
                    </figcaption>
                </figure>

                <div
                    className="cat-gallery__controls"
                    role="group"
                    aria-label="Controale galerie"
                >
                    <button
                        className="cat-gallery__control"
                        type="button"
                        onClick={showPreviousImage}
                        aria-label="Imaginea anterioara"
                        title="Imaginea anterioara"
                    >
                        <img src={previousIcon} alt="" aria-hidden="true" />
                    </button>

                    <button
                        className="cat-gallery__control cat-gallery__control--secondary"
                        type="button"
                        onClick={showRandomImage}
                        aria-label="Imagine aleatoare"
                        title="Imagine aleatoare"
                    >
                        <img src={randomImageIcon} alt="" aria-hidden="true" />
                    </button>

                    <button
                        className="cat-gallery__control cat-gallery__control--secondary"
                        type="button"
                        onClick={shuffleImages}
                        aria-label="Aranjare aleatoare"
                        title="Aranjare aleatoare"
                    >
                        <img src={shuffleIcon} alt="" aria-hidden="true" />
                    </button>

                    <button
                        className="cat-gallery__control"
                        type="button"
                        onClick={showNextImage}
                        aria-label="Urmatoarea imagine"
                        title="Urmatoarea imagine"
                    >
                        <img src={nextIcon} alt="" aria-hidden="true" />
                    </button>
                </div>
            </section>

            <section className="cat-gallery__grid" aria-label="Lista de imagini">
                {orderedImages.map((image, index) => {
                    const isSelected = image.id === selectedImage.id;

                    return (
                        <button
                            key={image.id}
                            className={`cat-gallery__thumb${isSelected ? ' is-selected' : ''}`}
                            type="button"
                            onClick={() => setSelectedId(image.id)}
                            aria-pressed={isSelected}
                            aria-label={`Selecteaza imaginea ${index + 1}: ${image.title}`}
                        >
                            <img src={image.src} alt={image.title} />
                            <span>{image.title}</span>
                        </button>
                    );
                })}
            </section>
        </main>
    );
}

export default App;
