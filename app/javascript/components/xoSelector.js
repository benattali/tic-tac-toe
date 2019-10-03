const xoSelector = () => {
    const mainBoard = document.querySelector('.main-board');

    mainBoard.addEventListener('click', function(event) {
        console.log(event);
    });
}

export { xoSelector };