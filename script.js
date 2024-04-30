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


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 52.1380659, lng: -106.6572985 },
    zoom: 12,
    mapTypeControl: false,
    disableDefaultUI: true,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  });
}


const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



