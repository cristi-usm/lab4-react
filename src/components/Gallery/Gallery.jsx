import style from "./Gallery.module.css";

export const Gallery = ({ photoArr, onSelect, selectedPhoto }) => {
  return (
    <div className={style.gallery}>
      {photoArr.map((photo, index) => {
        return (
          <div
            key={photo.id}
            className={`${style.galleryImgContainer} ${photo.id === selectedPhoto.id ? style.galleryImgSelected : ""}`}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className={style.photo}
              onClick={() => onSelect(index)}
            />
          </div>
        );
      })}
    </div>
  );
};
