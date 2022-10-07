import {useEffect, useState} from 'react'
import * as SC from './style'
import Die from './Die/Die'
import { calculateScore } from '../utils'
const DiceView = ({dice, functions, playerList}) => {
    const [score, setScore] = useState(0)
    const [heldScore, setHeldScore] = useState(0)
    const [canSave, setCanSave] = useState(false)
    const [canRollDice, setCanRollDice] = useState(true)
    const {rollDice, holdDice, savePoints, passTurn} = functions
    const [currentPlayer] = playerList.filter(player => player.isTheirTurn)
    

    useEffect(() => {
        const heldDice = dice.filter(die => die.isHeld)
        const notAsideDice = dice.filter(die => !die.isSetAside)
        
        setHeldScore(calculateScore(heldDice))
        setCanSave(() => {
            const newHeldScore = calculateScore(heldDice)
            console.log(score, newHeldScore)
            if(currentPlayer.score >= 750 || score+newHeldScore>=750){ //si el jugador tiene 750 puntos o mas, o el total de los puntos en la mesa es 750 o mas
                if (notAsideDice.length>0) { //si hay dados no apartado
                    if (calculateScore(notAsideDice)>0) { //si los dados no apartados tienen puntaje
                        console.log(calculateScore(notAsideDice))
                        return true //se pueden guardar los puntos
                    }else{//si los dados no apartados no tienen puntaje
                        return false //no se pueden guardar los puntos
                    }
                }
                return true//si todos los dados estan apartados se pueden guardar puntos
            }
            return false//no se pueden guardar puntos
        })
        setCanRollDice(()=>{
            if (notAsideDice.length===0 || calculateScore(heldDice)>0) {
                return true
            }else{
                return false
            }
        })
        console.clear
        console.log(
        `canSave: ${canSave}, canRollDice: ${canRollDice} `
        )
 
    }, [dice])

    


    const rollDiceSetScore = () =>{
        rollDice()
        setScore(prevScore => prevScore + heldScore)
        setHeldScore(0)
    }

    const savePointsResetScore = () => {
        const newScore = score + heldScore
        savePoints(newScore)
        setScore(0)
        
    }
    const passTurnResetScore = () => {
        setScore(0)
        passTurn()
    }

    const diceElems = dice.map(die => <Die key={die.id} die={die} holdDice={holdDice} dice={dice}/>)
    return(
        <>
            <SC.DisplayTurn>
                Turno de: {currentPlayer && currentPlayer.name}
            </SC.DisplayTurn>
            <SC.DiceButtonWrapper>
                <SC.DiceWrapper>
                    <SC.DiceGrid>
                    {diceElems}
                    </SC.DiceGrid>
                    <SC.ScoreWrapper>
                        <SC.Score>
                            Puntaje en la tirada:
                        </SC.Score>
                        <SC.Score>
                            {heldScore}
                        </SC.Score>
                    </SC.ScoreWrapper>
                    <SC.ScoreWrapper>
                        <SC.Score>
                            Puntaje en mano:
                        </SC.Score>
                        <SC.Score>
                            {score}
                        </SC.Score>
                    </SC.ScoreWrapper>
                </SC.DiceWrapper>
                <SC.ButtonWrapper>
                    <SC.StyledButton onClick={savePointsResetScore} disabled={!canSave}>
                        Guardar puntos
                    </SC.StyledButton>
                    <SC.StyledButton onClick={passTurnResetScore}>
                        Pasar el Turno
                    </SC.StyledButton>
                    <SC.StyledButton onClick={rollDiceSetScore} disabled={!canRollDice}>
                        Tirar dados
                    </SC.StyledButton>
                </SC.ButtonWrapper>
            </SC.DiceButtonWrapper>
        </>
    )

}

export default DiceView