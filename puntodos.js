

let edad = Number;
const listaedad = [];
const listamenores = [];
const listamayores = [];
const listaadultosmayores = [];
let menores = Number;
var i = Number;
i = 1;
document.getElementById("mostrar").innerHTML = i;



const mostrarentabla1 = function(lista){

    let stringtabla = `
    <tr>
        <th>Menores de edad</th>
    </tr>
    `
        for (let k = 0; k<listamenores.length;k++){
            let fila="<tr><td>";
            fila+= listamenores[k];
            fila+="</td>";
            stringtabla += fila;
        }
    
    return stringtabla;
};

const mostrarentabla2 = function(lista){

    let stringtabla = `
    <tr>
        <th>Mayores de edad</th>
    </tr>
    `
    for (let k = 0; k<listamayores.length;k++){
        let fila="<td>";
        fila+= listamayores[k];
        fila+="</td></tr>";
        stringtabla += fila;
    }
    
    return stringtabla;
};

const mostrarentabla3 = function(lista){

    let stringtabla = `
    <tr>
        <th>Adultos mayores</th>
    </tr>
    `
    for (let k = 0; k<listaadultosmayores.length;k++){
        let fila="<td>";
        fila+= listaadultosmayores[k];
        fila+="</td></tr>";
        stringtabla += fila;
    }
    
    return stringtabla;
};

const mostrarentabla4 = function(lista){

    let stringtabla = `
    <tr>
        <th>Edad mas baja</th>
    </tr>
    `
    for (let k = 0; k<1;k++){
        let fila="<td>";
        fila+= lista;
        fila+="</td></tr>";
        stringtabla += fila;
    }    
    return stringtabla;
};

const mostrarentabla5 = function(lista){

    let stringtabla = `
    <tr>
        <th>Edad mas alta</th>
    </tr>
    `
    for (let k = 0; k<1;k++){
        let fila="<td>";
        fila+= lista;
        fila+="</td></tr>";
        stringtabla += fila;
    }
    return stringtabla;
};

const mostrarentabla6 = function(lista){

    let stringtabla = `
    <tr>
        <th>Media de las edades</th>
    </tr>
    `
    for (let k = 0; k<1;k++){
        let fila="<td>";
        fila+= lista;
        fila+="</td></tr>";
        stringtabla += fila;
    }
    return stringtabla;
};


const obteneredad = function (){

    i++;

    document.getElementById("mostrar").innerHTML = i;

    edad = parseInt(document.getElementById("elbicho").value);

    listaedad.push(edad);

    console.log(listaedad);

    for(let j = 0;j<1;j++){
        let l = Number;
        l = listaedad.length;
        l = l -1;

        if(listaedad[l]<18){

            menores = listaedad[l];
            console.log(menores);
            listamenores.push(menores);
            console.log(listamenores);
           

        };
        
        if(listaedad[l]>18){
    
            mayores = listaedad[l];
            console.log(mayores);
            listamayores.push(mayores)
            console.log(listamayores)
            
        };
        if(listaedad[l]>=60){
    
            mayoresadult = listaedad[l];
            console.log("jojo"+ mayoresadult);
            listaadultosmayores.push(mayoresadult)
            console.log("hshaha"+listaadultosmayores)

        };
        
    };

    let edadmedia = Number;
    let sumaedadmedia = 0;
    for(p = 0;p<listaedad.length;p++){
        edadmedia = parseInt(listaedad[p]);
        sumaedadmedia += edadmedia;
        console.log("edadmedia"+sumaedadmedia);
    };

    sumaedadmedia = sumaedadmedia/listaedad.length;

    var variablemayores = Math.max.apply(null, listaedad);
    console.log(variablemayores)
    var variablesmenores = Math.min.apply(null, listaedad);
    console.log(variablesmenores)
    
    mostrarentabla1(listamenores);
    document.getElementById("tabla1").innerHTML =mostrarentabla1(listamenores);

    mostrarentabla2(listamayores);
    document.getElementById("tabla2").innerHTML =mostrarentabla2(listamayores);

    mostrarentabla3(listaadultosmayores);
    document.getElementById("tabla3").innerHTML =mostrarentabla3(listaadultosmayores);

    mostrarentabla4(variablesmenores);
    document.getElementById("tabla4").innerHTML =mostrarentabla4(variablesmenores);

    document.getElementById("tabla5").innerHTML = `
    <tr>
        <th>Edad mas alta</th>
    </tr>
    <td>
        ${variablemayores}
    </td>`
    
    mostrarentabla6(sumaedadmedia);
    document.getElementById("tabla6").innerHTML=mostrarentabla6(sumaedadmedia);

    
};

let boton1 = document.getElementById("b1");
boton1.onclick = obteneredad;


