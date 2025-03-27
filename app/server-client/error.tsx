'use client'
import { useEffect } from "react"

const error = ({ error } : { error : Error}) => {
    useEffect(() => {
        console.error(error)
        return () => {
            // cleanup logic
        }
    } , [])

    return (
        <div>Error while fetching : {error.message}</div>
    )
}

export default error;