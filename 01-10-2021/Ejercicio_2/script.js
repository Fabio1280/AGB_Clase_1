document.getElementById('InputNombre').value

//funcione simple

function capturaDatos() {
  let nombre = document.getElementById('inputNombre').value;
  let apellido = document.getElementById('inputApellido').value;
   alert(`Nombre ${nombre} Apellido ${apellido}`)
}

//scope=alcance de la función//