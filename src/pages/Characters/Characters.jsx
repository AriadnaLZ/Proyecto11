import { useState, useEffect } from 'react'
import './Characters.css'
import Loading from '../../components/Loading/Loading'
import CharacterFicha from '../../components/CharacterFicha/CharacterFicha'
import Pagination from '../../components/Pagination/Pagination'
import { Link } from 'react-router-dom'


const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  useEffect(()=> {
    setLoading(true)
    fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`)
    .then((res) => res.json())
    .then((res) => {
      setCharacters(res.items)
      setLoading(false)
    })
}, [page])


  return (
    <main className='characters'>
        {loading &&  <Loading />}
        <div className='generalFichas'>
        {characters.map((character) =>
        <Link key={character.id} to={`/character/${character.id}`}>
              <CharacterFicha  character={character} />
        </Link>

         )}
        </div>
        <Pagination page={page} setPage={setPage} />
    </main>
  )
}

export default Characters