export default function ({minutesDisplay}) {    
    function turnUpTime(){
    if(minutesDisplay.textContent > 55){
        alert("O Tempo não pode ser maior que 60 minutos")
        return
    }
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
    }

    function turnDownTime(){
    if(minutesDisplay.textContent < 5){
        alert("O Tempo não pode ser negativo!!")
    return
    }
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    }

    return {
        turnUpTime,
        turnDownTime
    }
}