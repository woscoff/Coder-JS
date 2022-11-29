const instituto = document.getElementById("instituto");
const localidad = document.getElementById("localidad");
const colegio = [];

function infoColegio(){
    instituto.addEventListener("focusout", function() {
        colegio.push(instituto.value);
        localStorage.setItem("colegio", JSON.stringify(colegio));
        })
    localidad.addEventListener("focusout", function() {
        colegio.push(localidad.value);
        console.log(colegio);
        console.log(JSON.stringify(colegio));
        localStorage.setItem("colegio", JSON.stringify(colegio));
        })
}

function guardarInfoProfe(){
    nombreProfe.addEventListener("focusout", function() {
        localStorage.setItem("profesor", nombreProfe.value);
        })
    dniProfe.addEventListener("focusout", function() {
    localStorage.setItem("documentoProfe", dniProfe.value);
        })
    cursoProfe.addEventListener("focusout", function() {
        localStorage.setItem("cursoProfe", cursoProfe.value);
        })
}


function guardarInfoAlumno(){
    nombreAlumno.addEventListener("focusout", function() {
        localStorage.setItem("alumno", nombreAlumno.value);
        })
    dniAlumno.addEventListener("focusout", function() {
    localStorage.setItem("documentoAlumno", dniAlumno.value);
        })
}


function calcular2(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let resultado = (parseFloat(n1)+parseFloat(n2))/2;
    console.log(n1);
    console.log(n2);
    console.log(resultado);
    alumno = localStorage.getItem("alumno");
    caluculo = document.getElementById("calculo");
    if (resultado >= 6.5) {
        caluculo.innerHTML = `Wow!  ${alumno}  aprobó con un promedio de ${resultado} porque redondeamos la nota!`;
    }
    if (resultado >= 7) {
        caluculo.innerHTML = `Felicidades!  ${alumno}  aprobó con un promedio de ${resultado}!!!`;
    } 
    if(resultado < 6.5){
        caluculo.innerHTML = `Ups! Parece que ${alumno}  desaprobó con un promedio de ${resultado}.`;
    }
}

function calcular3(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let resultado = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    console.log(n1);
    console.log(n2);
    console.log(resultado);
    alumno = localStorage.getItem("alumno");
    caluculo = document.getElementById("calculo");
    if (resultado >= 6.5) {
        caluculo.innerHTML = `Wow!  ${alumno}  aprobó con un promedio de ${resultado} porque redondeamos la nota!`;
    }
    if (resultado >= 7) {
        caluculo.innerHTML = `Felicidades!  ${alumno}  aprobó con un promedio de ${resultado}!!!`;
    } 
    if(resultado < 6.5){
        caluculo.innerHTML = `Ups! Parece que ${alumno}  desaprobó con un promedio de ${resultado}.`;
    }
}

function calcular4(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let n4 = document.getElementById("n4").value;
    let resultado = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4;
    console.log(n1);
    console.log(n2);
    console.log(resultado);
    alumno = localStorage.getItem("alumno");
    caluculo = document.getElementById("calculo");
    if (resultado >= 6.5) {
        caluculo.innerHTML = `Wow!  ${alumno}  aprobó con un promedio de ${resultado} porque redondeamos la nota!`;
    }
    if (resultado >= 7) {
        caluculo.innerHTML = `Felicidades!  ${alumno}  aprobó con un promedio de ${resultado}!!!`;
    } 
    if(resultado < 6.5){
        caluculo.innerHTML = `Ups! Parece que ${alumno}  desaprobó con un promedio de ${resultado}.`;
    }
}




const yo = ["Santiago Woscoff", 18];

function mostrarPresentacion(yo){
    const presentacion = document.getElementById("presentacion");
    presentacion.innerHTML = "Hola! Yo soy " + yo[0] + ", un estudiante de " + yo[1] + " años que espera que esta aplicación te sirva!";
}



let nombreProfe = document.getElementById("nombreProfe");
let dniProfe = document.getElementById("dniProfe");    
let cursoProfe = document.getElementById("cursoProfe");
if(nombreProfe){
    mostrarPresentacion(yo);
    guardarInfoProfe();
    infoColegio();
    Toastify({
        text: "Sonria! Hay muchos alumnos que esperan poder aprobar la materia 📖✏",
        duration: 5000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} 
      }).showToast();
}


let nombreAlumno = document.getElementById("nombreAlumno");
let dniAlumno = document.getElementById("dniAlumno");    

let botonCursos = document.getElementById("botonCursos");
const botonInstituto = document.getElementById("botonInstituto");



if(nombreAlumno){
    colegioLS = localStorage.getItem("colegio");
    console.log(colegioLS);
    school = JSON.parse(colegioLS);
    console.log(school); 
    nombreProfe = localStorage.getItem("profesor");
    cursoProfe = localStorage.getItem("cursoProfe")
    const profe = document.getElementById("profe");
    profe.innerHTML = `Hola ${nombreProfe} que tenga un buen día promediando al curso N° ${cursoProfe} 😁`;
    guardarInfoAlumno();

    botonCursos.addEventListener("click", () => {
        const info = document.getElementById('info');
        fetch('/cursos.json')
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            respuesta.forEach(respuesta => {
                const texto = document.createElement('p');
                texto.innerHTML = `El curso N° ${respuesta.curso} tiene ${respuesta.alumnos} alumnos`;
                info.appendChild(texto);

                console.log(respuesta);
            });
        }
    )
    }
) 

    botonInstituto.addEventListener("click", () => {
            Toastify({
                text: "Colegio: " + school[0] + " // Localidad: " + school[1],
                duration: 3000,
                destination: "",
                newWindow: true,
                close: false,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} 
              }).showToast();
    }
)

}

const tituloCalculadora = document.getElementById("tituloCalculadora");
    if (tituloCalculadora) {
        nomAlumno = localStorage.getItem("alumno");
        tituloCalculadora.innerHTML = `Calcule las notas necesarias para ${nomAlumno}`
    }



