import {Howl, Howler} from 'howler';
import ClaveSound from './clave6.wav'
import CowbellSound from './cowbell-latin-hit.wav'

// src for Howl is ./public/sound.wav for dev
// and ./sound.wav for prod
var bell = new Howl({
  src: [CowbellSound]
});

var sound = new Howl({
  src: [ClaveSound]
});

export const musicArray = [
  // 1.1
  {
    fun: () => {
      console.log(1)
      bell.play()

    }
  },
  // 1.2
  {
    fun: () => {
      console.log(2)

    }
  },
  // 2.1
  {
    fun: () => {
      console.log(3)
      sound.play()

    }
  },
  // 2.2
  {
    fun: () => {
      console.log(4)


    }
  },
  // 3.1
  {
    fun: () => {
      sound.play()
      console.log(5)
      bell.play()

    }
  },
  // 3.2
  {
    fun: () => {
      console.log(6)

    }
  },
  // 4.1
  {
    fun: () => {
      console.log(7)

    }
  },
  // 4.2
  {
    fun: () => {
      console.log(8)
    }
  },
  // 5.1
  {
    fun: () => {
      sound.play()
      bell.play()

      console.log(9)
    }
  },
  // 5.2
  {
    fun: () => {
      console.log(10)
    }
  },
  // 6.1
  {
    fun: () => {
      console.log(11)

    }
  },
  // 6.2
  {
    fun: () => {
      console.log(12)
      sound.play()

    }
  },
  // 7.1
  {
    fun: () => {
      console.log(13)
      bell.play()


    }
  },
  // 7.2
  {
    fun: () => {
      console.log(14)
    }
  },
  // 8.1
  {
    fun: () => {
      console.log(15)
      sound.play()


    }
  },
  // 8.2
  {
    fun: () => {
      console.log(16)
    }
  },

]

