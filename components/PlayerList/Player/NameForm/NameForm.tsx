import * as SC from './style'
import Img from 'next/image'
import okIconDark from '../../../../assets/icons/ok-icon.svg'
import okIconLight from '../../../../assets/icons/ok-icon-light.svg'
import {useEffect, useState} from 'react'


const NameForm = ({renamePlayer, id, name, isTheirTurn}) => {
    const [newName, setNewName] = useState('')
    const [okIcon, setOkIcon] = useState(okIconLight)


    useEffect(
        ()=>{
            setOkIcon(isTheirTurn? okIconDark : okIconLight)
        },[isTheirTurn]
    )
    const handleChange = (e) => {
        e.preventDefault()
        setNewName(e.target.value)
    }

    return (
        <SC.Form>
            <SC.Input
                type="text"
                placeholder={name}
                value={newName}
                onChange={handleChange}
                isTheirTurn={isTheirTurn}
            />
            <SC.IconWrapper onClick={()=>{renamePlayer(id, newName)}}>
                <Img src={okIcon} alt=""/>
            </SC.IconWrapper>
        </SC.Form>
    )
}

export default NameForm