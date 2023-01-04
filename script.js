let elements = {
  copyRightsYear: "",
};

function mappingElements() {
  const body = document.querySelector("body");
  elements.copyRightsYear = body.querySelector("footer .copyrights-year");
  // console.log(elements.copyRightsYear.innerText);
}

function updateCopyrights() {
  const date = new Date();
  elements.copyRightsYear.innerText = date.getFullYear().toString();
}

window.onload = async () => {
  mappingElements();
  updateCopyrights();
};
