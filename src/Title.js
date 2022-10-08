import styled from "styled-components"



export default function Title({titulo}){
    return(
        <TitleContainer>{titulo}</TitleContainer>
    )
}


const TitleContainer = styled.div`
    font-size: 24px;
    color: #293845;
    margin-top: 30px;
    background-color: white;
 
`
    
