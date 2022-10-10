import styled from "styled-components"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import Seat from "./Seat"
import Title from "./Title"
import Footer from "./Footer"

export default function SeatSection({ Name, setName, cpf, setCpf,setHour, setData, ReservedSeat, setReservedSeat,FilmSession, Hour, setDay, Day}) {
    const [Seats, setSeats] = useState([])
    const [SeatList, setSeatList] = useState([])
    const [SeatSelect, setSeatSelect] = useState([])
    const { seatID } = useParams()
    const navigate = useNavigate()
   


    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${seatID}/seats`)
            .then((res) => (setSeats(res.data), setSeatList(res.data.seats), setHour(res.data.name), setData(res.data.day.date), setDay(res.data.day.weekday)))
            .catch(console.log("Algo deu errado"))

    }, [])

    const send = {
        ids: SeatSelect,
        name: Name,
        cpf
    }

  

    function ReservarAssentos(e){
        e.preventDefault()
    


        function Sucesso(){
            alert("Ingresos comprados com sucesso")
            navigate('/sucesso')
            
        }


        if(send.cpf.length !== 11){
            alert("Digite um CPF válido!")
        }else if(SeatSelect.length === 0){
            alert("Por favor, selecione um assento!")
        } else{
            axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', send)
            .then(() => (Sucesso()))
            .catch((err) => (console.log(err)))
        }
       
    }



    return (
        <SeatSelectionContainer>

            <Title titulo={'Selecione o(s) assento(s)'}></Title>

            <SeatsContainer>
                <Seat SeatList={SeatList} setSeatSelect={setSeatSelect} SeatSelect={SeatSelect} ReservedSeat={ReservedSeat} setReservedSeat={setReservedSeat}  />
            </SeatsContainer>

            <SeatsLegend>
                <div className="Legend">
                    <div className="Selected"></div>
                    Selecionado
                </div>
                <div className="Legend">
                    <div className="Available"></div>
                    Disponível
                </div>
                <div className="Legend">
                    <div className="Unavailable"></div>
                    Indisponível
                </div>
            </SeatsLegend>

            <BuyerInformations>
                <form className="Formulario" onSubmit={ReservarAssentos}>
                    <label>Nome do comprador:</label>
                    <input
                        type="text"
                        required
                        placeholder="Digite seu nome..."
                        value={Name}
                        onChange={(e) => (setName(e.target.value))}
                    />

                    <label>CPF do comprador</label>
                    <input
                        type="number"
                        required
                        placeholder="Digite seu CPF..."
                        value={cpf}
                        onChange={(e) => (setCpf(e.target.value))}
                    />

                    <button type="submit">Reservar assento (s)</button>

                </form>
            </BuyerInformations>

            <Footer FilmSession={FilmSession} Hour={Hour} Day={Day}></Footer>
       

        </SeatSelectionContainer>
    )
}

const SeatSelectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 67px;
    margin-bottom: 23vh;
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

const SeatsLegend = styled.div`
    background-color: yellow;
    display: flex;
    width: 90vw;
    justify-content: center;

    .Legend{
        font-size: 13px;
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Selected, .Available, .Unavailable{
    width: 7vw;
    height: 7vw;
    margin: 2vw;
    border-radius: 50px;
    }

    .Selected{
        background-color: #1AAE9E;
    }
    .Available{
        background-color: #C3CFD9;
    }
    .Unavailable{
        background-color: #FBE192;
    }
`

const BuyerInformations = styled.div`
    margin-top: 30px;

    .Formulario{
        display: flex;
        flex-direction: column;
        background-color: pink;
        width: 90vw;
        align-items: center;

        label{
            width: 100%;
            font-size: 20px;
            margin-bottom: 5px;
        }

        input{
            width: 100%;
            height: 40px;
            border: solid 1px #D4D4D4;
            border-radius: 3px;
            font-size: 18px;
            padding-left: 10px;
            margin-bottom: 10px;
            
        }

        button{
            margin-top: 30px;
            width: 225px;
            height: 43px;
            background-color: #E8833A;
            color: #FFFFFF;
            border: none;
            border-radius: 3px;
          
        }
    }
`
