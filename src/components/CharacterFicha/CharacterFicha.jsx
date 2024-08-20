import './CharacterFicha.css'

const CharacterFicha = ({character}) => {

  return (
    <div className='ficha'> 
        <div className='cortina'>
      <h2>{character.name}</h2>
      </div>
    <div className='image'><img src={character.image} key={character.id} alt={character.name}/></div>

 
  </div>

  )
}

export default CharacterFicha