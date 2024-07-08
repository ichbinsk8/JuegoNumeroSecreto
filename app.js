let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
     asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ?'vez' : 'veces'}`);
     document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
       if(numeroUsuario>numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
       }else{
        asignarTextoElemento('p','El número secreto es mayor');
       }
       intentos++;
       limpiarCaja();
    }
    return;
}
function limpiarCaja(){
  document.querySelector('#valorUsuario').value='';
  
}
function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si el numero generado esta incluido en la lista hacemos algo, si no hacemos otra
  if(listaNumerosSorteados.length == numeroMaximo){
  asignarTextoElemento('p','Ya se sortearon todos los números posibles');
  }else{
  if(listaNumerosSorteados.includes(numeroGenerado))
    {
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }

}
function condicionesIniciales(){
  asignarTextoElemento('h1','Juego deL número secreto');
  asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function reiniciarJuego(){
  //Limpiar textBox
  //Indicar mensaje de intervalo de números 
  //Generar número aleatorio
  //Reiniciar el contador 
  //Deshabilitar el botón del nuevo juego 
  limpiarCaja();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


