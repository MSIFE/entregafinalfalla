llenarTabla();

function llenarTabla(){
    let tbody = document.querySelector("#tblAlumno tbody");

    tbody.innerHTML = "";

    let aEdades = JSON.parse(localStorage.getItem('edades_'));
    let aTrabajos = JSON.parse(localStorage.getItem('trabajos_'));
    let aNombres = JSON.parse(localStorage.getItem('nombres_'));
    let aLesiones = JSON.parse(localStorage.getItem('lesiones_'));
    let aPeso = JSON.parse(localStorage.getItem('peso_'));

    let nCantidadAlumnos = 0; 

    if (aEdades != null){
      nCantidadAlumnos = aEdades.length;
    }



for(let i = 0;i < nCantidadAlumnos; i++){
    let fila = document.createElement('tr');

    let celdaEdad = document.createElement('td');
    let celdaTrabajo = document.createElement('td');
    let celdaNombre = document.createElement('td');
    let celdaLesion = document.createElement('td');
    let celdaPeso = document.createElement('td');

    let nodoTextoEdad = document.createTextNode(aEdades[i]);
    let nodoTextoTrabajo = document.createTextNode(aTrabajos[i]);
    let nodoTextoNombre = document.createTextNode(aNombres[i]);
    let nodoTextoLesion = document.createTextNode(aLesiones[i]);
    let nodoTextoPeso = document.createTextNode(aPeso[i]);
    console.log("asdasd")
        
    celdaEdad.appendChild(nodoTextoEdad);
    celdaTrabajo.appendChild(nodoTextoTrabajo);
    celdaNombre.appendChild(nodoTextoNombre);
    celdaLesion.appendChild(nodoTextoLesion);
    celdaPeso.appendChild(nodoTextoPeso);

    fila.appendChild(celdaEdad);
    fila.appendChild(celdaTrabajo);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaLesion);
    fila.appendChild(celdaPeso);
    

    tbody.appendChild(fila);
}

}

