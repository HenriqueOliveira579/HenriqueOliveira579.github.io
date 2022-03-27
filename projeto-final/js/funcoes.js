// Get the modal
var modal = document.getElementById("contato");

// When the user clicks on the button, open the modal
function abrirModalContato() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function fecharModalContato() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}