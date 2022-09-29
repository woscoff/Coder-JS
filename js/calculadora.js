let resultado = 0;
let pregunta;

function notaFinal3(nota1, nota2, nota3){
    let suma = nota1 + nota2 + nota3;
    resultado = suma / 3;
}

function notaFinal4(nota1, nota2, nota3, nota4){
    let suma = nota1 + nota2 + nota3 + nota4;
    resultado = suma / 4;
}

function persona(name, dni, grade){
    this.name = name;
    this.dni = dni;
    this.grade = grade;
}

const cursos = [
    {
        curso: 1, 
        alumnos: '22 alumnos' 
    },
    {
        curso: 2, 
        alumnos: '26 alumnos'
    },
    {
        curso: 3, 
        alumnos: '30 alumnos'
    },
    {
        curso: 4, 
        alumnos: '27 alumnos'
    },
    {
        curso: 5, 
        alumnos: '34 alumnos'
    },
    {
        curso: 6, 
        alumnos: '32 alumnos'
    },
];

const instituto = document.getElementById("instituto");
const localidad = document.getElementById("localidad");
const colegio = [];

function infoColegio(){
    instituto.addEventListener("focusout", function() {
        colegio.push(instituto.value);
        console.log(instituto.value);
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
}


let nombreAlumno = document.getElementById("nombreAlumno");
let dniAlumno = document.getElementById("dniAlumno");    

let botonCursos = document.getElementById("botonCursos");
const botonInstituto = document.getElementById("botonInstituto");

if(nombreAlumno){
    colegioLS = localStorage.getItem("colegio");
    nombreProfe = localStorage.getItem("profesor");
    cursoProfe = localStorage.getItem("cursoProfe")
    const profe = document.getElementById("profe");
    profe.innerHTML = `Hola ${nombreProfe} que tenga un buen día promediando al curso N° ${cursoProfe} 😁`;
    guardarInfoAlumno();

    botonCursos.addEventListener("click", () => {
        const infoCurso = document.getElementById("infoCurso");
        if(cursoProfe == 1){
            infoCurso.innerHTML = "Su curso es el N°" + cursos[0].curso + " y tiene " + cursos[0].alumnos;
        }
        if(cursoProfe == 2){
            infoCurso.innerHTML = "Su curso es el N°" + cursos[1].curso + " y tiene " + cursos[1].alumnos;
        }
        if(cursoProfe == 3){
            infoCurso.innerHTML = "Su curso es el N°" + cursos[2].curso + " y tiene " + cursos[2].alumnos;
        }
        if(cursoProfe == 4){
            infoCurso.innerHTML = "Su curso es el N°" + cursos[3].curso + " y tiene " + cursos[3].alumnos;
        }
        if(cursoProfe == 5){
            infoCurso.innerHTML = "Su curso es el N°" + cursos[4].curso + " y tiene " + cursos[4].alumnos;
        }
        if(cursoProfe == 6){
            infoCurso.innerHTML = "Su curso es el N°" + cursos[5].curso + " y tiene " + cursos[5].alumnos;
        }
    }
) 

    botonInstituto.addEventListener("click", () => {
        const infoInstituto = document.getElementById("infoInstituto");
            infoInstituto.innerHTML = "Datos del Instituto: " + colegioLS;
    }
)

}


    


    


/* do {
    const alum = prompt('Ingrese el nombre del alumno');
    const dniAlum = Number(prompt('Ingrese el documento del alumno'));
    const curso = prompt('Ingrese el curso del alumno');
    const alumno = new persona(alum, dniAlum, curso);

    let menu = Number(prompt('1.Promediar tres notas / 2.Promediar cuatro notas'));
switch (menu) {
    case 1:
        let n1 = Number(prompt('Ingresar la primer nota del alumno'));
        let n2 = Number(prompt('Ingresar la segunda nota del alumno'));
        let n3 = Number(prompt('Ingresar la tercer nota del alumno'));
        notaFinal3(n1, n2, n3);
        if (resultado >= 6.5) {
            alert('Wow! ' + alumno.name + ' aprobó con un promedio de ' + resultado + ' porque redondeamos la nota!');
        }
        if (resultado >= 7) {
            alert("Felicidades! " + alumno.name + ' aprobó con un promedio de ' + resultado + '!!!');
        } 
        if(resultado < 6.5){
            alert("Ups! Parece que " + alumno.name + ' desaprobó con un promedio de ' + resultado + '. Deberá recuperar.');
        }
        break;
    case 2:
        let num1 = Number(prompt('Ingresar la primer nota del alumno'));
        let num2 = Number(prompt('Ingresar la segunda nota del alumno'));
        let num3 = Number(prompt('Ingresar la tercer nota del alumno'));
        let num4 = Number(prompt('Ingresar la cuarta nota del alumno'));
        notaFinal4(num1, num2, num3, num4);
        if (resultado >= 6.5) {
            alert('Wow! ' + alumno.name + ' aprobó con un promedio de ' + resultado + ' porque redondeamos la nota!');
        }
        if (resultado >= 7) {
            alert("Felicidades! " + alumno.name + ' aprobó con un promedio de ' + resultado + '!!!');
        } 
        if(resultado < 6.5){
            alert("Ups! Parece que " + alumno.name + ' desaprobó con un promedio de ' + resultado + '. Deberá recuperar.');
        }
        break;
    default:
        alert('Por favor eliga una opción valida');
        break;
}
pregunta = Number(prompt('1.Seguir haciendo promedios / 2.Mucho por hoy🤯'));
} while(pregunta == 1);
 */



