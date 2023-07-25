export const sendScore = async (name, score, boardDetails) => {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yeVvC4Do7HGekmO2b8B4/scores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: name,
          score: score
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('New score added:', data);
      fetchLeaderboardData(boardDetails); // Fetch and update the leaderboard after adding a new score
    } catch (error) {
      console.error('Error:', error);
    }
}
