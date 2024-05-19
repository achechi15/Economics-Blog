import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect( () => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setLoading(false)
            } catch (error) {
                setError(true)
            }
        }

        fetchData();


    }, [url])

    
    return { loading, error, data };
}
