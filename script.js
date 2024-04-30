let imagens = ['img/Bicicleta1.jpg', 'img/Bicicleta2.jpg', 'img/Bicicleta3.jpg', 'img/Bicicleta4.jpg'];
let index = 0;
let time = 3000;

function slideShow() {
    document.getElementById('imgSlide').src=imagens[index];
    index++;

    if(index == imagens.length) {
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();
function mudarCor(){
    function mudar(numero){
        return(Math.random()* numero);
    }
    const cores = `rgb(${mudar(255)},${mudar(255)},${mudar(255)})`;
    document.body.style.backgroundColor=cores;
}
window.addEventListener('load', function(){
    this.setInterval(function(){
        mudarCor();
    },2000)
})
function msgAlerta() {
    alert("Seja bem-vindo!");
}
setTimeout('msgAlerta', 1000)
