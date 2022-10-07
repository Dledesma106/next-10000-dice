import * as SC from './style'

const Card = ({
    background,
    padding,
    children,
    width,
    margin,
}: { background: string, padding: string, children: JSX.Element, margin?:string, width?: string }) => {
    return (
        <SC.Wrapper background={background} padding={padding} margin={margin} width={width} >
            {children}
        </SC.Wrapper>
    )
}

export default Card