import styles from './MainImage.module.css'

export default function MainImage({ cat }) {
  if (!cat) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrap}>
        <img
          key={cat.src}
          src={cat.src}
          alt={cat.name}
          className={styles.image}
        />
        <div className={styles.label}>{cat.name}</div>
      </div>
    </div>
  )
}
