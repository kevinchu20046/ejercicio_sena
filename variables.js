/* figuras planas cuadrado,rectangulo triangulo y circulo*/

//Cuadrado 
//perimetro
//area
let primervalor = Number;

let segundovalor = Number;

let tercervalor = Number;

let salida = Number;

let suma = function(primervalor,segundovalor,tercervalor){

    salida = parseInt(primervalor + segundovalor + tercervalor)

    alert(`el perimetro del cuadrado es de ${salida}`);
}

let obtenerdatos = function (){

    primervalor = parseInt(document.getElementById("primero").value);

    segundovalor = parseInt(document.getElementById("segundo").value);

    tercervalor = parseInt(document.getElementById("tercero").value);


    suma(primervalor,segundovalor,tercervalor)

        
}

let boton =document.getElementById("boton1");
boton.onclick = obtenerdatos;


let ladocuadrado = Number; 

let salida2 = Number;

let obtenerdatos2 = function (){
    ladocuadrado = parseInt(document.getElementById("lado").value);

    salida2 = 4 * ladocuadrado ;

    alert(`El perimetro del cuadrado es de: ${salida2}`);
}

let boton2 = document.getElementById("boton2");
boton2.onclick = obtenerdatos2

let radiocirculo = Number;

let salida3 = Number;

const PI = 3.14;

let salida4 = Number;

let obtenerdatostres = function() {

    radiocirculo = parseInt(document.getElementById("circulo").value)

    salida3  =  2 * radiocirculo

    salida4 = PI * salida3

    alert(`El perimetro del circulo es de : ${salida3} π, que seria igual a ${salida4} `);
}

let boton3 = document.getElementById("boton3");

boton3.onclick = obtenerdatostres;

 
let lado1 = Number;
let lado2 = Number;
let salidarectangulo = Number;
let obtenerrectangulo = function(){

    lado1 = parseInt(document.getElementById("ladorectangulo1").value);
    
    lado2 = parseInt(document.getElementById("ladorectangulo2").value);

    salidarectangulo = 2 *(lado2 + lado1)

    alert(`El perimetro del rectangulo es de : ${salidarectangulo}`)

}
let boton4 = document.getElementById("boton4");
boton4.onclick = obtenerrectangulo






