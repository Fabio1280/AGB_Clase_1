//estructura de control switch case

let fruta = prompt("Ingrese fruta");

switch (fruta.toLocaleLowerCase) {
    case'mango':
     alert("Cuesta 8 mil")
    
    break;

    case'banano':
     alert("Cuesta 10 mil")
        
    break;

    default:
        alert('La fruta no existe');
        break;
}