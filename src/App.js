import Header from "./Header"
import FilmSelection from "./FilmSelection"
import GlobalStyle from "./globalStyle"
import { useEffect, useState } from "react"
import axios from "axios"



export default function App() {
    const [FilmList, setFilmList] = useState([])
    console.log(FilmList)


    useEffect(() => {
        const Films = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        .then((res) => {setFilmList(res.data)})
    }, [])
   
    return (
        <>
            <GlobalStyle />

            <Header />
            <FilmSelection FilmList={FilmList}/>
        </>
    )
}