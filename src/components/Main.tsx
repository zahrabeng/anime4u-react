//import axios from "axios";
import { useEffect } from "react";

export default function Main ():JSX.Element{

    const jikanAPI = "https://api.jikan.moe/v4/anime?q=" //?q= added to the end of the API to query
    
    async function getAllData() {
        const result = await fetch(`${jikanAPI}&order_by=popularity&sort=desc&page=1&rating=g`)
        const jsonBody = await result.json()
        console.log(jsonBody.data)
    }

    useEffect (() => {
        getAllData()
    }, []) 
 
    return (
        <>

        </>
    )
}