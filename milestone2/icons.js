$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
class Icon {
  constructor(name, prefix, type, family) {
    this.name = name;
    this.prefix = prefix;
    this.type = type;
    this.family = family;
  }
}
const icons = [
  new Icon("cat", "fas", "fa-cat", "animals"),
  new Icon("crow", "fas", "fa-crow", "animals"),
  new Icon("dog", "fas", "fa-dog", "animals"),
  new Icon("dove", "fas", "fa-dove", "animals"),
  new Icon("dragon", "fas", "fa-dragon", "animals"),
  new Icon("horse", "fas", "fa-horse", "animals"),
  new Icon("hippo", "fas", "fa-hippo", "animals"),
  new Icon("fish", "fas", "fa-fish", "animals"),
  new Icon("carrot", "fas", "fa-carrot", "fruits & vegetables"),
  new Icon("apple", "fas", "fa-apple-alt", "fruits & vegetables"),
  new Icon("lemon", "fas", "fa-lemon", "fruits & vegetables"),
  new Icon("pepper", "fas", "fa-pepper-hot", "fruits & vegetables"),
  new Icon("astronaut", "fas", "fa-user-astronaut", "users & people"),
  new Icon("graduate", "fas", "fa-user-graduate", "users & people"),
  new Icon("ninja", "fas", "fa-user-ninja", "users & people"),
  new Icon("secret", "fas", "fa-user-secret", "users & people"),
];
const container = document.getElementById("icons");
icons.forEach((icon) => {
  const markup = `
    <div>
       <i class="${icon.prefix} ${icon.type}"></i>
       <div class="title">${icon.name.toUpperCase()}</div>
    </div>
    `;
  container.insertAdjacentHTML("beforeend", markup);
});
  // definiamo dei colori per le icone (blue, orange, purple)
  const blue = #0000ff;
  const orange = #ffa502;
  const purple = #800080;

  //aggiungiamo dei colori usando una funzione
  

  //inseriamo le icone colorate nel container

});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
