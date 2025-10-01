export class Botoes {
  private botaoCheckout: HTMLButtonElement;
  private botaoPlay: HTMLButtonElement;
  private video: HTMLIFrameElement;
  private capaDoVideo: HTMLImageElement;
  constructor() {
    this.botaoCheckout = document.querySelector(
      ".btn-teste-gratis"
    ) as HTMLButtonElement;
    this.botaoPlay = document.querySelector(".botao-play") as HTMLButtonElement;
    this.video = document.querySelector(".video") as HTMLIFrameElement;
    this.capaDoVideo = document.querySelector(
      ".capa-video"
    ) as HTMLImageElement;
  }

  public entrarCheckout() {
    this.botaoCheckout.addEventListener("click", (evento) => {
      evento.preventDefault();
      window.location.href = "https://app.monetizze.com.br/checkout/DZD358675";
    });
  }

  public playNoVideo() {
    this.botaoPlay.addEventListener("click", () => {
      this.capaDoVideo.style.display = "none";
      this.video.src = "https://www.youtube.com/embed/Hjz2YenwbUY?autoplay=1";
      this.video.style.display = "flex";
    });
  }
}
