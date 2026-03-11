import { useState } from 'react'

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function useCatGallery(initialCats) {
  const [cats, setCats] = useState(initialCats)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const goNext = () => {
    setSelectedIndex(i => (i + 1) % cats.length)
  }

  const goPrev = () => {
    setSelectedIndex(i => (i - 1 + cats.length) % cats.length)
  }

  const goRandom = () => {
    let rand
    do {
      rand = Math.floor(Math.random() * cats.length)
    } while (rand === selectedIndex && cats.length > 1)
    setSelectedIndex(rand)
  }

  const shuffleCats = () => {
    setCats(prev => shuffleArray(prev))
    setSelectedIndex(0)
  }

  return {
    cats,
    selectedIndex,
    selectedCat: cats[selectedIndex],
    setSelectedIndex,
    goNext,
    goPrev,
    goRandom,
    shuffleCats,
  }
}
