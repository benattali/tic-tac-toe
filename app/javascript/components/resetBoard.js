const resetBoard = () => {
  const board = document.querySelector('.main-board');
  const children = board.children;

  // Reset the innerText of all the squares to nothing
  for (var i = 0; i < children.length; i++) {
    children[i].innerText = '';
  }
}

export { resetBoard };