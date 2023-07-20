import { useEffect, useState } from "react"

export const valorDolar = () =>{
    const [retry, setRetry] = useState(0)
    const [dolar, setDolar] = useState([])
    useEffect(() =>{
        fetch("https://dolar-api-argentina.vercel.app/v1/dolares/blue") 
        // make api call here
        .then((response)=> response.json())
        .then((data) =>{setDolar(data.venta)})
        
    },[retry])

    useEffect(() =>{
        setInterval (() =>setRetry(prev=> prev+ 1),36000);
    },[])
    return dolar
}
    