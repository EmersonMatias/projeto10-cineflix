import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <HeaderContainer>
            <StyledLink to={`/`}>
                <HeaderTitle>
                    CINEFLIX
                </HeaderTitle>
            </StyledLink>

        </HeaderContainer>
    )
}



const HeaderContainer = styled.header`
    background-color: #C3CFD9;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration-line: none;
    position: fixed;
    width: 100%;
`
const HeaderTitle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:ital,wght@0,700;1,400&display=swap');
    font-size: 34px;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`

const StyledLink = styled(Link)`
text-decoration: none;
`