import pokemon from "../data/pokemon/pokemon.js";

const App = () => {
  const gameBoard = document.createElement("div"); //Aquí creamos el contenedor padre que anexa a todos los contenedores hijos
  gameBoard.className = ("contenedor"); // Le damos un class al contenedor para darle estilo con CSS
  gameBoard.id = ("gameBoard");// y le damos un id para poder tener el nombre del contenedor
  gameBoard.style.display = ("none");

  const gameContainer = document.createElement("div"); // Aquí creamos el elemento que va a contener el juego y que será hijo del elemento anterior
  gameContainer.className = ("containerBox1");
  gameContainer.id = ("gameContainer");
 

  const level1 = document.createElement("div");
  const textLevel1 = document.createTextNode("Nivel 1");
  level1.className = ("nivel1");
  level1.id = ("nivel1");

  // funcionamiento del juego

  const memoryGame = document.createElement("div"); 


  let listaPokemon = pokemon.items; // esto lo del for ya recorrido
  listaPokemon = shuffle(listaPokemon); // toma la lista y la barajea 
  listaPokemon = recortarLista(listaPokemon, 3);// recorta esa lista a solo 3 item y los hace doble 
  listaPokemon = shuffle(listaPokemon); // vuelve a barajear lo anterior.
  let cartasEscogidas = []; // esta array contenerá las cartas seleccionadas por el usuario 

// información declara en pokemones, se muestran en el contenedor
  for (let index = 0; index < listaPokemon.length; index++) {
    const element = listaPokemon[index]; // representa a cada item actual en la lista de pokemon 
     const tarjeta = document.createElement ("div"); // aqui se crea un div x para que contenga al pokemon 
     tarjeta.className=("card") // estilo para css
     const estaImagen = document.createElement("img"); // img es especial para imagenes  
    estaImagen.id = index+element.id; 
     estaImagen.src= element.image

    estaImagen.addEventListener("click", (event)=> {
        tarjeta.classList.toggle('is-flipped');   
        console.log (estaImagen)
      }); 

      
    // cartasEscogidas.push(element)  //se agrega las cartas escogidas al array --- corregir cartas que son o no pares
    memoryGame.appendChild(tarjeta); 
    tarjeta.appendChild(estaImagen)
    
  }
  
    
// Aquí anexamos todos los contenedores padres a sus respectivos contenedores hijos
  gameBoard.appendChild(gameContainer);
  gameContainer.appendChild(level1);
  level1.appendChild(textLevel1);
  gameContainer.appendChild(memoryGame);


  return gameBoard;
};

function recortarLista(lista) {
  const listaRecortada = [];
  for (let index = 0; index < 3; index++) {
    const element = lista[index];
    listaRecortada.push(element, element); //aquí se duplica un elemento de la lista, hasta llegar al index 3 (los tres primeros elemento
  }
  return listaRecortada;
}
const shuffle = (arr) =>{
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;    

  }

  function match () {
    if(cartasEscogidas[0] === cartasEscogidas[1]) {
      alert('hiciste match');
    } else {
       alert('te equivocaste');
       cartasEscogidas.length = 0;
    }}  


 export default App;