// Index do item do meio atual
let currentIndex = window.innerWidth <= 750? 0 : 1;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {
  // Se for o da esquerda diminui o valor, se não, aumenta
  if (window.innerWidth >= 751) {
    currentIndex += e.id === 'anterior'? -1 : 1;
  } else {
    currentIndex += e.id === 'anterior'? -1 : 1;
  }

  const listaDeCards = document.querySelectorAll('.depoimento');
  
  // Garantindo que o index não saia do range válido
  // OBS: Com telas maiores, sempre haverão ter três cards na tela, ou seja, o 1o e o último nunca estrão no meio
  if (window.innerWidth <= 750) {
    if (currentIndex < 0) {
      currentIndex = listaDeCards.length - 1;
    } else if (currentIndex > listaDeCards.length - 1) {
      currentIndex = 0;
    }
  } else {
    if (currentIndex < 1) {
      currentIndex = listaDeCards.length - 2;
    } else if (currentIndex > listaDeCards.length - 2) {
      currentIndex = 1;
    }
  }

// Movendo os cards para que o card do index esteja no meio
  listaDeCards[currentIndex].scrollIntoView({
    inline: 'center',
    block: 'nearest',
    behavior: 'smooth',
  });
}));
  

// Obtenha o modal
const modal = document.getElementById("modal")

// Obtenha todos os botões que devem abrir o modal
const buttons = document.querySelectorAll(".open-modal");

// Obtenha o elemento de fechamento do modal
const close = document.getElementById("close-modal")

// Função para abrir o modal
function openModal() {
  modal.style.display = "flex";
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = "none";
  body.style.backgroundColor = ""
}

// Adicione um evento de clique para cada botão para abrir o modal
buttons.forEach(function(button) {
  button.addEventListener("click", openModal);
});

// Adicione um evento de clique ao elemento de fechamento do modal para fechá-lo
close.addEventListener("click", closeModal);

// Animações
// Coletando o observador da página
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting === true){
            entry.target.classList.add('show')
        } 
    })
})

// Selecionando os elementos com a classe ".hidden"
const elements = document.querySelectorAll('.hidden')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements.forEach( (element) => myObserver.observe(element))