const data = {
  land: [
    {
      name: "Tyrannosaurus rex",
      era: "Late Cretaceous",
      img: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80",
      desc: "Apex predator with one of the strongest bite forces in history.",
    },
    {
      name: "Triceratops",
      era: "Late Cretaceous",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      desc: "Three-horned herbivore with a massive protective frill.",
    },
    {
      name: "Brachiosaurus",
      era: "Jurassic",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      desc: "Towering long-necked giant that fed from treetops.",
    },
  ],
  air: [
    {
      name: "Pteranodon",
      era: "Late Cretaceous",
      img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80",
      desc: "Large toothless flyer with a wingspan over 6 meters.",
    },
    {
      name: "Quetzalcoatlus",
      era: "Late Cretaceous",
      img: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=1200&q=80",
      desc: "One of the largest flying animals ever.",
    },
  ],
  sea: [
    {
      name: "Mosasaurus",
      era: "Late Cretaceous",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      desc: "Powerful marine predator dominating ancient seas.",
    },
    {
      name: "Elasmosaurus",
      era: "Late Cretaceous",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      desc: "Long-necked marine reptile adapted for open oceans.",
    },
  ],
};

function render(sectionId, items) {
  const container = document.getElementById(sectionId);
  container.innerHTML = items
    .map(
      (item) => `
        <article class="species-card">
          <img src="${item.img}" alt="${item.name}">
          <div class="species-content">
            <span class="badge">${item.era}</span>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

render("land-grid", data.land);
render("air-grid", data.air);
render("sea-grid", data.sea);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
