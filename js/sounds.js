export default () => {  
    const bgAudio = new Audio("./audio/lofi.mp3")

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const soundForest = new Audio("./audio/floresta.wav")
    const soundRain = new Audio("./audio/chuva.wav")
    const soundCoffeeShop = new Audio("./audio/cafeteria.wav")
    const soundFireplace = new Audio("./audio/lareira.wav")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    bgAudio.volume = 0.5
    bgAudio.loop = true
    soundForest.loop = true
    soundRain.loop = true
    soundCoffeeShop.loop = true
    soundFireplace.loop = true

    function pressButton () {
        buttonPressAudio.play()
    } 

    function pressButtonStop () {
        bgAudio.pause()
        soundForest.pause()
        soundRain.pause()
        soundCoffeeShop.pause()
        soundFireplace.pause()   
    }

    function pressButtonForest () {
        pressButtonStop()
        soundForest.play()           
    } 
    function pressButtonRain () {
        pressButtonStop()
        soundRain.play()        
    } 
    function pressButtonCoffeeShop () {
        pressButtonStop()
        soundCoffeeShop.play()        
    } 
    function pressButtonFireplace () {
        pressButtonStop()
        soundFireplace.play()
    } 
    
    return {
        pressButton,
        pressButtonStop,
        pressButtonForest,
        pressButtonRain,
        pressButtonCoffeeShop,
        pressButtonFireplace,
        kitchenTimer,
        bgAudio
    }
} 