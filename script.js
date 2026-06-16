const intro = document.querySelector("#intro");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const nameButton = document.querySelector(".liquid-name");
const projectsButton = document.querySelector(".projects-button");
const projectCards = document.querySelectorAll(".project-card");
const detailTitle = document.querySelector("#detail-title");
const detailType = document.querySelector("#detail-type");
const detailText = document.querySelector("#detail-text");
const detailGallery = document.querySelector(".detail-gallery");
const detailSection = document.querySelector("#project-detail");

window.history.scrollRestoration = "manual";
window.scrollTo({ top: 0, left: 0, behavior: "auto" });

const projectContent = {
  tase: {
    type: "TCC ETEC",
    title: "TASE",
    text:
      "Projeto desenvolvido como TCC na ETEC, pensado para resolver uma necessidade real com organização, pesquisa e construção técnica. A galeria destaca telas do sistema, fluxos e detalhes da interface.",
    images: [
      {
        src: "./img/tase%201.png",
        alt: "Tela principal do sistema TASE",
        caption: "Tela principal",
        layout: "wide",
      },
      {
        src: "./img/tase%202.png",
        alt: "Fluxo do sistema TASE",
        caption: "Fluxo do sistema",
        layout: "wide",
      },
      {
        src: "./img/tase%203.png",
        alt: "Detalhes do projeto TASE",
        caption: "Detalhes do projeto",
        layout: "wide",
      },
    ],
  },
  eventosfatec: {
    type: "Projeto Feira - FATEC",
    title: "Eventos FATEC",
    text:
      "Projeto acadêmico criado para a feira da Fatec, com foco em experiência, navegação clara e apresentação de eventos. A galeria destaca interface, identidade visual e funcionalidades centrais.",
    images: [
      {
        src: "./img/fe1.jpeg",
        alt: "Tela inicial do projeto EventosFATEC",
        caption: "Tela inicial",
        layout: "phone",
      },
      {
        src: "./img/fe2.jpeg",
        alt: "Tela de eventos do projeto EventosFATEC",
        caption: "Eventos",
        layout: "phone",
      },
      {
        src: "./img/fe3.jpeg",
        alt: "Tela de histórico do projeto EventosFATEC",
        caption: "Histórico",
        layout: "phone",
      },
      {
        src: "./img/fe4.jpeg",
        alt: "Tela de navegação administrativa do projeto EventosFATEC",
        caption: "Navegação - ADM",
        layout: "phone",
      },
      {
        src: "./img/fe5.jpeg",
        alt: "Tela de dashboard administrativo do projeto EventosFATEC",
        caption: "Dashboard - ADM",
        layout: "phone",
      },
      {
        src: "./img/fe6.jpeg",
        alt: "Tela complementar do projeto EventosFATEC",
        caption: "Participantes Evento",
        layout: "phone",
      },
      {
        src: "./img/fe7.jpeg",
        alt: "Tela de gestão do projeto EventosFATEC",
        caption: "Gestão",
        layout: "phone",
      },
    ],
  },
  "burguer-house": {
    type: "Desenvolvimento Mobile",
    title: "Burguer House",
    text:
      "Trabalho de aula em desenvolvimento mobile voltado para uma hamburgueria, explorando telas de produto, pedido e navegação. A galeria mostra o visual do app e as principais etapas do fluxo.",
    images: [
      {
        src: "./img/bh1.jpeg",
        alt: "Tela de cardápio do aplicativo Burguer House",
        caption: "Tela Inicial",
        layout: "phone",
      },
      {
        src: "./img/bh2.jpeg",
        alt: "Tela de produto do aplicativo Burguer House",
        caption: "Produto",
        layout: "phone",
      },
      {
        src: "./img/bh3.jpeg",
        alt: "Tela de pedido do aplicativo Burguer House",
        caption: "Carrinho",
        layout: "phone",
      },
      {
        src: "./img/bh4.jpeg",
        alt: "Tela de compra do aplicativo Burguer House",
        caption: "Compra",
        layout: "phone",
      },
      {
        src: "./img/bh5.jpeg",
        alt: "Tela final do aplicativo Burguer House",
        caption: "Cupons",
        layout: "phone",
      },
    ],
  },
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.25 }
);

revealObserver.observe(about);
revealObserver.observe(projects);

nameButton.addEventListener("click", () => {
  nameButton.classList.add("is-dissolving");
  document.querySelector(".intro-hint").style.opacity = "0";

  window.setTimeout(() => {
    document.body.classList.remove("scroll-locked");
    about.scrollIntoView({ behavior: "smooth", block: "start" });
    about.classList.add("is-visible");
  }, 520);
});

projectsButton.addEventListener("click", () => {
  projects.scrollIntoView({ behavior: "smooth", block: "start" });
  projects.classList.add("is-visible");
});

projectCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    const project = projectContent[card.dataset.project];
    if (!project) return;

    detailType.textContent = project.type;
    detailTitle.textContent = project.title;
    detailText.textContent = project.text;
    detailSection.classList.add("has-selection");
    detailGallery.replaceChildren(
      ...project.images.map((image) => {
        const frame = document.createElement("figure");
        const screenshot = document.createElement("img");
        const caption = document.createElement("figcaption");

        frame.className = `gallery-frame gallery-frame--${image.layout}`;
        screenshot.src = image.src;
        screenshot.alt = image.alt;
        screenshot.loading = "lazy";
        caption.textContent = image.caption;

        frame.append(screenshot, caption);
        return frame;
      })
    );

    detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
