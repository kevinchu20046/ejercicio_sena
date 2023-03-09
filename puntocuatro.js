


let nombre = String;

let cedula = String;

let correo = String;

let ciudadresidencia = String;

let ciudadorigen = String;

let listapersonas = [];



let nombreartista = String;
let cancion1 = String;
let cancion2 = String;
let cancion3 = String;

/* Clase artista para el guardado de las canciones  */
class Artista {
    constructor(nombreartista,cancion1,cancion2,cancion3){
        this.nombreartista = nombreartista,
        this.cancion1 = cancion1,
        this.cancion2 = cancion2,
        this.cancion3 = cancion3
    }
};

/* Clase Persona para la creacion y el guardado de las personas ingresadas*/
class Persona {

    constructor(nombre,cedula,correo,ciudadresidencia,ciudadorigen,Artista){
        this.nombre = nombre;
        this.cedula = cedula;
        this.correo = correo;
        this.ciudadresidencia = ciudadresidencia;
        this.ciudadorigen = ciudadorigen;
        this.artista = Artista
    }

};




// El ingreso del registro de la persona 
const registropersona = function (){


    //ingreso del artista y las canciones
    nombreartista = document.getElementById("nombreartista").value;

    cancion1 = document.getElementById("cancion1").value;

    cancion2 = document.getElementById("cancion2").value;
    
    cancion3 = document.getElementById("cancion3").value;

    const artista1 = new Artista(nombreartista,cancion1,cancion2,cancion3);

    //ingreso de las propiedades de la persona
    nombre = document.getElementById("nombre").value;

    cedula = document.getElementById("cedula").value;

    correo = document.getElementById("correo").value;

    ciudadresidencia = document.getElementById("ciudadresidencia").value;

    ciudadorigen = document.getElementById("ciudadorigen").value;

    const persona1 = new Persona(nombre,cedula,correo,ciudadresidencia,ciudadorigen,artista1);
    
    listapersonas.push(persona1);
    console.log(listapersonas);
    alert("Usuario Guardado");
}


const MostrarTabla = (listass,indicess) => document.getElementById("tabla1").innerHTML = MostrarPersona(listass,indicess);

const Indice = () =>{

    var indice = document.getElementById("vectorpersona").value;
    MostrarPersona(listapersonas,indice);
    MostrarTabla(listapersonas,indice);
}
    
// El ingreso del artista
const MostrarPersona = function (lista,indice) {

    
    var espaciopersona = new Persona()
    espaciopersona = lista[indice];
    var artistamelamama = new Artista()

    let stringtabla = `
    <tr>
        <th>Nombre</th>

    </tr>
    `
    let tablacedula = `
    <tr>
        <th>Cedula</th>
    </tr>
    `

    let tablacorreo =`
    <tr>
        <th>Correo</th>
    </tr>
    `

    let tablaciudadresidencia=`
    <tr>
        <th>Ciudad De Residencia</th>
    </tr>
    `

    let tablaciudadorigen = `
    <tr>
        <th>Ciudad De Origen</th>
    </tr>
    `
    let tablaartista =`
    <tr>
        <th>Artista</th>
    </tr>
    
    `
    for(let clave in espaciopersona){
        if(clave == 'cedula'){
            stringtabla+= tablacedula;
        };
        if(clave == 'correo'){
            stringtabla+= tablacorreo;
        };
        if(clave=='ciudadresidencia'){
            stringtabla+= tablaciudadresidencia;
        };
        if(clave == 'ciudadorigen'){
            stringtabla+= tablaciudadorigen;
        };
        if(clave =='artista'){
            stringtabla+= tablaartista;
            artistamelamama = espaciopersona[clave];
            break
        };
        let fila="<tr><td>";
            fila+= espaciopersona[clave];
            fila+="</td>";
            stringtabla += fila;
        
        artistamelamama = espaciopersona[clave];      
    }

    console.log("fffffffff",artistamelamama);

    let tablacancion1 =`
    <tr>
        <th>Cancion 1</th>
    </tr>
    `

    let tablacancion2 =`
    <tr>
        <th>Cancion 2</th>
    </tr>
    `

    let tablacancion3 =`
    <tr>
        <th>Cancion 3</th>
    </tr>
    `

    for(let j in artistamelamama){
        if(j == 'cancion1'){
            stringtabla+= tablacancion1;
        };
        if(j == 'cancion2'){
            stringtabla+= tablacancion2;
        }
        if(j == 'cancion3'){
            stringtabla+= tablacancion3;
        }
        console.log(artistamelamama[j]);
        fila="<tr><td>";
        fila+= artistamelamama[j];
        fila+="</td>";
        stringtabla += fila;
    }

    return stringtabla
}



let botonmostrar = document.getElementById("boton2");

botonmostrar.onclick = Indice;

let botonregistrar = document.getElementById("registrar");

botonregistrar.onclick = registropersona;


