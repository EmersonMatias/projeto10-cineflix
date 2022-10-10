import styled from "styled-components"



export default function Seat({ SeatList, setSeatSelect, SeatSelect, ReservedSeat, setReservedSeat}) {

    function SelectSeat(SeatChoosen, SeatNumber) {
        if (SeatSelect.includes(Number(SeatChoosen))) {
            SeatSelect.splice(SeatSelect.indexOf(SeatChoosen), 1);
            ReservedSeat.splice(ReservedSeat.indexOf(SeatNumber), 1);
            setSeatSelect([...SeatSelect])
            setReservedSeat([...ReservedSeat])
        } else {
            setSeatSelect([...SeatSelect, Number(SeatChoosen)])
            setReservedSeat([...ReservedSeat, SeatNumber])
        }
    }

    function CheckSeat(isAvailable, Selected) {
        if (isAvailable === false) {
            return '#FBE192'
        } else if (SeatSelect.includes(Number(Selected))) {
            return '#1AAE9E'
        } else if (isAvailable === true) {
            return '#C3CFD9'
        }
    }

    return (
        <>
            {SeatList.map((item) => (
                <SeatContainer
                    isAvailable={item.isAvailable}
                    CheckSeat={CheckSeat}
                    Selected={item.id}
                    onClick={() => ( item.isAvailable === false ? alert("Esse lugar já está reservado") : SelectSeat(item.id, item.name))}
                    key={item.id}
                ><div data-identifier="seat">{item.name}</div>
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
