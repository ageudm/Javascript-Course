// Mtotodos para remover elementos no documento

// forma simples de remover elementos
function removeBtn() {
  const clearBtn = document.querySelector('#clear').remove();

}; removeBtn()


// remover o filho de um elemento no documento
function removeChildElement() {
  // pai do elementos a ser removido
  const ul = document.querySelector('ul');
  // filho que sera removido
  const li = document.querySelector('li:nth-child(2)');

  // remover o filho
  ul.removeChild(li);

}; // removeChildElement()


// remover o elemento com uma função dinamica
function removeElement(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`)

  ul.removeChild(li)

}; // removeElement(3)


// slecinar uma lista e manipular a index
function removeElementList(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li)

}; //removeElementList(1)


// slecinar uma lista e manipular a index
function removeElementList2(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();


}; //removeElementList2(2)


const removeElementList3 = (itemNumber) => 
  document.querySelectorAll('li')[itemNumber - 1].remove();

  removeElementList3(1)