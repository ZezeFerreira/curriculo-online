// ===== TEMA CLARO/ESCURO =====

// Quando a página carrega, verifica se o usuário já tinha escolhido um tema antes
document.addEventListener("DOMContentLoaded", function () {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
    }
});

// Alterna entre tema claro e escuro ao clicar no botão
function alternarTema() {
    document.body.classList.toggle("dark");

    // Salva a escolha do usuário no navegador
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
}


// ===== MENU HAMBURGUER (celular) =====

// Abre e fecha o menu no celular ao clicar no botão 
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("aberto");
}


// ===== VALIDAÇÃO DO FORMULÁRIO DE CONTATO =====

function enviarFormulario() {

    // Pega os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Pega os elementos de erro
    const erroNome = document.getElementById("erro-nome");
    const erroEmail = document.getElementById("erro-email");
    const erroMensagem = document.getElementById("erro-mensagem");

    // Limpa erros anteriores
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroMensagem.textContent = "";

    // Controla se o formulário passou em todas as validações
    let valido = true;

    // Valida o nome
    if (nome === "") {
        erroNome.textContent = "Por favor, informe seu nome.";
        valido = false;
    }

    // Valida o e-mail (verifica formato usuario@dominio.com)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        erroEmail.textContent = "Por favor, informe seu e-mail.";
        valido = false;
    } else if (!regexEmail.test(email)) {
        erroEmail.textContent = "Informe um e-mail válido. Ex: usuario@dominio.com";
        valido = false;
    }

    // Valida a mensagem
    if (mensagem === "") {
        erroMensagem.textContent = "Por favor, escreva uma mensagem.";
        valido = false;
    }

    // Se tudo estiver correto, simula o envio
    if (valido) {
        // Limpa os campos
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";

        // Exibe mensagem de sucesso
        const sucesso = document.getElementById("mensagem-sucesso");
        sucesso.style.display = "block";

        // Esconde a mensagem de sucesso após 4 segundos
        setTimeout(function () {
            sucesso.style.display = "none";
        }, 4000);
    }
}
