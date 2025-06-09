 
//  O que precisamos fazer? -Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseados na categotia e no preço máximo selecionados.
//     Objetivo 1 - Criar a funcionalidade de filttrar as cartas
//         passo 1 - pegar o botão de aplicar filtros do HTML e mandar pro JS
//         passo 2 - escutar o clique do botão de aplicar filtros 
//         passo 3 - pegar os valores do campo de categorias e preço
//         passo 4 - pra cada carta, verificar se ela deve ser mostrada ou escondida com base nos filtros que a pessoa digitou


// const botaoFiltrar = document.querySelector('.btn-filtrar');

// botaoFiltrar.addEventListener('click', function(){

//     const categoriaSelecionada = document.querySelector('#categoria').value;
//     console.log(categoriaSelecionada)

//     const precoMaximoSelecionado = document.querySelector('#preco').value;
//     console.log(precoMaximoSelecionado);

//     const cartas = document.querySelectorAll('.carta');

//     cartas.forEach(function(carta){
//         const categoriaCarta = carta.dataset.categoria;
//         const precoCarta = carta.dataset.preco;

//         let mostrarCarta = true;

//         const temFiltroDeCategoria = categoriaSelecionada !== '';
//         const cartaNaoTemFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

//         const temFiltroDePreco =  precoMaximoSelecionado !== '';
//         const cartaNaoBateFiltroDePreco = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

//         if( temFiltroDePreco && cartaNaoBateFiltroDePreco ) {
//             mostrarCarta = false;
//         }

//         if( temFiltroDeCategoria && cartaNaoTemFiltroDeCategoria ) {
//             mostrarCarta = false;
//         }

//         if (mostrarCarta) {
//             carta.classList.add('mostrar');
//         } else {
//             carta.classList.remove('mostrar');
//             carta.classList.add('esconder');
//         }

//     });

// });


// código refatorado 

const botaoFiltrar = document.querySelector('.btn-filtrar');
botaoFiltrar.addEventListener('click', aplicarFiltros);

// Função que filtra as cartas com base nos filtros de categoria e preço

function aplicarFiltros() {
    const categoriaSelecionada = pegarCategoriaSelecionada();
    const precoMaximoSelecionado = pegarPrecoMaximoSelecionado();
    const cartas = pegarCartas();

    cartas.forEach(function (carta) {
        const categoriaValida = verificarCategoria(carta, categoriaSelecionada);
        const precoValido = verificarPreco(carta, precoMaximoSelecionado);

        const deveMostrarCarta = categoriaValida && precoValido;

        mostarOuEsconderCarta(carta, deveMostrarCarta);
    });
}

// Função para pegar o valor do campo de categoria
function pegarCategoriaSelecionada() {
    return document.querySelector('#categoria').value;
}

// Função para pegar o valor do campo de preço
function pegarPrecoMaximoSelecionado() {
    return document.querySelector('#preco').value;
}

// Função para pegar todas as cartas
function pegarCartas() {
    return document.querySelectorAll('.carta');
}

// Função para verificar se a carta corresponde ai filtro de categoria
function verificarCategoria(carta, categoriaSelecionada) {
    const categoriaCarta = carta.dataset.categoria;
    return categoriaSelecionada === '' || categoriaSelecionada.toLowerCase() === categoriaCarta.toLowerCase();
}

// Função para verificar se a carta corresponde ao filtro do preço
function verificarPreco(carta, precoMaximoSelecionado) {
    const precoCarta = carta.dataset.preco;
    return precoMaximoSelecionado ==='' || parseFloat(precoCarta) <= parseFloat(precoMaximoSelecionado);
}

// Função para mostrar e esconder as cartas
function mostarOuEsconderCarta(carta, deveMostrar) {
    if(deveMostrar) {
        carta.classList.add('mostar');
        carta.classList.remove('esconder');
    } else {
        carta.classList.remove('mostar');
        carta.classList.add('esconder');
    }
}