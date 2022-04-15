let aEdades = [];
let aTrabajos = [];
let aNombres = [];
let aLesiones = [];
let aPeso = [];

if(localStorage.getItem("edades_") != null){
    aEdades = JSON.parse(localStorage.getItem('edades_'))
    aTrabajos = JSON.parse(localStorage.getItem('trabajos_'));
    aNombres = JSON.parse(localStorage.getItem('nombres_'));
    aLesiones = JSON.parse(localStorage.getItem('lesiones_'));
    aPeso = JSON.parse(localStorage.getItem('peso_'));
}

let elementoBotonRegistrar = document.querySelector('#btnRegistrar')

elementoBotonRegistrar.addEventListener("click", registroAlumno);

function registroAlumno(){
    let nEdad = document.querySelector("#txtEdad").value;
    let sTrabajo = document.querySelector("#txtTrabajo").value;
    let sNombre = document.querySelector("#txtNombre").value;
    let sLesion = document.querySelector("#txtLesiones").value;
    let sPeso= document.querySelector("#txtPeso").value;

    aEdades.push(nEdad);
    aTrabajos.push(sTrabajo);
    aNombres.push(sNombre);
    aLesiones.push(sLesion);
    aPeso.push(sPeso);

    localStorage.setItem('edades_', JSON.stringify(aEdades));
    localStorage.setItem('trabajos_', JSON.stringify(aTrabajos));
    localStorage.setItem('nombres_', JSON.stringify(aNombres));
    localStorage.setItem('lesiones_', JSON.stringify(aLesiones));
    localStorage.setItem('peso_', JSON.stringify(aPeso));
    
    llenarTabla();
}

