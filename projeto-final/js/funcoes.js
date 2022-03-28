var modal = document.getElementById("contato");

function abrirModalContato() {
  modal.style.display = "block";
}
function fecharModalContato() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}