// Adicionamos um listener para garantir que o DOM está carregado
document.addEventListener("DOMContentLoaded", () => {
  // Função para criar a neve
  function createSnowfall(): void {
    const numberOfSnowflakes: number = 150;
    const container: HTMLElement | null = document.body;

    if (!container) {
      console.error("Container para a neve não foi encontrado.");
      return;
    }

    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake: HTMLDivElement = document.createElement("div");
      snowflake.classList.add("snowflake");

      snowflake.style.left = Math.random() * 100 + "vw";

      const size: number = Math.random() * 5 + 2;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;

      const duration: number = Math.random() * 10 + 5;
      snowflake.style.animationDuration = `${duration}s`;

      // ----- AQUI ESTÁ A MUDANÇA -----
      // Geramos um delay negativo para que a animação já comece em andamento.
      const delay: number = Math.random() * -15; // Usamos -15s (duração máxima)
      snowflake.style.animationDelay = `${delay}s`;
      // --------------------------------

      container.appendChild(snowflake);
    }
  }

  // Inicia a função
  createSnowfall();
});
