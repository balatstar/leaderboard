const boardList = [
  {
    name: 'Name 1',
    score: '100',
  },
  {
    name: 'Name 1',
    score: '50',
  },
  {
    name: 'Name 1',
    score: '20',
  },
  {
    name: 'Name 1',
    score: '5',
  },
];

const boardDetails = document.querySelector('.board-details');

export const postBoard = () => {
  boardList.forEach((postData) => {
    const postElement = document.createElement('li');
    postElement.innerHTML = `
    ${postData.name}: ${postData.score}
  `;
    boardDetails.appendChild(postElement);
  });
};
