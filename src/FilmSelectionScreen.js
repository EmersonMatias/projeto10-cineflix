import styled from "styled-components"
import { Link } from 'react-router-dom'
import Title from "./Title"


export default function FilmSelection({ FilmList }) {


    return (
        <FilmSelectionContainer>

            <Title titulo={'Selecione o filme'} />

            <FilmSelectionRow>
                {FilmList.map((items) => (
                    <Link to={`/sessoes/${items.id}`} key={items.id}>
                        <Film>
                            <img src={items.posterURL} alt={items.title} />
                        </Film>
                    </Link>

                )
                )}
            </FilmSelectionRow>

        </FilmSelectionContainer>
    )
}

const FilmSelectionContainer = styled.section`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 67px;
`

const FilmSelectionRow = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: white;
    margin-top: 30px;
    
`

const Film = styled.div`
    background-color: white;
    width: 30vw;
    height: 42vw;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 3px;

    img{
        width: 25vw;
        border-radius: 3px;
    }
`