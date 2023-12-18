
let keyColor; 


function changeColorToBlack(event) {
    event.target.style.backgroundColor = 'black';
}


function changeKeyColor() {
    document.getElementById('key').style.backgroundColor = keyColor;
}


function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.className = 'color-box';
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}


document.getElementById('azul').addEventListener('click', changeColorToBlack);
document.getElementById('rojo').addEventListener('click', changeColorToBlack);
document.getElementById('verde').addEventListener('click', changeColorToBlack);
document.getElementById('amarillo').addEventListener('click', changeColorToBlack);


document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            keyColor = 'pink';
            break;
        case 's':
            keyColor = 'orange';
            break;
        case 'd':
            keyColor = 'skyblue';
            break;
        case 'q':
            createNewDiv('purple');
            break;
        case 'w':
            createNewDiv('gray');
            break;
        case 'e':
            createNewDiv('brown');
            break;
    }

    changeKeyColor();
});
