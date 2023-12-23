import React, { useState } from 'react'

export const useMultiFetch = (data_arr) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    var data = []

    const fetchAllProducts = data_arr =>{
        setLoading(true)
        data_arr.map(el=>{
            fetch(`https://fakestoreapi.com/products/${el[0]}`)
            .then(res=>{
                if(res.status===200)
                    return res.json()
                else
                    return Promise.reject("ERROR!")
            })
            .then(result=>{
                data =[...data, result]
            })
            .catch(err=> console.log(err))
        })
        return setLoading(false)
    }
    fetchAllProducts(data_arr)
    return [data, loading]
}
