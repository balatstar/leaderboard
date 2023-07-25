const sendScore = async (name, score) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yeVvC4Do7HGekmO2b8B4/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    const errorDisplay = document.querySelector('.error-display');
    errorDisplay.textContent = 'Error adding your score. Please try again later.';
  }
};

export default sendScore;