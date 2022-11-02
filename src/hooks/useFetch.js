import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState('')
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        const abortController = new AbortController()
        setIsPending(true);
        const fetchData = async() => {
            try {
                const response = await fetch(url, { signal: abortController.signal })
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                setData(data)
                setIsPending(false)
                setError(null)
            }
            catch(err) {
                if(err.name === 'AbortError') {
                    setError('The fetch was aborted')
                } else {
                    setIsPending(false)
                    setError('Could not fetch the data for the resource')
                }
            }
        }
        fetchData()

        return () => {
            abortController.abort()
        }

    }, [url])

    return { data, isPending, error }
}