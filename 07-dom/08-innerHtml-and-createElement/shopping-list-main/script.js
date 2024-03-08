// Formas diferente para criar e add elementos no documento

// Criar um novo item e add na lista de items no documento
function addElementList(item) {
    // criar o elemento
    const li = document.createElement('li');

    // forma simplificada com template string
    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;

    // Add a li no documento
    document.querySelector('.items').appendChild(li);


}; addElementList('Novo lemento')


// Segunda forma para criar e add elementos no documento sem a templete string
function addElementList2(item) {
      // criar o elemento
    const li = document.createElement('li');
    // add texto no elemento
    li.appendChild(document.createTextNode(item));

    // criar o botão
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    // criar o icone remove
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    // juntar os elemenyos criado
    button.appendChild(icon);
    li.appendChild(button);

    // add tudo na lista do documento
    document.querySelector('.items').appendChild(li);


}; addElementList2('Segundo item criado')

