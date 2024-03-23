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

// FUNCÇÃO QUE EXECUTA O CALLBACK
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post thre', body: 'Novos produtos tecnologico'}, getPosts)