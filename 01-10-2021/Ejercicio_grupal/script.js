function Operacion() {
    let valorC = Number(document.getElementById("valorC").value);
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let total;
    
    valorC >= 150000 
    ? Number(total = valorC - (valorC*20/100))
    : total = valorC
    
    alert("El total a pagar para el señor "+ nombre +" " + apellido + " es "+total);
    
    
    return total;
    }