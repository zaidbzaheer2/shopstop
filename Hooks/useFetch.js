import { useState, useEffect } from "react";

export const useFetch = (init_url)=>{
    const [url, setURL] = useState(init_url)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(()=>{
        setLoading(true)
        const controller = new AbortController()
        const signal = controller.signal
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1ad18a7345msha16d8a52a32b191p13da6ajsn57c96aac815a',
                'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com'
            },
            signal: signal
            
        };
        fetch(url,options)
        .then(res=>{
            if(res.status===200)
                return res.json()
            else
                return Promise.reject("Error Fetching Data...")
        })
        .then(data=>setData(data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))

        return ()=> controller.abort(), setError(null)
    }, [url, init_url])

    return [setURL, data, loading, error]
}