import { xoChecker } from 'components/xoChecker'

const xoSelector = () => {
  let oChecker = false;

  window.addEventListener('click', function(event) {
    const square = event.target;

    if ((square.id === 'top-left') || (square.id === 'top-center') || (square.id === 'top-right') || 
       (square.id === 'mid-left') || (square.id === 'mid-center') || (square.id === 'mid-right') ||
       (square.id === 'bottom-left') || (square.id === 'bottom-center') || (square.id === 'bottom-right')) {

        if (oChecker === false) {
          square.innerText = 'X';
          oChecker = true;
          xoChecker();
        } else {
          square.innerText = 'O';
          oChecker = false;
          xoChecker();
        }
    }
  });
}

export { xoSelector };