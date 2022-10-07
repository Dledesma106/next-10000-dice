
const calculateScore = (dice)=>{        
    let diceCount = [0,0,0,0,0,0]
    for (let index = 0; index < dice.length; index++) {
        switch (dice[index].value){
            case 1:
                diceCount[0] += 1;
                break;
            case 2:
                diceCount[1] += 1;
                break;
            case 3:
                diceCount[2] += 1;
                break;
            case 4:
                diceCount[3] += 1;
                break;
            case 5:
                diceCount[4] += 1;
                break;   
            case 6:
                diceCount[5] += 1;
                break;       
        }
        
    }
    const diceCountObject = diceCount.map(function(el, i) {
        return {
          dieValue: i+1,
          count: el
        }
    });
    let score = 0
    if(hasFlush(dice)){
        score += 1500
    }
    for (let index = 0; index < diceCountObject.length; index++) {
        switch (index) {
            case 0:
                if (diceCountObject[0].count<3) {
                    score += diceCountObject[0].count*100
                }
                else if(diceCountObject[0].count >= 3 && diceCountObject[0].count < 6 ){
                    score += 1000
                    const remaining1D = diceCountObject[0].count - 3
                    score += remaining1D * 100
                }
                else {
                    score += 2000
                }
                break;
            case 1:
                if (diceCountObject[1].count == 3) {
                    score += diceCountObject[1].dieValue*100
                }else if(diceCountObject[1].count == 6){
                    score += diceCountObject[1].dieValue*200
                }
                break;
            case 2:
                if (diceCountObject[2].count >= 3) {
                    score += diceCountObject[2].dieValue*100
                }else if(diceCountObject[2].count == 6){
                    score += diceCountObject[2].dieValue*200
                }
                break;
            case 3:
                if (diceCountObject[3].count >= 3) {
                    score += diceCountObject[3].dieValue*100
                }else if(diceCountObject[3].count == 6){
                    score += diceCountObject[3].dieValue*200
                }
                break;
            case 4:
                if (diceCountObject[4].count < 3) {
                    score += diceCountObject[4].count*50
                }
                else if(diceCountObject[4].count >= 3 && diceCountObject[4].count < 6){
                    score += diceCountObject[4].dieValue*100
                    const remaining5D = diceCountObject[4].count - 3
                    score += remaining5D*50
                }else if(diceCountObject[4].count == 6){
                    score += diceCountObject[4].dieValue*200
                }
                break;
            case 5:
                if (diceCountObject[5].count >= 3) {
                    score += diceCountObject[5].dieValue*100
                }else if(diceCountObject[5].count == 6){
                    score += diceCountObject[5].dieValue*200
                }
                break;    
        
            default:
                break;
        } 
    }
    
    return score        
}




const hasFlush = (dice) => {
    if(dice.length<5){
        return false
    }else{
        const sortedDice = dice.sort((a,b) => a.value - b.value)
        let itsFlush = true
        let i = 1
        while (i<sortedDice.length && itsFlush) {
            console.clear
            console.log(i)
            console.log(`${sortedDice[i].value} - ${sortedDice[i-1].value} == 1?`)
            if(sortedDice[i].value != sortedDice[i-1].value){
                itsFlush = (sortedDice[i].value - sortedDice[i-1].value) == 1
            }
            i++
            console.log(`itsflush? ${itsFlush}`)
        }
        
        return itsFlush
    }
}

//Returns the amount of dice with the same value as a given die within a given set of dice
const sameDieValueCount = (die, dice) => {
    let count = 0
    for (let i = 0; i < dice.length; i++) {
        if (dice[i].id !== die[0].id && dice[i].value === die[0].value) {
            count++
        }
    }
    return count
}

const canHoldDice = (id, dice) => {
    const die = dice.filter(die => die.id === id)
    const notAsideDice = dice.filter(die => !die.isSetAside)
    const heldDice = dice.filter(die => die.isHeld)

    if(calculateScore(die)>0){
        console.log("este dado tiene puntaje")
        return true
    }else if(sameDieValueCount(die, notAsideDice)>=2 && sameDieValueCount(die, heldDice)<3){
        console.log("hay 3 o 6 dados de este tipo en los dados no apartados")

        return true
    }
   /*  else {
        console.log(`pruebo a ver si hay flush en los dados no apartados: ${notAsideDice}`)
        return hasFlush(notAsideDice)
    } */
    
}
export {calculateScore, canHoldDice}