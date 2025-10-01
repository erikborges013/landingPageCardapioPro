import { Botoes } from "./ui/components/botoes.js";
import { createSnowfall } from "./effects/snow.js";
const botoes = new Botoes();

document.addEventListener("DOMContentLoaded", () => {
  botoes.entrarCheckout();
  botoes.playNoVideo();
  createSnowfall();
});

console.log("teste");
