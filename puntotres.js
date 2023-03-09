
const lista1 = [1,3,5,6,8,10];
const lista2 = [2,4,7,9];

const dostablas =[];

let variable1 = Number;
let variable2 = Number;


    
    for(let i=0;i < lista1.length;i++){
        variable1 =lista1[i];
        variable2 = lista2[i];
        if(variable2 === undefined){

        }else{
            dostablas.push(variable2);
        }
        console.log(variable1);
        dostablas.push(variable1);
        
        console.log(dostablas);
    }



    dostablas.sort(function(a,b){return a-b})
    console.log(dostablas);
    
    const mostrarentabla1 = function(lista){

        let stringtabla = `
        <tr>
            <th>tabla ordenada</th>
        </tr>
        `
        for (let k = 0; k<dostablas.length;k++){
            let fila="<td>";
            fila+= dostablas[k];
            fila+="</td></tr>";
            stringtabla += fila;
        }
        
        return stringtabla;
    };  

    mostrarentabla1(dostablas);
    document.getElementById("tabla1").innerHTML =mostrarentabla1(dostablas);