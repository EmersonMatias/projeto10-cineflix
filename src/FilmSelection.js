import styled from "styled-components"



export default function FilmSelection({FilmList}) {
    
    
    
    return (
        <FilmSelectionContainer>
            <FilmSelectionTitle>Selecione o filme</FilmSelectionTitle>
            <FilmSelectionRow>
                {FilmList.map((items) => (
                      <Film>
                        <img src={items.posterURL}/>
                      </Film>
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
`

const FilmSelectionTitle = styled.div`
    font-size: 24px;
    color: #293845;
    margin-top: 30px;
    background-color: white;
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 3px;

    img{
        width: 25vw;
        border-radius: 3px;
    }
`