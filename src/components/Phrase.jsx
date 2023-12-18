import './Phrase.css'

const Phrase = ({ phrase }) => {
  return (
    <div className="phrase">
      <p className="phrase__p">{phrase.phrase}</p>
      <h3 className="phrase__h3">»&nbsp;{phrase.author}&nbsp;«</h3>
    </div>
  )
}

export default Phrase