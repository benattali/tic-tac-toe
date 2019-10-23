const newGame = () => {
  const button = document.querySelector('.new-game');

  button.addEventListener('click', function(event) {
    resetBoard();
  });
}

const resetBoard = () => {
  const board = document.querySelector('.main-board');
  const children = board.children;

  // Reset the innerText of all the squares to nothing
  for (var i = 0; i < children.length; i++) {
    children[i].innerText = '';
    if (children[i].classList.contains('win')) {
      children[i].classList.remove('win');
    }
  }
}

newGame();