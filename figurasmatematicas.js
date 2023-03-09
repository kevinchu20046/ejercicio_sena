//figuras planas 

//cuadrado 
const cuadrado=()=>{
    base = Number;
    altura = Number;
    area = Number;

    //area
    base = 5;

    altura = 5;

    area = base*altura;

    console.log(`el area del cuadrado es de ${area}`);

    //perimetro

    perimetro = Number;

    perimetro = base+base+altura+altura;

    console.log(`el perimetro del cuadrado es de ${perimetro}`);
}
//cuadrado();

//rectangulo
const rectangulo=() =>{

    //area
    base = Number;
    altura = Number;
    area = Number;

    base = 5;

    altura = 5;

    area = base*altura;

    console.log(`el area del rectangulo  es de ${area}`);

    //perimetro

    perimetro = Number;

    perimetro = base+base+altura+altura;

    console.log(`el perimetro del rectangulo es de ${perimetro}`);
}

//rectangulo();

//triangulo
const triangulo=()=>{
    //area(b*h)/2
    base = Number;
    altura = Number;
    area = Number;

    base = 5;
    altura = 5;


    area = (base*altura)/2;

    console.log(`el area del triangulo es de: ${area}`);
}

//triangulo();


const rombo=()=>{
    //D=diagonalmayor
    //d=diagonalmenor
    // area= (D*d)/2

    D = Number;
    d = Number;
    area = Number;

    D = 5;

    d = 5;

    area = (D*d)/2;

    console.log(`el area del rombo es de: ${area}`);
}
//rombo();



const trapecio=()=>{

    // B = basemayor
    // b = basemenor
    // area = h*(B+b)/2

    B = Number;
    b = Number;
    altura = Number;
    area = Number;

    B = 5;

    b = 5;

    altura =5;

    area = altura*(B+b)/2;

    console.log(`El area del trapecio es de: ${area}`);
}

//trapecio();


const circulo =()=>{
    //area = Pi*r^2
    //r = radio

    r = Number;
    area = Number;
    exponente = Number;

    const pi=3.14;

    r = 5;

    exponente = Math.pow(r,2);

    area = pi*exponente;

    console.log(`el area de el circulo es de: ${exponente} π, que seria igual a ${area}`);

    //perimetro= 2*PI*r
    perimetro = Number;

    salida1 = Number 

    salida1= 2*r

    perimetro = pi*salida1;

    console.log(`el perimetro de del ciculo es de: ${salida1} π, que seria igual a ${perimetro}`);
}

//circulo();


//Solidos 


const esfera=()=>{

    //V =  4/3*π*r^3


    let volumen = Number;

    let PI = 3.1416;

    let radio = Number;

    radio = 5;

    let exponente = Math.pow(radio,3);

    volumen = (4/3)*PI*exponente;

    console.log(`el volumen de de la esfera es de: ${volumen}`);
} 

//esfera();


const cubo =()=>{
    //volumen = a^3
    //a = lado

    let volumen = Number;

    let a = Number;

    a = 5;

    volumen = Math.pow(a,3);

    console.log(`El volumen del cubo es de: ${volumen}`);

} 

//cubo();



const paralelepípedo=()=>{
    //Volumen=a*b*c
    //a,b,c = lado 

    let volumen = Number;

    let a = Number;

    let b = Number;

    let c= Number;

    a=5;

    b=5;

    c=5;

    volumen = a*b*c;

    console.log(`El volumen de el paralelepípedo es de: ${volumen}`);
}

//paralelepípedo();

const cilindro =()=>{
    //Volumen=PI*r^2*h

    let volumen = Number;

    const  PI = 3.1416;
    
    let r = Number;
    
    let altura = Number;

    r=5; 

    altura=5;

    let exponente = Math.pow(r,2);

    volumen = PI*exponente*altura;

    console.log(`El volumen del cilidro es de: ${volumen}`);
}

//cilindro();

const cono =()=>{
    // Volumen = PI*r^2*altura/3

    let volumen = Number;

    let r = Number;
    
    let altura = Number; 

    r = 5;

    altura=5;

    let exponente = Math.pow(r,2);

    const  PI = 3.1416;

    volumen = (PI*exponente*altura)/3;

    console.log(`El voluemn del cono es de: ${volumen}`);
}
cono();