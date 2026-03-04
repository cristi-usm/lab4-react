import { useState } from "react";
import listaInitiala from "./data/images.json";
import "./GaleriePisici.css";
import previos from "./assets/previous.svg"
import next from "./assets/next.svg";
import random1 from "./assets/random1.svg"
import random2 from "./assets/random2.svg"

function GaleriePisici() {

    const [listaPisici, setListaPisici] = useState(listaInitiala);
    const [indexSelectat, setIndexSelectat] = useState(0);

    function imagineUrmatoare() {
        setIndexSelectat((indexAnterior) =>
            (indexAnterior + 1) % listaPisici.length
        );
    }

    function imagineAnterioara() {
        setIndexSelectat((indexAnterior) =>
            (indexAnterior - 1 + listaPisici.length) % listaPisici.length
        );
    }

    function imagineAleatoare() {
        const indexRandom = Math.floor(Math.random() * listaPisici.length);
        setIndexSelectat(indexRandom);
    }

    function aranjareAleatoare() {
        const listaNoua = [...listaPisici];
        listaNoua.sort(() => Math.random() - 0.5);
        setListaPisici(listaNoua);
        setIndexSelectat(0);
    }

    return (
        <div className="container">

            <h1 className="titlu">Galerie de Pisici 😺</h1>

            <img
                src={listaPisici[indexSelectat].url}
                alt="Pisica selectata"
                className="imagine-principala"
            />

            <div className="butoane">

    <button onClick={imagineAnterioara} className="buton-icon">
        <img src={previos} alt="Anterior" />
    </button>

    <button onClick={imagineUrmatoare} className="buton-icon">
        <img src={next} alt="Urmator" />
    </button>

    <button onClick={imagineAleatoare} className="buton-icon">
        <img src={random1} alt="Aleator" />
    </button>

    <button onClick={aranjareAleatoare} className="buton-icon">
        <img src={random2} alt="Rearanjare" />
    </button>

</div>

            <div className="lista-miniaturi">
                {listaPisici.map((pisica, index) => (
                    <img
                        key={pisica.id}
                        src={pisica.url}
                        alt="miniatura"
                        onClick={() => setIndexSelectat(index)}
                        className={
                            index === indexSelectat
                                ? "miniatura miniatura-selectata"
                                : "miniatura"
                        }
                    />
                ))}
            </div>

        </div>
    );
}

export default GaleriePisici;