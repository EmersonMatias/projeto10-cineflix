import Header from "./Header"
import FilmSelectionScreen from "./FilmSelectionScreen"
import GlobalStyle from "./globalStyle"
import { useEffect, useState } from "react"
import axios from "axios"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SessionSelectionScreen from "./SessionSelectionScreen"
import SeatSelectionScreen from "./SeatSelectionScreen"



export default function App() {
    const [FilmList, setFilmList] = useState([])
  


    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
            .then((res) => { setFilmList(res.data) })
            .catch(() => { alert('Não foi possivel encontrar os filmes, por favor, tente novamente mais tarde!') })

        
    }, [])

    return (
        <BrowserRouter>
            <GlobalStyle />

            <Header />

            <Routes>
                <Route path='/' element={<FilmSelectionScreen FilmList={FilmList} />} />
                <Route path="/sessoes/:filmID" element={<SessionSelectionScreen />} />
                <Route path="/assentos/:seatID" element={<SeatSelectionScreen />} />
            </Routes>

        </BrowserRouter>
    )
}