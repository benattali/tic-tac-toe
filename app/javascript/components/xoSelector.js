const xoSelector = () => {
    const board = document.querySelectorAll('.square');
    window.addEventListener('click', function(event) {
        const square = event.target;
        square.innerText = 'X';
    });
}

export { xoSelector };