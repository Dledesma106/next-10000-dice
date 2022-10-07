import * as SC from './style'
import editIconDark from '../../../assets/icons/edit-icon.svg'
import editIconLight from '../../../assets/icons/edit-icon-light.svg'
import trashIconDark from '../../../assets/icons/trash-icon.svg'
import trashIconLight from '../../../assets/icons/trash-icon-light.svg'
import Img from 'next/image'
import NameForm from './NameForm/NameForm'
import {useEffect, useState} from 'react'


const Player = ({player, functions}) => {
    const {isTheirTurn, id, name, score, isRenaming} = player
    const {removePlayer, displayNameInput, renamePlayer} = functions
    
    const [editIcon, setEditIcon] = useState(editIconLight)
    const [trashIcon, setTrashIcon] = useState(trashIconLight)

    useEffect(
        ()=>{
            setEditIcon(
                ()=>{
                    if(isTheirTurn){
                        return editIconDark
                    }else{
                        return editIconLight
                    }
                }
            )
            setTrashIcon(
                ()=>{
                    if(isTheirTurn){
                        return trashIconDark
                    }else{
                        return trashIconLight
                    }
                }
            )
        },[isTheirTurn]
    )
    

    const displayName = isRenaming? <NameForm renamePlayer={renamePlayer} id={id} name={name} isTheirTurn={isTheirTurn}/> : <SC.PlayerText> {name}</SC.PlayerText>

    const iconSize='30px'

    return (
        <SC.PlayerWrapper isTheirTurn = {isTheirTurn}>
            <SC.ItemsWrapper>
                <SC.IconWrapper onClick={()=>{displayNameInput(id)}}>    
                    <Img src={editIcon} width={iconSize} height={iconSize} alt="icono para editar el nombre" />
                </SC.IconWrapper>
                {displayName}
            </SC.ItemsWrapper>
            <SC.ItemsWrapper>
                <SC.PlayerText>{score}</SC.PlayerText>
                <SC.IconWrapper onClick={()=>{removePlayer(id)}}>
                    <Img src={trashIcon} width={iconSize} height={iconSize} alt="icono para borrar al jugador" />
                </SC.IconWrapper>
            </SC.ItemsWrapper>
        </SC.PlayerWrapper>
    )
}

export default Player