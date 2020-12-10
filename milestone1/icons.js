$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
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
  ];
  // Selezioniamo il container icons
  const iconSection = $(".container .icons");
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
 


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

