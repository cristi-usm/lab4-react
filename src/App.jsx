import { useState } from "react";
import { BigImage } from "./components/BigImage";
import data from "./kitty.json"
import { FaCat } from "react-icons/fa";
import { Controls } from "./components/Controls";
import { ImagesList } from "./components/ImagesList";

function App() {

    const [cats, setCats] = useState(data)
    const [currentIndex, setCurrentIndex] = useState(0)

    function prevImage(){
        console.log("+")
        setCurrentIndex(idx => (idx + 1) % cats.length)
    }
    
    function nextImage(){
        setCurrentIndex(idx => (idx - 1 + cats.length) % cats.length)
    }

    function randomImage(){
        setCurrentIndex(Math.floor(Math.random() * cats.length))
    }

    function randomArray(){
        const currentCat = cats[currentIndex]
        const random = [...cats].sort(()=> Math.random() - 0.5)
        const newIndex = random.findIndex(cat => cat.id === currentCat.id)
        setCats(random)
        setCurrentIndex(newIndex)
    }

    const containerStyle ={
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        padding: "20px",
        justifyContent: "center",
        alignItems: "flex-start" 
    }


    return(
        <>
        <div style={containerStyle}>
            
            <div style={{ flex: "1", textAlign: "center" }}>
                <h2>Kitty Gallery <FaCat /> </h2>
                
                <BigImage url={cats[currentIndex].url} />

                <Controls
                    prevImage={prevImage}
                    nextImage={nextImage}
                    randomImage={randomImage}
                    randomArray={randomArray}
                />
            </div>

            <div style={{ flex: "300px", gap: '40px' }}> 
                <h2>Images List :)</h2>
                <ImagesList 
                    images={cats}
                    active={currentIndex}
                    onSelect={(i) => setCurrentIndex(i)}
                />
            </div>
        </div>
        </>
    )
}

export default App;
