import * as SC from './style'
import Player from './Player'




const PlayerList = ({playerList, functions}) => {
    const {addPlayer, removePlayer, displayNameInput, renamePlayer} = functions

    const players = playerList.map( player => <Player key={player.id} player={player} functions={{removePlayer, displayNameInput, renamePlayer}}/>)
    
    return (
        <>
            <SC.Title>Lista de jugadores</SC.Title>
            <SC.ListButtonWrapper>
                <SC.ListWrapper>
                    {players.length > 0 && players}
                </SC.ListWrapper>
                <SC.ButtonWrapper>
                    <SC.AddPlayerButton onClick={addPlayer}>Agregar jugador</SC.AddPlayerButton>
                </SC.ButtonWrapper>
            </SC.ListButtonWrapper>
        </>
    )
}

export default PlayerList