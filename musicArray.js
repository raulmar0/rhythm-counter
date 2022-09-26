import {Howl, Howler} from 'howler';



var bell = new Howl({
  src: ['cowbell-latin-hit.wav']
});

var sound = new Howl({
  src: ['clave6.wav']
});

export const musicArray = [
  {
    fun: () => {
      console.log(1)
      bell.play()

    }
  },
  {
    fun: () => {
      console.log(2)

    }
  },
  {
    fun: () => {
      console.log(3)
      sound.play()

    }
  },
  {
    fun: () => {
      console.log(4)


    }
  },
  {
    fun: () => {
      sound.play()
      console.log(5)
      bell.play()

    }
  },
  {
    fun: () => {
      console.log(6)

    }
  },
  {
    fun: () => {
      console.log(7)

    }
  },
  {
    fun: () => {
      console.log(8)
    }
  },
  {
    fun: () => {
      sound.play()
      bell.play()

      console.log(9)
    }
  },
  {
    fun: () => {
      console.log(10)
    }
  },
  {
    fun: () => {
      console.log(11)

    }
  },
  {
    fun: () => {
      console.log(12)
      sound.play()

    }
  },
  {
    fun: () => {
      console.log(13)
      bell.play()


    }
  },
  {
    fun: () => {
      console.log(14)
    }
  },
  {
    fun: () => {
      console.log(15)
      sound.play()


    }
  },
  {
    fun: () => {
      console.log(16)
    }
  },

]

