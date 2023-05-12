function criar() {
    var div = document.querySelector('.seg');
    var paragrafo = document.createElement('p');
    var texto = document.createTextNode('Corno');
    paragrafo.appendChild(texto);
    div.appendChild(paragrafo);
}
function mudar() {
    var parg = document.querySelector('p');
    parg.innerText = 'seu pai!!!';
}
function excluir() {
    var parg = document.querySelector('p');
    parg.remove();
}
