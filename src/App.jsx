import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './utils/getRandomFromArr'
import Phrase from './components/Phrase'
import Button from './components/Button'
import bg from './utils/bg.json'

function App() {
  const phrase = getRandomFromArr(phrases)
  const bgImage = getRandomFromArr(bg)

  const [phraseRandom, setPhraseRandom] = useState(phrase)
  const [bgRandom, setBgRandom] = useState(bgImage)

  const objStyle = {
    backgroundImage: `url(/fondo${bgRandom}.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh'
  }

  return (
    <div style={objStyle} className='app'>
      <h1 className="app__h1">Galleta de la fortuna</h1>
      <Phrase phrase={phraseRandom} />
      <Button setPhrase={setPhraseRandom} setBG={setBgRandom} />
    </div>
  )
}

export default App