import './style.css';
import { post, update } from './modules/game.js';

const form = document.querySelector('#form');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  post();
});

refresh.addEventListener('click', () => {
  update();
});

window.addEventListener('DOMContentLoaded', () => {
  update();
});