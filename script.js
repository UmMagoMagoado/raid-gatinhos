const params = new URLSearchParams(window.location.search);
const count = Math.min(parseInt(params.get("count")) || 1, 100); 
// limite de segurança

const container = document.getElementById("cats-container");

const SCREEN_HEIGHT = window.innerHeight;
const CENTER_Y = SCREEN_HEIGHT / 2;

// Configurações da "fila"
const BASE_Y_SPREAD = 80;     // quão espalhados verticalmente
const GAP = 70;              // distância entre gatinhos
const SPEED = 500;           // pixels por segundo

let spawned = 0;

function spawnCat(index) {
  const cat = document.createElement("div");
  cat.classList.add("cat");

  // posição vertical: centro + bagunça
  const offsetY = (Math.random() - 0.5) * BASE_Y_SPREAD;
  cat.style.top = `${CENTER_Y + offsetY}px`;

  container.appendChild(cat);

  // cálculo da duração baseado na tela
  const distance = window.innerWidth + 200;
  const duration = distance / SPEED;

  cat.style.animationDuration = `${duration}s`;

  // remover quando terminar
  setTimeout(() => {
    cat.remove();
  }, duration * 1000 + 500);
}

function startQueue() {
  const interval = setInterval(() => {
    if (spawned >= count) {
      clearInterval(interval);
      return;
    }

    spawnCat(spawned);
    spawned++;
  }, GAP);
}

startQueue();
