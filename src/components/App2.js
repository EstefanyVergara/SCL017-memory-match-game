import pokemon from "../data/pokemon/pokemon.js";

function recortarLista(lista) {// En nivel dos solo mostraremos 6 elementos de nuestro array
  const listaRecortada = [];
  for (let index = 0; index < 6; index++) {
    const element = lista[index];
    listaRecortada.push(element, element); //aquí se duplica un elemento de la lista, hasta llegar al index 5 (los 6 primeros elementos)
  }
  return listaRecortada;
}
function match (cartasEscogidas,cards) {
  if(cartasEscogidas[0] == cartasEscogidas[1]) {
    paresEncontrados = paresEncontrados +1;
    for (let index = cartasEscogidas.length -1; index > -1; index--) {
      cards[index].style.visibility = "hidden";        
      }
      if(paresEncontrados === 6){
        document.getElementById("nextLevel3").style.display = "block";
       }
    }
      cartasEscogidas.length = 0;
   } 

const shuffle = (arr) =>{ // Función para barajear las cartas  
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;    
  } 
/* Creación de contenedores de juego */
const gameBoard2 = document.createElement("div"); //Aquí creamos el contenedor padre que anexa a todos los contenedores hijos
gameBoard2.className = ("contenedor"); // Le damos un class al contenedor para darle estilo con CSS
gameBoard2.id = ("gameBoard2");// y le damos un id para poder tener el nombre del contenedor
gameBoard2.style.display = ("none");
 
const gameContainer = document.createElement("div"); // Aquí creamos el elemento que va a contener el juego y que será hijo del elemento anterior
gameContainer.className = ("containerBox1");
gameContainer.id = ("gameContainer");
 
 
const level1 = document.createElement("div");
const textLevel1 = document.createTextNode("Nivel 2");
level1.className = ("nivel1");
level1.id = ("nivel1");
 
const memoryGame = document.createElement("div"); 
memoryGame.className = ("memoryGame");
memoryGame.id = ("memoryGame");
 
const nextLevel = document.createElement("button");
nextLevel.style.display = ("none");
const textNextLevel = document.createTextNode ("¡SIGUIENTE NIVEL!")
nextLevel.className = ("nextLevelText");
nextLevel.id = ("nextLevel2");

nextLevel.addEventListener("click", ()=> {
  document.getElementById("gameBoard3").style.display=("flex");
  }); 
 
// funcionamiento del juego 
let listaPokemon = pokemon.items; // esto lo del for ya recorrido
listaPokemon = shuffle(listaPokemon); // toma la lista y la barajea 
listaPokemon = recortarLista(listaPokemon, 6);// recorta esa lista a solo 6 item y los hace doble 
listaPokemon = shuffle(listaPokemon); // vuelve a barajear lo anterior.
let cartasEscogidas = [];
let cards = [];
let paresEncontrados = 0;
 
const App2 = () => {
  for (let index = 0; index < listaPokemon.length; index++) {
    let card = document.createElement ("div");
    card.className = ("card");
    card.id = listaPokemon.id;
    let imagenFrontal = document.createElement ("img"); 
    imagenFrontal.src = "../img/QUEUE.png";
    imagenFrontal.className ="imagenFrontal";
  
    card.appendChild(imagenFrontal);
    
    imagenFrontal.addEventListener("click", ()=> {
    if (cartasEscogidas.length < 2){     
      imagenFrontal.src = listaPokemon[index].image;
      imagenFrontal.className ="imagenPokemon";
      card.appendChild(imagenFrontal);
      cartasEscogidas.push(listaPokemon[index].id);
      cards.push(card);
     
    if (cartasEscogidas.length == 2){
      setTimeout(()=>{
      match(cartasEscogidas,cards)
      let reemplazoOne = cards[0].lastChild;
    reemplazoOne.src = "../img/QUEUE.png";
    reemplazoOne.className = "imagenFrontal";

    let reemplazoTwo = cards[1].lastChild;
    reemplazoTwo.src = "../img/QUEUE.png";
    reemplazoTwo.className = "imagenFrontal";
    cards.length = 0;
    },1000);
    } 
    }
    }); 
      memoryGame.appendChild(card);

// Aquí anexamos todos los contenedores padres a sus respectivos contenedores hijos
  gameBoard2.appendChild(gameContainer);
  gameContainer.appendChild(level1);
  level1.appendChild(textLevel1);
  gameContainer.appendChild(memoryGame);
  gameBoard2.appendChild(gameContainer);
  gameContainer.appendChild(nextLevel);
  nextLevel.appendChild(textNextLevel);
}  
  return gameBoard2;
}
 export default App2;
