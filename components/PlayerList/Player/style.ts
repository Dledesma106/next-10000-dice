import styled from 'styled-components'


export const PlayerWrapper = styled.div<{isTheirTurn: boolean}>`
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: #027000;
    color: white;
    max-height: 5em;
    border-radius: 1em;
    margin: 0.1em;

    ${({ isTheirTurn }) => isTheirTurn && `
        color: #2d2d2d;
        background-color:yellow;
    `}
`

export const PlayerText = styled.p`
    margin:0;
    padding:0.5em;
    font-size: 1.5em;

`

export const NameInput = styled.input`
    
    padding:0.5em;

`

export const ItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`


export const IconWrapper = styled.div`

    padding:0.5em;
`