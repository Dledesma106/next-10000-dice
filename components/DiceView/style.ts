import styled from 'styled-components'

export const DisplayTurn = styled.h3`
    color: white;
`
export const DiceWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    

`

export const DiceGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 100px 100px;
    grid-gap: 50px;
    background-color: #027000;
    padding: 3em;
    border-radius: 36px;
`

export const Score = styled.p`
    color: white;
    margin: 0.1em;
    font-size; 1.5em;
`


export const ScoreWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    width: 45%;

`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DiceButtonWrapper = styled.div `
    height:87%;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
`

export const StyledButton = styled.button`
    background-color: #027000;
    padding: 0.5em 1em;
    color: white;
    border: none;
    margin: 1em;
    border-radius: 0.5em;
`
