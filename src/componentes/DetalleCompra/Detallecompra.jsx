import React from 'react'
import {  useState , useEffect } from "react"
import { useParams } from 'react-router-dom'
import Orden from "../Orden/Orden"
import Loader from "../Loader/Loader"
import {doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"

const Detallecompra = () => {
    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(true)

    const { orderId } = useParams()


    useEffect(() => {
        const orderRef = doc(db, "orders", orderId)
        getDoc(orderRef)
            .then((doc) => {
                setOrder({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

  return (
    <div>
        {
            loading
                ? <Loader />
                : <Orden order={order} />
        }
    </div>
  )
}

export default Detallecompra