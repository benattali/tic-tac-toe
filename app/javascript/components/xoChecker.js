import { resetBoard } from 'components/resetBoard'

const xoChecker = () => {
  const topLeft = document.querySelector('#top-left');
  const topCenter = document.querySelector('#top-center');
  const topRight = document.querySelector('#top-right');
  const midLeft = document.querySelector('#mid-left');
  const midCenter = document.querySelector('#mid-center');
  const midRight = document.querySelector('#mid-right');
  const bottomLeft = document.querySelector('#bottom-left');
  const bottomCenter = document.querySelector('#bottom-center');
  const bottomRight = document.querySelector('#bottom-right');

  if (
    ((topLeft.innerText === 'X') && (topCenter.innerText === 'X') && (topRight.innerText === 'X')) ||
    ((midLeft.innerText === 'X') && (midCenter.innerText === 'X') && (midRight.innerText === 'X')) ||
    ((bottomLeft.innerText === 'X') && (bottomCenter.innerText === 'X') && (bottomRight.innerText === 'X')) ||
    ((topLeft.innerText === 'X') && (midLeft.innerText === 'X') && (bottomLeft.innerText === 'X')) ||
    ((topCenter.innerText === 'X') && (midCenter.innerText === 'X') && (bottomCenter.innerText === 'X')) ||
    ((topRight.innerText === 'X') && (midRight.innerText === 'X') && (bottomRight.innerText === 'X')) ||
    ((topLeft.innerText === 'X') && (midCenter.innerText === 'X') && (bottomRight.innerText === 'X')) ||
    ((topRight.innerText === 'X') && (midCenter.innerText === 'X') && (bottomLeft.innerText === 'X'))
    ) {
      $.when().then(function() {
        alert("X wins");
        resetBoard();
      });
  } else if (
    ((topLeft.innerText === 'O') && (topCenter.innerText === 'O') && (topRight.innerText === 'O')) ||
    ((midLeft.innerText === 'O') && (midCenter.innerText === 'O') && (midRight.innerText === 'O')) ||
    ((bottomLeft.innerText === 'O') && (bottomCenter.innerText === 'O') && (bottomRight.innerText === 'O')) ||
    ((topLeft.innerText === 'O') && (midLeft.innerText === 'O') && (bottomLeft.innerText === 'O')) ||
    ((topCenter.innerText === 'O') && (midCenter.innerText === 'O') && (bottomCenter.innerText === 'O')) ||
    ((topRight.innerText === 'O') && (midRight.innerText === 'O') && (bottomRight.innerText === 'O')) ||
    ((topLeft.innerText === 'O') && (midCenter.innerText === 'O') && (bottomRight.innerText === 'O')) ||
    ((topRight.innerText === 'O') && (midCenter.innerText === 'O') && (bottomLeft.innerText === 'O'))
    ) {
      $.when().then(function() {
        alert("O wins");
        resetBoard();
      });
  }
}

export { xoChecker };