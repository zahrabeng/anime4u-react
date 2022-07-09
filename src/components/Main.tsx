//import axios from "axios";
import { useEffect } from "react";

export default function Main ():JSX.Element{

    async function getAllData() {
        const result = await fetch("https://api.jikan.moe/v4/anime?q=&order_by=popularity&sort=desc&page=1&rating=g")
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