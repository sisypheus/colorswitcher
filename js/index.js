document.body.onload = changebgcolor;

function changebgcolor() {
    let bg = document.getElementsByClassName('bg')[0];
    let color = Math.floor(Math.random()*16777215).toString(16);

    let str = '#';

    let randcolor = str + color;
    console.log(randcolor);
    bg.style.backgroundColor = randcolor;
}
