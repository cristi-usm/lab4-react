

export const BigImage =({url})=>{

    const containerStyle = {
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        margin: "20px 0"
    }

    const imageStyle = {
        maxWidth: "100%",
        height: "500px",
        width: "700px",
        objectFit: "cover",       
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)" 
    }


    return(
        <>
            <div style={containerStyle}>
                <img src={url} alt="cat-image" style={imageStyle} />
            </div>
        </>
    )
}