import styled from "styled-components"
import Footer from "./Footer"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import SessionRow from "./SessionRow"
import Title from "./Title"

export default function SessionSelectionScreen({setFilm, FilmSession, setFilmSession}) {
    const [Days, setDays] = useState([])
    const { filmID } = useParams()


    useEffect(() => {
        function set(res) {
            setFilmSession(res.data)
            setDays(res.data.days)
            setFilm(res.data.title)
        }

        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmID}/showtimes`)
            .then((res) => (set(res)))
            .catch((e) => console.log(e.response.data))
    }, [])

    return (
        <SessionSelectionContainer>
            
            <Title titulo={'Selecione o horário'}></Title>

            <SessionRow  Days={Days} />

            <Footer FilmSession={FilmSession}></Footer>

        </SessionSelectionContainer>

    )
}

const SessionSelectionContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 23vh;
    padding-top: 67px;

`


