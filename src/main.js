import './style.css'
import { musicArray } from './musicArray'

const MINUTE_IN_MS = 60 * 1000;
const NUMBER_OF_BEATS = 8;
const NUMBER_OF_SUBBEATS = 2;
const COUNT_LIMIT = NUMBER_OF_BEATS * NUMBER_OF_SUBBEATS;



document.querySelector('#app').innerHTML = `
<h1 id="title">Rhythm Counter</h1>
<p id="countnumber">0</p>
<div class="input-container">
  <input type="range" id="numinput-slider" value="250" min="40" max="250" step="5"/>
  <input type="number" id="numbox"  value="250" />
  <button id="toggleplay">Play</button>
</div>

`;
const numInput = document.getElementById('numinput-slider');
const countNum = document.getElementById('countnumber');
const numbox = document.getElementById('numbox');
const togglePlay = document.getElementById('toggleplay')

let count = 0;
let time = numInput.value;
let realBpm = ((MINUTE_IN_MS)/time)/NUMBER_OF_SUBBEATS;
let isPlaying = false
let timer = null

numInput.addEventListener('input', (e) => {
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
  countNum.innerHTML = count % 2 === 0 ? countNum.innerHTML : (count+1)/2;
}

