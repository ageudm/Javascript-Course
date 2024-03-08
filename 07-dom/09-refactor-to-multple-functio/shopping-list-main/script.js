// refatoração do metodo addElementList2
function addElementList2(item) {
      // criar o elemento
    const li = document.createElement('li');
    // add texto no elemento
    li.appendChild(document.createTextNode(item));

    // funcção criar o botão
    const button = createButton('remove-item btn-link text-red');
    // add o botão na li
    li.appendChild(button);

    // add tudo na lista do documento
    document.querySelector('.items').appendChild(li);


}; addElementList2('Refatorção do codigo')


// funação criar botão
function createButton(classes) {
  const button = document.createElement('button');
    button.className = classes;
    // add icon
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);


    return button;
}

// funcção criar icon
function createIcon(classes) {
  const icon = document.createElement('i');
    icon.className = classes;

    return icon;
}



