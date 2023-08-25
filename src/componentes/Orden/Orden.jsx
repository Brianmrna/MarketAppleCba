import React from 'react'
import { Link } from "react-router-dom"
import Logo from '/MarketAppleCba-Logo.svg'


const Orden = ({order}) => {
    const Fecha = Date(order.fyh.toString())
  return (
   <div className='d-flex justify-content-center flex-wrap'>
    <Link to="/"className="btn mx-2 btn-danger row col-12">Volver</Link>


    <div className='d-flex flex-row flex-wrap w-90 mt-4'>
        <div className=''>
            <img className='col col-2 fs-1 ' src={Logo} alt="MarketAppleCba" />
            <h1 className='col-6 fs-1 mt-1 titulo__orden'>Orden de Compra</h1>
        </div>
        
        <div className=' col col-4 fs-5 mt-5'>
            <p className='mt-4'>Fecha: {Fecha}</p>
            <p>N° Orden: {order.id} </p>
        </div>
       
        <div className='d-flex  col-6 justify-content-center flex-wrap mt-5 fs-4'>
            <h2 className='row col-12'>Datos del Vendedor</h2>
            <p className='row col-12'>Nombre: MarketAppleCba</p>
            <p className='row col-12'>Direccion: Calle Loca 999, Cordoba, Argentina</p>
            <p className='row col-12'>Telefono: 0351-15-2315869</p>
            <p className='row col-12'>E-mail: brianmrna001@gmail.com</p>
        </div>
        <div className='d-flex  col-6 justify-content-center flex-wrap mt-5 fs-4'>
            <h2 className='row col-12'>Datos del Cliente</h2>
            <p className='row col-12'>Nombre: {order.cliente.nombre}</p>
            <p className='row col-12'>Direccion: {order.cliente.direccion}</p>
            <p className='row col-12'>Telefono: {order.cliente.telefono}</p>
            <p className='row col-12'>E-mail: {order.cliente.email}</p>
        </div>
        <table className="table fs-5 mt-4 mx-4">
                <thead>
                    <tr>
                        <td className="Titulo col-3">Nombre</td>
                        <td className="Titulo col-3">Cantidad</td>
                        <td className="Titulo col-3">Precio/u</td>
                        <td className="Titulo col-3">SubTotal</td>
                    </tr>
                </thead>
        </table>
        <table className='table mx-4'>
                <tbody>
        {
            order.items.map(item => {
                return(
                <tr key={item.id} className="row Detalle">
                    <td className="col-3 DetalleTitulo">{item.nombre}</td>
                    <td className="col-3 DetalleTexto">{item.cantidad}</td>
                    <td className="col-3 DetalleTexto">{item.precio}</td>
                    <td className="col-3 DetalleTexto">{item.precio * item.cantidad}</td>
                </tr>)
        })}
        </tbody>
        </table>
        <div className='d-flex justify-content-end col-12 '>
            <p className='fs-3 mx-3'>Total: </p>
            <p className='fs-3 mx-2'>{order.total}</p>
        </div>
        
    </div>
    </div> 
  )
}

export default Orden
