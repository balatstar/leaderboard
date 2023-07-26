import './style.css';
import fetchLeaderboardData from './modules/boardlist.js';
import sendScore from './modules/addscore.js';

const boardDetails = document.querySelector('.board-details');
const refreshButton = document.querySelector('.btn-refresh');

refreshButton.addEventListener('click', () => {
  fetchLeaderboardData(boardDetails);
});

const scoreForm = document.getElementById('score-form');

scoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const name = nameInput.value;
  const score = scoreInput.value;
  sendScore(name, score, boardDetails);

  nameInput.value = ''; // Clear the name input field
  scoreInput.value = ''; // Clear the score input field
});

fetchLeaderboardData(boardDetails);
