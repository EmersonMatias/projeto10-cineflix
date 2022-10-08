import styled from "styled-components"



export default function SucessScreen({Name, cpf}) {
    return (
        <SucessScreenContainer>
            <div className="Titulo"> Pedido feito com sucesso!</div>

            <Informations>
                <div className="FilmInformations"></div>
                <div className="Tickets"></div>
                <div className="Buyer">
                {Name}
                {cpf}
                </div>
            </Informations>


        </SucessScreenContainer>
    )
}

const SucessScreenContainer = styled.section`
    background-color: pink;
    padding-top: 67px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .Titulo{
        font-size: 24px;
        color: #247A6B;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: yellow;
        width: 50vw;
        height: 150px;
    }
`

const Informations = styled.div`

`