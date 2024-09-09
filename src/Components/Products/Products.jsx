import React, { useEffect, useState } from "react"
import axios from "axios"

const Products = () => {

    const [data, setData] = useState([]);

    const getApiData = () => {
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    };
    useEffect(() =>{
        getApiData()
    },[])

  return (
    <>
        <div>
            API Data:
            <div className="products-main">
                {
                data.length>0 ?
                data.map((d, i) => {
                    return ( 
                        <CustomCards key={i} data={d} />
                    )
                })
                : "no data found"}
            </div>
        </div>
        </>
  )
}

export default Products