import catsData from './data/cats.json'
import { useCatGallery } from './hooks/useCatGallery'
import Header from './components/Header'
import MainImage from './components/MainImage'
import Controls from './components/Controls'
import ThumbnailList from './components/ThumbnailList'
import styles from './App.module.css'

export default function App() {
  const { cats, selectedIndex, selectedCat, setSelectedIndex, goNext, goPrev, goRandom, shuffleCats } =
    useCatGallery(catsData)

  return (
    <div className={styles.app}>
      <Header />
      <MainImage cat={selectedCat} />
      <Controls
        onPrev={goPrev}
        onNext={goNext}
        onRandom={goRandom}
        onShuffle={shuffleCats}
      />
      <ThumbnailList
        cats={cats}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
    </div>
  )
}
