import './style.css';
import Swal from 'sweetalert2';
import cup from './images/cup.jpg';
import { post, update } from './modules/game.js';

const form = document.querySelector('#form');
const refresh = document.querySelector('.refresh');
const user = document.querySelector('.name');
const score = document.querySelector('.score');
const scoreTable = document.querySelector('.score-history');

const cupImg = document.querySelector('#cup');
cupImg.src = cup;

const toast = Swal.mixin({
  toast: true,
  icon: 'success',
  title: 'General Title',
  position: 'top-right',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  post(user, score);
  toast.fire({
    title: 'Score added successfully!',
  });
});

refresh.addEventListener('click', () => {
  update(scoreTable);
  toast.fire({
    title: 'Refreshed successfully!',
  });
});

window.addEventListener('DOMContentLoaded', () => {
  update(scoreTable);
});
