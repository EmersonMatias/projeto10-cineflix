import styled from "styled-components"
import { Link } from 'react-router-dom'



export default function SucessScreen({ Name, cpf, Film, Hour, Data, ReservedSeat, setName, setcpf, setReservedSeat}) {
    function Reset(){
        setName("")
        setcpf("")
        setReservedSeat([])
    }

    return (
        <SucessScreenContainer>
            <div className="Title"> Pedido feito com sucesso!</div>

            <Informations>
                <div className="FilmInformations" data-identifier="movie-session-infos-reserve-finished">
                    <div className="SubTitles">Fiilme e sessão</div>
                    {Film}<br />
                    {Data} {Hour}
                </div>

                <div className="Tickets" data-identifier="seat-infos-reserve-finished">
                    <div className="SubTitles">Ingressos</div>
                    {ReservedSeat.map((item) => (<>Assento {item} <br /></>))}
                </div>

                <div className="Buyer" data-identifier="buyer-infos-reserve-finished">
                    <div className="SubTitles">Comprador</div>
                    Nome: {Name} <br />
                    CPF:  {cpf}
                </div>
            </Informations>
            
            <Link to='/'>
                <button onClick={Reset} className="BackHome" data-identifier="back-to-home-btn">Voltar para Home</button>
            </Link>

        </SucessScreenContainer>
    )
}

const SucessScreenContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 67px;
    width: 100%;
    font-size: 22px;
    font-family: 'Roboto', sans-serif;

    .Title{
        font-size: 24px;
        color: #247A6B;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100vw;
        height: 150px;
        margin-bottom: 20px;
    }

    .BackHome{
        background-color: #E8833A;
        color: #FFFFFF;
        border: none;
        border-radius: 3px;
        margin-top: 20px;
        margin-right: 20px;
        font-size: 18px;
        padding: 10px 20px;
    }
`

const Informations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .SubTitles{
        font-size: 24px;
        font-weight: 700;
        color: #293845;
    }

    .FilmInformations,
    .Tickets, 
    .Buyer {
        margin-bottom: 30px;
        margin-left: 20px;
    }
`