import Swal from 'sweetalert2'

import { resetBoard } from 'components/resetBoard'

const xoChecker = () => {
  if ( checkSquares('X') ) {
    $.when().then(function() {
      Swal.fire({
        type: 'success',
        title: 'X wins!',
        confirmButtonText: 'Cool'
      })
      resetBoard();
    });
  } else if ( checkSquares('O') ) {
    $.when().then(function() {
      Swal.fire({
        type: 'success',
        title: 'O wins!',
        confirmButtonText: 'Cool'
      })
      resetBoard();
    });
  } else if (
    ((topLeft.innerText != '') && (topCenter.innerText != '') && (topRight.innerText != '') &&
      (midLeft.innerText != '') && (midCenter.innerText != '') && (midRight.innerText != '') &&
      (bottomLeft.innerText != '') && (bottomCenter.innerText != '') && (bottomRight.innerText != ''))
    ) {
    $.when().then(function() {
      Swal.fire({
        type: 'info',
        title: 'Draw...',
        confirmButtonText: 'Uncool'
      })
      resetBoard();
    });
  }
}

const checkSquares = (letter) => {
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
    ((topLeft.innerText === letter) && (topCenter.innerText === letter) && (topRight.innerText === letter)) ||
    ((midLeft.innerText === letter) && (midCenter.innerText === letter) && (midRight.innerText === letter)) ||
    ((bottomLeft.innerText === letter) && (bottomCenter.innerText === letter) && (bottomRight.innerText === letter)) ||
    ((topLeft.innerText === letter) && (midLeft.innerText === letter) && (bottomLeft.innerText === letter)) ||
    ((topCenter.innerText === letter) && (midCenter.innerText === letter) && (bottomCenter.innerText === letter)) ||
    ((topRight.innerText === letter) && (midRight.innerText === letter) && (bottomRight.innerText === letter)) ||
    ((topLeft.innerText === letter) && (midCenter.innerText === letter) && (bottomRight.innerText === letter)) ||
    ((topRight.innerText === letter) && (midCenter.innerText === letter) && (bottomLeft.innerText === letter))
    ) {
        return true;
      }
  return false;
}

export { xoChecker };