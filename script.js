const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");

btn1.addEventListener("click", () => {
  window.location.href = "presentation.html";
  console.log("Redirection vers presentation.html");
});

btn2.addEventListener("click", () => {
  window.location.href = "bts.html";
  console.log("Redirection vers presentation.html");
});

btn3.addEventListener("click", () => {
  window.location.href = "e4.html";
  console.log("Redirection vers presentation.html");
});

btn4.addEventListener("click", () => {
  window.location.href = "e5.html";
  console.log("Redirection vers presentation.html");
});

btn5.addEventListener("click", () => {
  window.location.href = "veille.html";
  console.log("Redirection vers presentation.html");
});

btn6.addEventListener("click", () => {
  window.location.href = "projet.html";
  console.log("Redirection vers presentation.html");
});

function telechargerCV() {
  const lien = document.createElement("a");
  lien.href = "CV_Miled_Yassine.pdf"; // Remplacez par le chemin de votre fichier CV
  lien.download = "CV_Miled_Yassine.pdf"; // Nom du fichier lors du téléchargement
  lien.click();
}
function telechargerRapportsSio1() {
  const lien = document.createElement("a");
  lien.href = "Rapport_de_stage_MiledYassine.pdf"; // Remplacez par le chemin de votre fichier CV
  lien.download = "Rapport_de_stage_MiledYassine.pdf"; // Nom du fichier lors du téléchargement
  lien.click();
}
function telechargerRapportsSio2() {
  const lien = document.createElement("a");
  lien.href = "CV_Miled_Yassine.pdf"; // Remplacez par le chemin de votre fichier CV
  lien.download = "CV_Miled_Yassine.pdf"; // Nom du fichier lors du téléchargement
  lien.click();
}

function telechargerTableau() {
  const lien = document.createElement("a");
  lien.href = "TableauSyntheseE4.xlsx"; // Remplacez par le chemin de votre fichier CV
  lien.download = "TableauSyntheseE4.xlsx "; // Nom du fichier lors du téléchargement
  lien.click();
}

function telechargerContexte() {
  const lien = document.createElement("a");
  lien.href = "01specificationsGSBRapportDeVisites_V2.pdf"; // Remplacez par le chemin de votre fichier CV
  lien.download = "01specificationsGSBRapportDeVisites_V2.pdf "; // Nom du fichier lors du téléchargement
  lien.click();
}

// const mousemove = document.querySelector(".mousemove");

// window.addEventListener("mousemove", (e) => {
//   mousemove.style.left = e.pageX + "px";
//   mousemove.style.top = e.pageY + "px";
// });

// window.addEventListener("mousedown", () => {
//   mousemove.style.transform = "scale(2) translate(-25%, -25%)";
// });

// window.addEventListener("mouseup", () => {
//   mousemove.style.transform = "scale(1) translate(-50%, -50%)";
//   mousemove.style.border = "2px solid teal";
// });
