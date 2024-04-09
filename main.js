document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatar')
    const name = document.querySelector('#name')
    const username = document.querySelector('#username')
    const repositorios = document.querySelector('#repositorios')
    const seguidores = document.querySelector('#seguidores')
    const seguindo = document.querySelector('#seguindo')
    const link = document.querySelector('#link')

    fetch('https://api.github.com/users/agbjunior')
    .then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        avatar.src = json.avatar_url
        name.innerText = json.name
        username.innerText = json.login
        repositorios.innerText = json.public_repos
        seguidores.innerText = json.followers
        seguindo.innerText = json.following
        link.href = json.html_url

    })
})