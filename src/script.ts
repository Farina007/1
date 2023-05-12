function criar(){
    let div : HTMLBodyElement | null = 
    document.querySelector('.seg')!;

    let paragrafo = document.createElement('p');
    let texto = document.createTextNode('Corno');

    paragrafo.appendChild(texto);
    div.appendChild(paragrafo);

}

function mudar(){
    
    let parg : HTMLElement | null =
    document.querySelector('p')!;

    parg.innerText = 'seu pai!!!';
}

function excluir(){

    let parg : HTMLElement | null =
    document.querySelector('p')!;

    parg.remove();
}