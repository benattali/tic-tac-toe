const main = () => {
  let oChecker = false;

  window.addEventListener('click', function(event) {
    const square = event.target;

    if (square.classList.contains('square')) {

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

main();