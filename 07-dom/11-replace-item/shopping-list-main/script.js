// Aplicação de metodo de substituiçãode elementos no documento

function replaceItem() {
  const itemReplace = document.querySelector('li:nth-child(2)');
  console.log(itemReplace);

  // criar o novo elemento
  const li = document.createElement('li');
  li.textContent = 'Novo Item';

  itemReplace.replaceWith(li);


}; replaceItem()


// outro metodo de substituição
function replaceItem2() {
  const itemReplace2 = document.querySelector('li:nth-child(3)');
  itemReplace2.outerHTML = '<li>item 2</li>';

  console.log(itemReplace2);


}; replaceItem2()


// aplicação do metodo foreath para alterar todos elemntos de uma so vez
function replaceAllItem() {
  const allItems = document.querySelectorAll('li');

  allItems.forEach((item, index) => {
    // item.outerHTML = '<li>Trcar tudo</li>'

    if (index === 2) {
      item.outerHTML = '<li>Item tres</li>'
    } else {
      item.outerHTML = '<li>Trcar tudo</li>'
    }
  })


}; replaceAllItem();