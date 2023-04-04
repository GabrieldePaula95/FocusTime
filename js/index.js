import Sounds from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'
import { buttonSoundForest, minutesDisplay, secondsDisplay } from './elements.js'
import Constrols from './constrols.js'

const controls = Constrols({minutesDisplay})

const sounds = Sounds()

const timer = Timer({
    minutesDisplay,
    secondsDisplay
})

Events({timer, sounds, controls})
