const posts = [
    {title: 'Post One', body: 'Novos produtos eletronico'},
    {title: 'Post Two', body: 'Novos produtos Moble'},
]


// APRESENTAR POSTS NO CLIENTE USANDO O METODO SETTIMEOUT PARA EXIBIR O POST A CADA INTERVALO
function getPosts(){
    setTimeout(() => {

        let output = '';
        posts.forEach((post, index) => {
            output += `<li>
            ${post.title}
            <p>${post.body}</p>
            </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

getPosts();

// USANDO PROMISE PARA RETORNAR UM VALOR CASO NÃO EXISTA ALGUM ERRO NO CODIGO
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Erro: Algum evento nao funciona');
            }
        }, 2000);
    });
};

// createPost({title: 'Post thre', body: 'Novos produtos tecnologico'})
//    .then(getPosts)
//     .catch(err => console.log(err));


// USAR O ASYNC AWAIT PARA EXECURAR A FUNÇÃO DE CALLBAC E ADICIONAR POST
// Async / await
async function init() {
  await  createPost({title: 'Post thre', body: 'Novos produtos tecnologico'});
  getPosts();

} init();

// Async / await / fetch
async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data); //Imprimir a lista de de Obj
    console.log(data[0].name); //Acessar um objecto e sua propiedade
} fetchUser();


// // Promise.all METODO QUE PERMITE O AGRUPAMENTO DE VARIAS PROMISSE, REORNADNDO UM ARRAY
// const promise1 = Promise.resolve('Ola magi');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'GodBye')
// );

// // CONSUMIR API COM JSON
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json));

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))