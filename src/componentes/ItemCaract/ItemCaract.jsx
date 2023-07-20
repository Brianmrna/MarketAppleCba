import React from 'react'

const ItemCaract = (props) => {
  return (
    
    <div className='contenedor__detalle'>
        <p className='columna'>{props.el}</p>
        <p className='columna'>{props.prop}</p>
    </div>
    
  )
}

export default ItemCaract