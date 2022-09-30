import './style.css'
import { musicArray } from './musicArray'

const MINUTE_IN_MS = 60 * 1000;
const NUMBER_OF_BEATS = 8;
const NUMBER_OF_SUBBEATS = 2;
const COUNT_LIMIT = NUMBER_OF_BEATS * NUMBER_OF_SUBBEATS;



document.querySelector('#app').innerHTML = `
<h1 id="title">0</h1>
<div class="input-container">
  <input type="range" id="numinput-slider" value="250" min="40" max="250" step="5"/>
  <input type="number" id="numbox"  value="250" />
</div>
<button id="toggleplay">Play</button>

`;
const numinput = document.getElementById('numinput-slider');
const titulo = document.getElementById('title');
const numbox = document.getElementById('numbox');
const togglePlay = document.getElementById('toggleplay')

let count = 0;
let time = numinput.value;
let realBpm = ((MINUTE_IN_MS)/time)/NUMBER_OF_SUBBEATS;
let isPlaying = false
let timer = null

numinput.addEventListener('input', (e) => {
  time = e.target.value;
  numbox.value = e.target.value
  realBpm = ((MINUTE_IN_MS)/time)/NUMBER_OF_SUBBEATS;
  if(isPlaying) {
    clearInterval(timer)
    timer = setInterval(tick, realBpm)
  }
});

togglePlay.addEventListener('click',() => {
  count = 0
  if(isPlaying) {
    togglePlay.innerHTML = 'Play'
    clearInterval(timer)
  } else {
    togglePlay.innerHTML = 'Stop'
    // tick()
    timer = setInterval(tick, realBpm)
  }
  isPlaying = !isPlaying
})

const tick = () => {

  if (count === COUNT_LIMIT) {
    count = 0;
  }
  musicArray[count].fun()
  
  count++;
  titulo.innerHTML = count % 2 === 0 ? titulo.innerHTML : (count+1)/2;
}

