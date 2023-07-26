const fetchLeaderboardData = async (boardDetails) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yeVvC4Do7HGekmO2b8B4/scores/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    boardDetails.innerHTML = ''; // Clear the existing leaderboard content

    const boardList = data.result;
    boardList.forEach((postData) => {
      const postElement = document.createElement('li');
      postElement.innerHTML = `
        ${postData.user}: ${postData.score}
      `;
      boardDetails.appendChild(postElement);
    });
  } catch (error) {
    const errorDisplay = document.querySelector('.error-display');
    errorDisplay.textContent = 'Error fetching the leaderboard. Please try again later.';
  }
};

export default fetchLeaderboardData;