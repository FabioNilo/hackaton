document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

 
    if (email && senha) {
        window.location.href = 'conteudo.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});