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

do {
    let nombre = prompt('Ingresar el nombre del alumno');
    let menu = Number(prompt('1.Promediar tres notas / 2.Promediar cuatro notas'));
switch (menu) {
    case 1:
        let n1 = Number(prompt('Ingresar la primer nota del alumno'));
        let n2 = Number(prompt('Ingresar la segunda nota del alumno'));
        let n3 = Number(prompt('Ingresar la tercer nota del alumno'));
        notaFinal3(n1, n2, n3);
        if (resultado >= 7) {
            alert("Felicidades! " + nombre + ' aprobó con un promedio de ' + resultado + '!!!');
        } if (resultado >= 6.5) {
            alert('Wow! ' + nombre + ' aprobó con un promedio de ' + resultado + ' porque redondeamos la nota!');
        } 
        else {
            alert("Ups! Parece que " + nombre + ' desaprobó con un promedio de ' + resultado + '. Deberá recuperar.');
        }
        break;
    case 2:
        let num1 = Number(prompt('Ingresar la primer nota del alumno'));
        let num2 = Number(prompt('Ingresar la segunda nota del alumno'));
        let num3 = Number(prompt('Ingresar la tercer nota del alumno'));
        let num4 = Number(prompt('Ingresar la cuarta nota del alumno'));
        notaFinal4(num1, num2, num3, num4);
        if (resultado >= 7) {
            alert("Felicidades! " + nombre + ' aprobó con un promedio de ' + resultado + '!!!');
        } if (resultado >= 6.5) {
            alert('Wow! ' + nombre + ' aprobó con un promedio de ' + resultado + ' porque redondeamos la nota!');
        } 
        else {
            alert("Ups! Parece que " + nombre + ' desaprobó con un promedio de ' + resultado + '. Deberá recuperar.');
        }
        break;
    default:
        alert('Por favor eliga una opción valida');
        break;
}
pregunta = Number(prompt('1.Seguir haciendo promedios / 2.Mucho por hoy🤯'));
} while(pregunta == 1);





