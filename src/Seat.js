import styled from "styled-components"



export default function Seat({ SeatList, setSeatSelect, SeatSelect }) {

    function SelectSeat(SeatChoosen) {
        if (SeatSelect.includes(Number(SeatChoosen))) {
            SeatSelect.splice(SeatSelect.indexOf(SeatChoosen), 1);
            setSeatSelect([...SeatSelect])
        } else {
            setSeatSelect([...SeatSelect, Number(SeatChoosen)])
        }
    }

    function CheckSeat(isAvailable, Selected) {
        if (isAvailable === false) {
            return 'red'
        } else if (SeatSelect.includes(Number(Selected))) {
            return 'orange'
        } else if (isAvailable === true) {
            return 'green'
        }
    }

    return (
        <>
            {SeatList.map((item) => (
                <SeatContainer
                    isAvailable={item.isAvailable}
                    CheckSeat={CheckSeat}
                    Selected={item.id}
                    onClick={() => ( item.isAvailable === false ? alert("Esse lugar já está reservado") : SelectSeat(item.id))}
                    key={item.id}
                >{item.name}
                </SeatContainer>
            ))}
        </>

    )
}

const SeatContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5vw;
    width: 7vw;
    height: 7vw;
    margin: 3vw 1vw;
    border-radius: 100px;
    background-color: ${props => props.CheckSeat(props.isAvailable, props.Selected)};

`
