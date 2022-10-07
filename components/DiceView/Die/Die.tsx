import * as SC from './style'
import w1d from '../../../assets/dice/w1d.svg'
import w2d from '../../../assets/dice/w2d.svg'
import w3d from '../../../assets/dice/w3d.svg'
import w4d from '../../../assets/dice/w4d.svg'
import w5d from '../../../assets/dice/w5d.svg'
import w6d from '../../../assets/dice/w6d.svg'
import y1d from '../../../assets/dice/y1d.svg'
import y2d from '../../../assets/dice/y2d.svg'
import y3d from '../../../assets/dice/y3d.svg'
import y4d from '../../../assets/dice/y4d.svg'
import y5d from '../../../assets/dice/y5d.svg'
import y6d from '../../../assets/dice/y6d.svg'
import b1d from '../../../assets/dice/b1d.svg'
import b2d from '../../../assets/dice/b2d.svg'
import b3d from '../../../assets/dice/b3d.svg'
import b4d from '../../../assets/dice/b4d.svg'
import b5d from '../../../assets/dice/b5d.svg'
import b6d from '../../../assets/dice/b6d.svg'
import r1d from '../../../assets/dice/r1d.svg'
import r2d from '../../../assets/dice/r2d.svg'
import r3d from '../../../assets/dice/r3d.svg'
import r4d from '../../../assets/dice/r4d.svg'
import r5d from '../../../assets/dice/r5d.svg'
import r6d from '../../../assets/dice/r6d.svg'
import blank from '../../../assets/dice/blank-dice.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Die = ({die, dice, holdDice}) => {
    const [dieImg, setDieImg] = useState(blank)
    const getDieImg = () =>{
        if(die.isSetAside){
            switch(die.value){
                case 1:
                    return r1d
                case 2:
                    return r2d
                case 3:
                    return r3d
                case 4:
                    return r4d
                case 5: 
                    return r5d
                case 6:
                    return r6d
            }
        }
        if(die.isHeld){
            switch(die.value){
                case 1:
                    return y1d
                case 2:
                    return y2d
                case 3:
                    return y3d
                case 4:
                    return y4d
                case 5: 
                    return y5d
                case 6:
                    return y6d
            }
        }
        if(die.isWhite){
            switch(die.value){
                case 1:
                    return w1d
                case 2:
                    return w2d
                case 3:
                    return w3d
                case 4:
                    return w4d
                case 5: 
                    return w5d
                case 6:
                    return w6d
            }
        }
        if (!die.isWhite){
            switch(die.value){
                case 1:
                    return b1d
                case 2:
                    return b2d
                case 3:
                    return b3d
                case 4:
                    return b4d
                case 5: 
                    return b5d
                case 6:
                    return b6d
            }
        }
    }

    useEffect(()=>{
        setDieImg(getDieImg())
        
    },[dice])
    



    return (
        <>
            {dieImg && <Image src={dieImg} onClick={()=>{holdDice(die.id)}}/>}
        </>
    )
}

export default Die