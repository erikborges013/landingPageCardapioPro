// Adicionamos um listener para garantir que o DOM está carregado
document.addEventListener("DOMContentLoaded", () => {
  //Inicia assim que carrega o dom
  // Função para criar a neve
  function createSnowfall(): void {
    const numeroDeFlocosDeNeve: number = 150;
    const container: HTMLElement | null = document.body;

    if (!container) {
      console.error("Container para a neve não foi encontrado.");
      return;
    }

    for (let i = 0; i < numeroDeFlocosDeNeve; i++) {
      const flocoDeNeve: HTMLDivElement = document.createElement("div");
      flocoDeNeve.classList.add("flocoDeNeve");

      flocoDeNeve.style.left = Math.random() * 100 + "vw";
      const size: number = Math.random() * 5 + 2;
      flocoDeNeve.style.width = `${size}px`;
      flocoDeNeve.style.height = `${size}px`;

      const duracao: number = Math.random() * 10 + 5;
      flocoDeNeve.style.animationDuration = `${duracao}s`;

      const delay: number = Math.random() * -15;
      flocoDeNeve.style.animationDelay = `${delay}s`;

      container.appendChild(flocoDeNeve);
    }
  }

  createSnowfall(); //Por ultimo chamamos a função
});

const botaoCheckout = document.querySelector(
  ".btn-teste-gratis"
) as HTMLButtonElement;

botaoCheckout.addEventListener("click", (evento) => {
  evento.preventDefault();
  window.location.href = "https://pay.kiwify.com.br/9ljIg14";
});

console.log("teste");
