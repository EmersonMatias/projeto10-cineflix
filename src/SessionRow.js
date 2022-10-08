import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function SessionRow({ Days }) {
    return (
        <>
            {Days.map((item) => (

                <Sessions key={item.id}>
                    <div className="SessionsTitle">{item.weekday} - {item.date}</div>
                    {item.showtimes.map((subitem) => (
                        <Link to={`/assentos/${subitem.id}`} key={subitem.id}>
                            <button className="SessionsHours" >{subitem.name}</button>
                        </Link>
                    ))}
                </Sessions>

            ))}
        </>

    )
}

const Sessions = styled.div`
    width: 100%;
    margin-top: 30px;
    padding-left: 30px;
    background-color: pink;

    .SessionsTitle{
        font-size: 20px;
    }

    .SessionsHours{
        width: 83px;
        height: 43px;
        background-color: #E8833A;
        color: #FFFFFF;
        border: none;
        border-radius: 3px;
        margin-top: 20px;
        margin-right: 20px;
    }
`
