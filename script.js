let elements = {
  menu: "",
  menuIcon: "",
  logoIcon: "",
  copyRightsYear: "",
};

//Mapeia os elementos do DOM para o objeto `elements`.
function mappingElements() {
  const body = document.querySelector("body");
  elements.menuIcon = body.querySelector(".menu .side-menu");
  elements.menu = body.querySelector(".menu .links");
  elements.logoIcon = body.querySelector("nav a img");
  elements.copyRightsYear = body.querySelector("footer .copyrights-year");
  console.log(elements.menuIcon);
}

function removeSideMenuAfterClick() {
  [elements.logoIcon, elements.menu].forEach((element) => {
    element.addEventListener("click", () => {
      elements.menu.classList.remove("sideMenuActive");
    });
  });
}

//Adiciona interatividade no menu lateral
function btnSideMenu() {
  elements.menuIcon.addEventListener("click", () => {
    elements.menu.classList.toggle("sideMenuActive");
    console.log(elements.menu);
  });
}

// Atualiza o ano dos direitos autorais no rodapé.
function updateCopyrights() {
  const date = new Date();
  elements.copyRightsYear.innerText = date.getFullYear().toString();
}

// Evento disparado quando a janela termina de carregar, e invoca alguns funções
window.onload = () => {
  mappingElements();
  btnSideMenu();
  removeSideMenuAfterClick();
  updateCopyrights();
};
