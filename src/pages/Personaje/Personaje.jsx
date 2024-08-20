import { useEffect, useState } from 'react'
import './Personaje.css'
import { Link, useParams } from 'react-router-dom'
import Characters from '../Characters/Characters'
import Loading from '../../components/Loading/Loading'


const Personaje = () => {
  const {id} = useParams()
const [image, setImage] = useState()
const [name, setName] = useState()
const [description, setDescription] = useState()
const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://dragonball-api.com/api/characters/${id}`)
    .then((res) => res.json())
    .then((res) => {
      setImage(res.image)
      setName(res.name)
      setDescription(res.description)
      setLoading(false)
    })
  }, [])

  

  return(
    <main className='mainPersonaje'>
      {loading &&  <Loading /> }
      <div className='contenedorFicha'>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
      </div>
    <Link to='/'>
    <p>Volver</p>
    </Link>


    </main>
  )


}

export default Personaje