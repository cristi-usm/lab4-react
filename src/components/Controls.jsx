import { GrNext, GrPrevious } from "react-icons/gr"
import { GiPerspectiveDiceSixFacesRandom, GiCardRandom } from "react-icons/gi";

export const Controls = ({prevImage, nextImage, randomImage, randomArray}) => {

    const containerStyle = { 
        display: 'flex', 
        gap: '10px', 
        justifyContent: 'center', 
        margin: '10px' }

    const buttonStyle = {
        width: "100px",
        height: "100px",
        display: "flex",  
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        border: "none",
        fontSize: "3rem",
        cursor: "pointer", 
        backgroundColor: "#f0f0f0" ,
        boxShadow: "5px 5px 10px"
    }
    return (
        <>
            <div style={containerStyle}>
                <button onClick={prevImage} style={buttonStyle} ><GrPrevious /></button>
                <button onClick={randomImage} style={buttonStyle}><GiPerspectiveDiceSixFacesRandom /></button>
                <button onClick={randomArray} style={buttonStyle}><GiCardRandom /></button>
                <button onClick={nextImage} style={buttonStyle}><GrNext /></button>
            </div>
        </>
    )
}