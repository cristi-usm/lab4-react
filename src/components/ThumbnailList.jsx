import styles from './ThumbnailList.module.css'

export default function ThumbnailList({ cats, selectedIndex, onSelect }) {
  return (
    <div className={styles.list}>
      {cats.map((cat, index) => (
        <div
          key={cat.id}
          className={`${styles.thumbWrap} ${index === selectedIndex ? styles.active : ''}`}
          onClick={() => onSelect(index)}
        >
          <img src={cat.src} alt={cat.name} className={styles.thumb} />
          <span className={styles.name}>{cat.name}</span>
        </div>
      ))}
    </div>
  )
}
