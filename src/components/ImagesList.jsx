export const ImagesList = ({images, active,  onSelect}) => {

    const containerStyle ={
        gap: "50px"
    }

    const imageStyle = {
        maxWidth: "100%",
        height: "200px",
        width: "300px",
        objectFit: "cover",       
        borderRadius: "20px",
        cursor: "pointer"
    }

    return(
        <>
            <div style={containerStyle}>
                {images.map((img, i) => (
                    <img 
                        key={img.id}
                        src={img.url}
                        alt="img"
                        style={{...imageStyle, border: active === i ? "5px solid green" : "none"}}
                        onClick={()=>onSelect(i)}
                    />
                ))}
            </div>
        </>
    )
}