import styled from "styled-components";


export const Wrapper = styled.article<{
    background: string,
    padding: string,
    margin?: string,
    width?: string
}>`
    border-radius: 2px;
    width: ${ props => props.width || "100%"};
    background: ${props => props.background};
    padding: ${props => props.padding};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: ${props => props.margin || "0"};
    backdrop-filter: blur(4px);
    height: 90vh;
    border-radius: 1em;
`