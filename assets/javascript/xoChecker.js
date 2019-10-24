// function that checks if there's a winner or a draw
const xoChecker = () => {
  if ( checkSquares('X') ) {
    // Popup alert after displaying character
      // Sweet alerts popup
      Swal.fire({
        type: 'success',
        title: 'X wins!',
        confirmButtonText: 'Cool'
      })
  } else if ( checkSquares('O') ) {
      Swal.fire({
        type: 'success',
        title: 'O wins!',
        confirmButtonText: 'Cool'
      })
  } else if ( checkDraw() ) {
      Swal.fire({
        type: 'info',
        title: 'Draw',
        confirmButtonText: 'Uncool'
      })
  }
}

// Function that checks if either 'O' or 'X' (letter) got 3 in a row
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

  if ((topLeft.innerText === letter) && (topCenter.innerText === letter) && (topRight.innerText === letter)) {
      topLeft.classList.add('win');
      topCenter.classList.add('win');
      topRight.classList.add('win');
      midLeft.classList.remove('square');
      midCenter.classList.remove('square');
      midRight.classList.remove('square');
      bottomLeft.classList.remove('square');
      bottomCenter.classList.remove('square');
      bottomRight.classList.remove('square');
      return true;
  } else if ((midLeft.innerText === letter) && (midCenter.innerText === letter) && (midRight.innerText === letter)) {
      midLeft.classList.add('win');
      midCenter.classList.add('win');
      midRight.classList.add('win');
      topLeft.classList.remove('square');
      topCenter.classList.remove('square');
      topRight.classList.remove('square');
      bottomLeft.classList.remove('square');
      bottomCenter.classList.remove('square');
      bottomRight.classList.remove('square');
      return true;
  } else if ((bottomLeft.innerText === letter) && (bottomCenter.innerText === letter) && (bottomRight.innerText === letter)) {
      bottomLeft.classList.add('win');
      bottomCenter.classList.add('win');
      bottomRight.classList.add('win');
      topLeft.classList.remove('square');
      topCenter.classList.remove('square');
      topRight.classList.remove('square');
      midLeft.classList.remove('square');
      midCenter.classList.remove('square');
      midRight.classList.remove('square');
      return true;
  } else if ((topLeft.innerText === letter) && (midLeft.innerText === letter) && (bottomLeft.innerText === letter)) {
      topLeft.classList.add('win');
      midLeft.classList.add('win');
      bottomLeft.classList.add('win');
      topCenter.classList.remove('square');
      midCenter.classList.remove('square');
      bottomCenter.classList.remove('square');
      topRight.classList.remove('square');
      midRight.classList.remove('square');
      bottomRight.classList.remove('square');
      return true;
  } else if ((topCenter.innerText === letter) && (midCenter.innerText === letter) && (bottomCenter.innerText === letter)) {
      topCenter.classList.add('win');
      midCenter.classList.add('win');
      bottomCenter.classList.add('win');
      topLeft.classList.remove('square');
      midLeft.classList.remove('square');
      bottomLeft.classList.remove('square');
      topRight.classList.remove('square');
      midRight.classList.remove('square');
      bottomRight.classList.remove('square');
      return true;
  } else if ((topRight.innerText === letter) && (midRight.innerText === letter) && (bottomRight.innerText === letter)) {
      topRight.classList.add('win');
      midRight.classList.add('win');
      bottomRight.classList.add('win');
      topLeft.classList.remove('square');
      midLeft.classList.remove('square');
      bottomLeft.classList.remove('square');
      topCenter.classList.remove('square');
      midCenter.classList.remove('square');
      bottomCenter.classList.remove('square');
      return true;
  } else if ((topLeft.innerText === letter) && (midCenter.innerText === letter) && (bottomRight.innerText === letter)) {
      topLeft.classList.add('win');
      midCenter.classList.add('win');
      bottomRight.classList.add('win');
      topCenter.classList.remove('square');
      topRight.classList.remove('square');
      midLeft.classList.remove('square');
      midRight.classList.remove('square');
      bottomLeft.classList.remove('square');
      bottomCenter.classList.remove('square');
      return true;
  } else if ((topRight.innerText === letter) && (midCenter.innerText === letter) && (bottomLeft.innerText === letter)) {
      topRight.classList.add('win');
      midCenter.classList.add('win');
      bottomLeft.classList.add('win');
      topLeft.classList.remove('square');
      topCenter.classList.remove('square');
      midLeft.classList.remove('square');
      midRight.classList.remove('square');
      bottomCenter.classList.remove('square');
      bottomRight.classList.remove('square');
      return true;
  }
  return false;
}

// Function that checks if all 9 squares have a character in them
const checkDraw = () => {
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
       (topLeft.innerText != '') && (topCenter.innerText != '') && (topRight.innerText != '') &&
       (midLeft.innerText != '') && (midCenter.innerText != '') && (midRight.innerText != '') &&
       (bottomLeft.innerText != '') && (bottomCenter.innerText != '') && (bottomRight.innerText != '')
     ) 
  {
    return true
  }
  return false;
}
