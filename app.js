//ARREGLOS RECURSIVIDAD  problema comun por no indicar hasta donde va. Hay colocar un alerta
// condicion de salida

let numeroSecreto = 0;
let intentos = 0;
let listaNumeSorteados = [];// guarda los numeros q ya salieron
let numeroMaximo =10;

console.log(numeroSecreto);
//----------------------- TEXTO-------------------------------------
function asignarTextoElmento( elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;
}
//-------------------- VERIFICAR INTENTO----------------------------
function verificarIntento(){
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroUsuario === numeroSecreto){
        
        asignarTextoElmento('p', `Acertaste el numero en ${intentos} ${(intentos === 1)?'vez':'veces'}`);
        //Cuando acierto remuebo el disable del botonlo abilito atraves del 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //EN CASO DE NO ACERTAR SE LIMPIA AUTOMATICAMENTE PARA CARGAR EL NUEVO NUMERO
        if (numeroSecreto < numeroUsuario){
            asignarTextoElmento('p','El numero secreto es menor')
        }else{
            asignarTextoElmento ('p','El numero secreto es mayor')
        }
        intentos ++;
        limpiarCaja ();
    }
    return;// retorna el valor la funcion id
}
//------------------------LIMPIAR CAJA -------------------------------
function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}
//------------------------GENERAR NUMERO SECRETO-------------------------
function generaNumeroSecreto( ){ 
    let numGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numGenerado);
    console.log(listaNumeSorteados);
    // Si ya sorteamos todos los numero
    if (listaNumeSorteados.length == numeroMaximo){//validadorde codigo
        asignarTextoElmento('p','Ya se sortearon todos los numeros posibles');
    }else{
    // nos preguntamos si esta en la lista, includes recorre toda la lista verifica si num ya existe
    // nosdevuelve un booleano. Adentro del include le pongo el valor a chequear numGenerado
    
        if ( listaNumeSorteados.includes(numGenerado) ){
//Concepto DE RECURSIVIDAD la funcion q esta ahi se llame asi misma porque puede generar un resultado valido
            return numeroSecreto();// retorne el valor
            // pero esto no tiene condicion de salida y se hace infinito
        }else{
            listaNumeSorteados.push(numGenerado);
        }
        return numGenerado; 
    }
}
//---------------------------CONDICIONES INICIALES ----------------------
function condicionesIniciales(){
    asignarTextoElmento('h1','Juego del numero secreto!');
    asignarTextoElmento('p',`Indica un numero del 1 al ${numeroMaximo}` );
    numeroSecreto = generaNumeroSecreto();
    intentos =1;
}
//------------------------- REINICIAR  JUEGO-----------------------------
function reiniciarJuego(){
  
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();