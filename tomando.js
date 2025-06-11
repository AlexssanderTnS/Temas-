//Função para aplicar o tema escuro

// troca.addEventListener("click") 

// const troca = document.getElementById('botao') 

// troca.addEventListener('onclick', );




function toggleTheme() { 
    document.body.classList.toggle('TemasEscuro');
}

document.getElementById('botao').addEventListener('click', toggleTheme);

if (document.body.classList.contains('TemasEscuro')) {
    document.body.classList.remove('TemasEscuro');
}
  
if (document.body.classList.contains('TemasEscuro')) {
    botaoTema.textContent = "Ativar tema claro";

}  else {
    botaoTema.textContent = "ativar tema claro";
    
}
 
if (condicionais.temaEscuro) {
        document.body.classList.toggle('TemasEscuro');



    } document.body.classList.remove('TemasEscuro');

 if (condicionais.temaEscuro) {
    document.body.classList.add('TemasEscuro');


}// Função para aplicar o tema claro //
function temaClaro(condicionais) {
    if (condicionais.temaClaro) {
        document.body.classList.add('theme-light');

    }
    } else {
    document.body.classList.remove('theme-light');
}
    if (condicionais.temaClaro) {
        document.body.classList.add('theme-light');


    } else {
        document.body.classList.remove('theme-light');

    }


