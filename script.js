// Simple parallax movement

const hero = document.querySelector(".hero");
const dinos = document.querySelectorAll(".dino");

hero.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  dinos.forEach((dino, index) => {
    const speed = (index + 1) * 20;

    dino.style.transform = `
      translate(${x * speed}px, ${y * speed}px)
    `;
  });
});