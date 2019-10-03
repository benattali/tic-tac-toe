const xoSelector = () => {
    window.addEventListener('click', function(event) {
        const square = event.target;
        square.innerText = 'X';
    });
}

export { xoSelector };