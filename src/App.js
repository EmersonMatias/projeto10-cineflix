import Header from "./Header"
import FilmSelectionScreen from "./FilmSelectionScreen"
import GlobalStyle from "./globalStyle"
import { useEffect, useState } from "react"
import axios from "axios"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SessionSelectionScreen from "./SessionSelectionScreen"
import SeatSelectionScreen from "./SeatSelectionScreen"
import SucessScreen from "./SucessScreen"



export default function App() {
    const [FilmList, setFilmList] = useState([])
    const [Name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [Film, setFilm] = useState("")
    const [Hour, setHour] = useState("")
    const [Data, setData] = useState("")
    const [Day, setDay] = useState("")
    const [ReservedSeat, setReservedSeat] = useState([])
    const [FilmSession, setFilmSession] = useState({})


    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
            .then((res) => { setFilmList(res.data) })
            .catch(() => { alert('Não foi possivel encontrar os filmes, por favor, tente novamente mais tarde!') })

    }, [])

    return (
        <BrowserRouter>

            <GlobalStyle />

            <Header />

            <Routes>
                <Route path='/' element={<FilmSelectionScreen FilmList={FilmList} />} />
                <Route path="/sessoes/:filmID" element={<SessionSelectionScreen setFilm={setFilm} FilmSession={FilmSession} setFilmSession={setFilmSession} />} />
                <Route path="/assentos/:seatID"
                    element={<SeatSelectionScreen
                        Name={Name} setName={setName}
                        cpf={cpf} setCpf={setCpf}
                        setHour={setHour} setData={setData}
                        ReservedSeat={ReservedSeat}
                        setReservedSeat={setReservedSeat}
                        FilmSession={FilmSession}
                        Hour={Hour}
                        setDay={setDay}
                        Day={Day} />} />
                <Route path="/sucesso"
                    element={<SucessScreen
                        Name={Name}
                        cpf={cpf}
                        Film={Film}
                        Hour={Hour}
                        Data={Data}
                        ReservedSeat={ReservedSeat}
                        setName={setName}
                        setcpf={setCpf}
                        setReservedSeat={setReservedSeat}
                        />}
                />
            </Routes>

        </BrowserRouter>
    )
}