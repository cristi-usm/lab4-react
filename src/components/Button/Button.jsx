import style from "./Button.module.css";

export const Button = ({ btnImg, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={style.button}
      style={{
        backgroundImage: `url("${btnImg}")`,
      }}
    />
  );
};
