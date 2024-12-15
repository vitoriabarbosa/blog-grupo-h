
// Função para voltar ao início da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// Função para aparecer o botão de acordo com a altura da tela
(function () {
    let top = document.getElementById('to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 600) top.classList.add('button-top');
        else top.classList.remove('button-top')
    })
})();


// Atualização Ano de postagem
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear.toString();
});
