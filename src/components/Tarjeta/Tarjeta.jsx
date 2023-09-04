import React from 'react'
import "./Tarjeta.css"

export const Tarjeta = ({Data}) => {

  return (
    <div className='tarjeta'>
        <h1 className='names'>
          {Data.name}
        </h1>
        <img src={Data.image} alt="" />
    </div>
  )
}

export default Tarjeta