import './style.css';
import { post, update } from './modules/game.js';

const form = document.querySelector('#form');
const refresh = document.querySelector('.refresh');
const user = document.querySelector('.name');
const score = document.querySelector('.score');
const scoreTable = document.querySelector('.score-history');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  post(user, score);
});

refresh.addEventListener('click', () => {
  update(scoreTable);
});

window.addEventListener('DOMContentLoaded', () => {
  update(scoreTable);
});