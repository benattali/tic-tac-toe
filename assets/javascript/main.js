const main = () => {
  let oChecker = false;
  let newGame = false;

  // Event listener to check for a new game situation
  window.addEventListener('mousedown', function(event) {
    const board = document.querySelector('.main-board');
    const children = board.children;

    // Sets newGame = true if all the squares are empty (new game)
    // Otherwise newGame = false
    for (var i = 0; i < children.length; i++) {
      if (children[i].innerText != '') {
        newGame = false;
        break;
      } else {
        newGame = true;
      }
    }
  });

  // Event listener to place 'X' and 'O'
  window.addEventListener('mouseup', function(event) {
    const square = event.target;

    if (square.classList.contains('square') && (square.innerText === '')) {

        if ((oChecker === false) || (newGame === true)) {
          square.innerText = 'X';
          square.classList.remove('square');
          oChecker = true;
          xoChecker();
        } else {
          square.innerText = 'O';
          square.classList.remove('square');
          oChecker = false;
          xoChecker();
        }
    }
  });
}

main();
