const boxHover = () => {
  const board = document.querySelector('.main-board');
  const children = board.children;

  for (var i = 0; i < children.length; i++) {
    $(children[i]).hover(function () {
        //stuff to do on mouse enter
        this.style.backgroundColor = 'rgb(75,75,75)';
        this.style.cursor = 'pointer';
    }, 
    function () {
        //stuff to do on mouse leave
        this.style.backgroundColor = 'rgb(50,54,57)';
    });
  }
}

boxHover();
