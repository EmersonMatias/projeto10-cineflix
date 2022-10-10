import styled from "styled-components";

export default function Footer({FilmSession, Hour, Day}){
    return(
        <FooterContainer>

            <FooterInformations>
                <img src={FilmSession.posterURL} alt={FilmSession.title}></img>
                <div>{FilmSession.title}<br/> {Day} - {Hour}</div>
                
            </FooterInformations>
            
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 20vh;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 0 15px;
    background-color: white;
`
const FooterInformations = styled.div`
    height: 20vh;
    display: flex;
    align-items: center;
   

img{
  
   height: 80%;
}

div{
    width: 70%;
    font-size: 26px;
    margin-right: 5px;
    flex-wrap: wrap;
    background-color: white;
    margin-left: 20px;
}
`