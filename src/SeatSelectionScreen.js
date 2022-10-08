import styled from "styled-components"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import Seat from "./Seat"
import Title from "./Title"

export default function SeatSection() {
    const [Seats, setSeats] = useState([])
    const [SeatList, setSeatList] = useState([])
    const [SeatSelect, setSeatSelect] = useState([])
    const { seatID } = useParams()
    console.log(Seats)
    console.log(SeatList)
    console.log(SeatSelect)


    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${seatID}/seats`)
            .then((res) => (setSeats(res.data), setSeatList(res.data.seats)))
            .catch(console.log("Algo deu errado"))

    }, [])

    return (
        <SeatSelectionContainer>

            <Title titulo={'Selecione o(s) assento(s)'}></Title>

            <SeatsContainer>
                <Seat SeatList={SeatList} setSeatSelect={setSeatSelect} SeatSelect={SeatSelect} />
            </SeatsContainer>

        </SeatSelectionContainer>
    )
}

const SeatSelectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 67px;
`

const SeatsContainer = styled.div`
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin-top: 30px;
`
