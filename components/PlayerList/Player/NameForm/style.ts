import styled from 'styled-components'

export const Form = styled.form`
    margin: 0;
    display:flex;
    align-items: center;
`
export const Input = styled.input<{isTheirTurn: boolean}>`
    max-height:2em;
    background-color: #027000;
    color: white;
    border: none;
    ${({isTheirTurn})=>isTheirTurn && `
        background-color: yellow;
        color: black;
    `}
`
export const IconWrapper = styled.div`
    padding: 1em;
`