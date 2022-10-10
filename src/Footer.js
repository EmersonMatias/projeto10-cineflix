import styled from "styled-components";

export default function Footer({ FilmSession, Hour, Day }) {
    return (
        <FooterContainer>

            <FooterInformations>
                <div className="Poster">
                    <img src={FilmSession.posterURL} alt={FilmSession.title} data-identifier="movie-img-preview"></img>
                </div>
                <div className="Title" data-identifier="movie-and-session-infos-preview">{FilmSession.title}<br /> {Day} - {Hour}</div>

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
    background-color: #DFE6ED;
`
const FooterInformations = styled.div`
    height: 20vh;
    display: flex;
    align-items: center;

    .Title{
    width: 70%;
    font-size: 26px;
    margin-right: 5px;
    flex-wrap: wrap;
    margin-left: 20px;
}

    .Poster{
    width: 13vh;
    height: 15vh;
    background-color: white;
    display: flex;
    align-items: center;   
    justify-content:center ;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;


    img{
  height: 80%;
  border-radius: 3px;
}

}
`