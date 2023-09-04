import React, {useEffect, useState} from 'react'
import { GetPersonajes } from '../../api'
import Tarjeta from '../Tarjeta/Tarjeta'


export const Login = () => {
    const [personaje, setPersonaje] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await GetPersonajes();
            setPersonaje(data);
        } catch (error) {
            console.error('Error al obtener los personajes', error);
        }
    };
    
    fetchData();
}, []);
    console.log('Aca vemos los personajes', personaje);
  return (
    <div>
        {personaje.map((personaje, index) => (
            <Tarjeta key={personaje.id} Data={personaje}/>
        ))}
    </div>
  )
}

export default Login