import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { musicArray } from './musicArray'

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

console.log('sdfa')

numinput.addEventListener('input', (e) => {
  time = e.target.value;
});

var count = 0,
time = numinput.value;


console.log(musicArray)



function timeout() {
  setTimeout(function () {
    if (count === 16) {
      count = 0;
    }
    musicArray[count].fun()
    
    
    count += 1;
    titulo.innerHTML = count%2===0 ? titulo.innerHTML : (count+1)/2;


    timeout();
  }, time);
}
timeout();





setupCounter(document.querySelector('#counter'))
