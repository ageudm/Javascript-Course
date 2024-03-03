// Array Basic Method 

let x;
const arr = [1, 2, 3, 4, 5];

arr.push(6); //Aumeta elemento na ultima posição
arr.pop(); //Remove o ultomo elemento da lista
arr.unshift(20);//Add elemnto no principio da lista
arr.shift();//remove o primeiro elemnto da lista
// arr.reverse(); //Inverte a orem da lista
x = arr.includes(4); //Verifica se o elmento especificado se encotra na lista
x = arr.indexOf(2); //Retorna o elemento de acordo com a posiçao especifica
// x = arr.slice(2, 5);// Apresenta od dados apartir de um ponto definido de acordo a index do ponto de inicial
x = arr.splice(2); //Remove ou substitui elementos e retona o restante



console.log(x, arr)