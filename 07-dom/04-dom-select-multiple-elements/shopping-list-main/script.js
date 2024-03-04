// document.querySelectorAll()
// esta propriedade permite a selecção de um conjunto de elmentos com a mesma propriedaes

const listItems = document.querySelectorAll('.item');
console.log(listItems);

// manipulando elementos em uma lista
listItems[0].style.color = 'red';

// Para manipular todos os elementos em conjuntos é necessario usar uma função de iteração para acessar cada elemento
listItems.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 0) {
        item.style.color = 'black';
        item.innerText = 'o texto mudou';
    }

    if (index === 1) {
        item.remove();
    }
});


// document.getElementsByClassName()
// Esta prop permite pegar uma coleção que pode ser transformada em uma lista usando o metodo Array.from
const listItems2 = document.getElementsByClassName('item');
// transformando em uma lista
const listItemArray = Array.from(listItems2);
listItemArray.forEach((item, index) =>{
    if (index === 2) {
        console.log(item.innerText);
    }
})