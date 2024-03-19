// ADCIONAR E REMOVER ESTILOS COM CLASS
// Objectivo deste tema é mostrar como adcoinar ou remover um estilo usando as class estillisados no css

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run() {
    // Trabalhar com className
    console.log(itemList.className);
     //Altera direitamente todas as classe de um elemento
    // text.className = 'card dark';

    // Trabalhar com clasList
    console.log(itemList.classList);
    // Percorrer as classe em um elemnto
    itemList.classList.forEach(c => console.log(c))

    // Metodos da prop classList
    // text.classList.add('dark');
    // text.classList.remove('card')
    // text.classList.toggle('hidden') //Add ou Remove classe
    // text.classList.replace('card', 'dark')

    // aplicando estilos css
    items.forEach((item, index) => {
        item.style.color = 'red'

        if (index === 2) {
            item.style.color = 'blue'
        }
    });

}

// aplicar uma funcção de calback no botão
document.querySelector('button').onclick = run;