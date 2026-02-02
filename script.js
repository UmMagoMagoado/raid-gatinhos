const params = new URLSearchParams(window.location.search);
const count = Math.min(parseInt(params.get("count")) || 1, 150);

const container = document.getElementById("container");

// configurações
const SPAWN_DELAY = 120; // ms entre cada gatinho
const BASE_DURATION = 4000;

for (let i = 0; i < count; i++) {
  setTimeout(() => {
    spawnCat(i);
  }, i * SPAWN_DELAY);
}

function spawnCat(index) {
  const cat = document.createElement("div");
  cat.classList.add("cat");

  // posição vertical caótica (meio da tela)
  const centerY = window.innerHeight / 2;
  const offsetY = (Math.random() - 0.5) * 180;

  cat.style.top = `${centerY + offsetY}px`;

  // duração levemente aleatória
  const duration = BASE_DURATION + Math.random() * 2000;
  cat.style.animationDuration = `${duration}ms`;

  // atraso pra criar efeito de fila
  cat.style.animationDelay = `${index * 0.05}s`;

  container.appendChild(cat);

  // remove depois de terminar
  setTimeout(() => {
    cat.remove();
  }, duration + 1000);
}
