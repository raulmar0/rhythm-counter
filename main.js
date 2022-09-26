import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
const numinput = window.document.getElementById('numinput');
const titulo = document.getElementById('title');

import {Howl, Howler} from 'howler';


var sound = new Howl({
  src: ['clave6.wav']
});

console.log('sdfa')

numinput.addEventListener('input', (e) => {
  time = e.target.value;
});

var count = 0,
time = numinput.value;

let mockupArray = [
  {
    fun: () => {
      console.log(1)
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

console.log(mockupArray)

function timeout() {
  setTimeout(function () {
    if (count === 16) {
      count = 0;
    }
    titulo.innerHTML = count;
    mockupArray[count].fun()
    
    count += 1;
    timeout();
  }, time);
}
timeout();



setupCounter(document.querySelector('#counter'))
