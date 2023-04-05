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
        background()
        colorsvg()
        buttonSoundForest.style.background='hsl(193.9, 97.5%, 31.2%)';
        document.querySelector('.forest svg path').style.fill ="#FFF"               
    })

    buttonSoundRain.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonRain()
        background()
        colorsvg()
        buttonSoundRain.style.background='hsl(193.9, 97.5%, 31.2%)'; 
        document.querySelector('.rain svg path').style.fill ="#FFF"
    })

    buttonSoundCoffeeShop.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonCoffeeShop()
        background()
        colorsvg()
        buttonSoundCoffeeShop.style.background='hsl(193.9, 97.5%, 31.2%)';
        document.querySelector('.coffee-shop svg path').style.fill ="#FFF"
    })

    buttonSoundFireplace.addEventListener('click', () => {
        sounds.pressButton()
        sounds.pressButtonFireplace()
        background()
        colorsvg()
        buttonSoundFireplace.style.background='hsl(193.9, 97.5%, 31.2%)';   
        document.querySelector('.fireplace svg path').style.fill ="#FFF" 

    })

    function colorsvg () {
        document.querySelector('.forest svg path').style.fill ="hsl(240, 5.7%, 20.8%)"
        document.querySelector('.rain svg path').style.fill ="hsl(240, 5.7%, 20.8%)"
        document.querySelector('.coffee-shop svg path').style.fill ="hsl(240, 5.7%, 20.8%)"
        document.querySelector('.fireplace svg path').style.fill ="hsl(240, 5.7%, 20.8%)"
    }
    function background () {
        buttonSoundForest.style.background='hsla(240, 9%, 89%, 1)';
        buttonSoundRain.style.background='hsla(240, 9%, 89%, 1)';
        buttonSoundCoffeeShop.style.background='hsla(240, 9%, 89%, 1)';
        buttonSoundFireplace.style.background='hsla(240, 9%, 89%, 1)';
    }
}