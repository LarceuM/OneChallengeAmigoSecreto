// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() { 
    let amigojs = "";
    amigojs = document.getElementById('amigo').value;
    console.log (amigojs);
    if (validar(amigojs) ) { 
        nombres.push (amigojs);  
//        console.log ( nombres)  
        document.getElementById('amigo').value = "";
        visualiza();  
    };

    return
}

function validar(amigojs) { 
    if (amigojs== "") {  
        alert("el nombre del amigo deebe ser distinto de espaccion.");  
        return false;
    }
    if (nombres.includes(amigojs)) {   
        alert("el nombre del amigo no puede estar repetido");  
        return false;
    }
    return true;
    }

function visualiza() {   
       
        const lista = document.getElementById("listaAmigos");
         lista.innerHTML = ""
        // Crear y agregar elementos <li> dinámicamente
        nombres.forEach((elemento) => {
        const item = document.createElement("li");
        item.textContent = elemento; // Agregar el texto
        lista.appendChild(item);    // Insertar en la lista
        });


};
function sortearAmigo() {     
    let indiceSorteado = 0;
    let numeroMaxNombres = nombres.length; 
    indiceSorteado = Math.floor(Math.random()*numeroMaxNombres); 
 //  console.log (numeroMaxNombres); 
 //   console.log (indiceSorteado);
    console.log (`amigo secreto asigna !!!  ${nombres[indiceSorteado]}   !!!`);
    document.getElementById('resultado').innerHTML = `amigo secreto asigna !!!  ${nombres[indiceSorteado]}   !!!`;
    return;
}

function reiniciarJuego() {
    nombres = [];

}

reiniciarJuego(); 