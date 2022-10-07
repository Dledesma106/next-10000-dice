import { nanoid } from "nanoid";

export const getRandomDieValue = () =>{
    const randomNumber = Math.floor(Math.random() * 6)+1

    return randomNumber;
    
}

const getDie = (value) =>{
    return {
        id:nanoid(),
        value: value,
        isWhite: true,
        isHeld: false,
        isSetAside: false
    }
}

export const getRandomDie = () =>{
    return {
        id:nanoid(),
        value: getRandomDieValue(),
        isWhite: true,
        isHeld: false,
        isSetAside: false
    }
}

export const sameDieCount5Dice = () => {
    let random = getRandomDieValue();
    return [getDie(random),getDie(random),getDie(random),getDie(random),getDie(4),getDie(6)]
}

export const initialDice = [getRandomDie(),getRandomDie(),getRandomDie(),getRandomDie(),getRandomDie(),getRandomDie(),]