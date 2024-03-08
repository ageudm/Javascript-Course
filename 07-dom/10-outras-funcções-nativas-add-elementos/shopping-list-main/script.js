// aplicação de metodos nativo para a criar e adcionar elementos no documento

// metodos nativos para add os lementos (estes metodos tem a mesma função do metodo appendChild)
// insetAdjacentElement;
// insetAdjacentText;
// insetAdjacentHTML;
// insetBefore;


// metodos nativo para definir o posicionamento do alemento adcionado
// beforebegin;
// afterbegin;
// beforeend;
// afterend;



// insetAdjacentElement;
function insertElement() {
  // criar o lemento a ser adcionado
  const h1 = document.createElement('h1');
    h1.textContent = 'insetAdjacentElement';
  
  // selecionar o elemento onde sera adcionado o novo elemento
  const filter = document.querySelector('.filter');
  // add elemento na posição antes da filter ou depois da filter
  filter.insertAdjacentElement("beforebegin", h1);

}; insertElement()



// insetAdjacentText;
function insertText() {
  // seleccionar o elemneto
  const item = document.querySelector('li:first-child');
  // add texto antes ou depois do elemnto selecoinado
  item.insertAdjacentText("afterend", 'insetAdjacentText')

}; insertText()



// insetAdjacentHTML;
function insertHTML() {
   // seleccionar o elemneto
  const clearBtn = document.querySelector('#clear');
  // add HTML depois ou antes do elemento selecionado
  clearBtn.insertAdjacentHTML("afterend", ' <h2 id="app-title" class="title">Shopping List</h2>')

}; insertHTML()



// insetBefore;
function insertBeforeItem() {
  // criar o elemento a ser inserido
  const li = document.createElement('li');
  li.textContent = 'insetBefore';

  // selectionar o elemento onde vamos positionar a nova li
  const thirdItem = document.querySelector('li:nth-child(3)');

  // inser o elemnto no documento
  const items = document.querySelector('.items');
  items.insertBefore(li, thirdItem)

  console.log(li);


}; insertBeforeItem()
