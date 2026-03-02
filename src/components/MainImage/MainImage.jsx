import style from "./MainImage.module.css";

export const MainImage = ({ image }) => {
  return <img src={image.url} alt={image.title} className={style.image} />;
};
