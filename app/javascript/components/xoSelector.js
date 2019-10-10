const xoSelector = () => {
    const board = document.querySelectorAll('.square');
    let oChecker = false;
    window.addEventListener('click', function(event) {
        const square = event.target;

        if ((square.id === 'top-left') || (square.id === 'top-center') || (square.id === 'top-right') || (square.id === 'mid-left') || (square.id === 'mid-center') || (square.id === 'mid-right') ||
            (square.id === 'bottom-left') || (square.id === 'bottom-center') || (square.id === 'bottom-right'))
              if (oChecker === false) {
                square.innerText = 'X';
                oChecker = true;
              } else {
                square.innerText = 'O';
                oChecker = false;
              }
    });
}

const xoChecker = () => {
   const topLeft = document.querySelector('.top-left');
   const topCenter = document.querySelector('.top-center');
   const topRight = document.querySelector('.top-right');
   const midLeft = document.querySelector('.mid-left');
   const midCenter = document.querySelector('.mid-center');
   const midRight = document.querySelector('.mid-right');
}

export { xoSelector };