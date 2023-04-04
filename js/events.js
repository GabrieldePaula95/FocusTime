import { buttonPlay, buttonStop, buttonTurnUp, buttonTurnDown, buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace, minutesDisplay, secondsDisplay } from './elements.js'

export default function ({timer, sounds, controls}) {
    buttonPlay.addEventListener('click', () => {
    timer.countdown()
    sounds.pressButton()
    sounds.bgAudio.play()  
    })

    buttonStop.addEventListener('click', () => {
        timer.stop()
        sounds.pressButton()
        sounds.pressButtonStop() 
    })

    buttonTurnUp.addEventListener('click', () => {
        sounds.pressButton()
        controls.turnUpTime()
    })

    buttonTurnDown.addEventListener('click', () => {
        sounds.pressButton()
        controls.turnDownTime()
    })

    buttonSoundForest.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonForest()

    })

    buttonSoundRain.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonRain()
    })

    buttonSoundCoffeeShop.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonCoffeeShop()
    })

    buttonSoundFireplace.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonFireplace()
    })

}