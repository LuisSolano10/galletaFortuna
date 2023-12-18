import getRandomFromArr from "../utils/getRandomFromArr"
import phrases from '../utils/phrases.json'
import bg from '../utils/bg.json'
import './Button.css'

const Button = ({ setPhrase, setBG }) => {
  const changePhrase = () => {
    setPhrase(getRandomFromArr(phrases))
    setBG(getRandomFromArr(bg))
  }

  return (
    <div>
      <button onClick={changePhrase} className="button">Cambiar Frase</button>
    </div>
  )
}

export default Button