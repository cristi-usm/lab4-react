import styles from './Controls.module.css'

export default function Controls({ onPrev, onNext, onRandom, onShuffle }) {
  return (
    <div className={styles.controls}>
      <button onClick={onPrev}>⬅ Imaginea Anterioară</button>
      <button onClick={onNext}>Următoarea Imagine ➡</button>
      <button onClick={onRandom}>🎲 Imagine Aleatoare</button>
      <button onClick={onShuffle}>🔀 Aranjare Aleatoare</button>
    </div>
  )
}
