function changebgcolor() {
    let bg = document.getElementsByClassName('bg')[0];
    let color = Math.floor(Math.random()*16777215).toString(16);

    let str = '#';

    let span = document.getElementById('color');

    span.innerHTML = color;

    let randcolor = str + color;
    bg.style.backgroundColor = randcolor;
}
