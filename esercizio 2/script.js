const contatore = document.getElementById("contatore");

let i = parseInt(sessionStorage.getItem("contatore")) || 0;
contatore.innerText = i;

setInterval(() => {
  i++;
  contatore.innerText = i + "s";
  sessionStorage.setItem("contatore", i + "s");
}, 1000);
