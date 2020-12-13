// eslint-disable-next-line no-undef
$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family

  class Icons {
    constructor(name, prefix, type, family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }

  const icons = [
    new Icons("cat", "fas", "fa-cat", "animals"),
    new Icons("crow", "fas", "fa-crow", "animals"),
    new Icons("dog", "fas", "fa-dog", "animals"),
    new Icons("dove", "fas", "fa-dove", "animals"),
    new Icons("dragon", "fas", "fa-dragon", "animals"),
    new Icons("horse", "fas", "fa-horse", "animals"),
    new Icons("hippo", "fas", "fa-hippo", "animals"),
    new Icons("fish", "fas", "fa-fish", "animals"),
    new Icons("carrot", "fas", "fa-carrot", "vegetables"),
    new Icons("apple", "fas", "fa-apple-alt", "vegetables"),
    new Icons("lemon", "fas", "fa-lemon", "vegetables"),
    new Icons("pepper", "fas", "fa-pepper-hot", "vegetables"),
    new Icons("astronaut", "fas", "fa-user-astronaut", "users"),
    new Icons("graduate", "fas", "fa-user-graduate", "users"),
    new Icons("ninja", "fas", "fa-user-ninja", "users"),
    new Icons("secret", "fas", "fa-user-secret", "users"),
  ];

  const blue = "blue";
  const orange = "orange";
  const purple = "purple";

  // Selezioniamo il container icons
  const container = document.querySelector(".icons");

  const colArray = icons.map((element) => {
    if (element.family === "animals") {
      var color = blue;
    } else if (element.family === "vegetables") {
      var color = orange;
    } else {
      var color = purple;
    }

    const newColArray = { ...element, color: color };

    return newColArray;
  });

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  print(colArray, container);

  function print(array, selector) {
    array.forEach((element) => {
      const { name, prefix, type, color } = element;
      selector.innerHTML += `<div>
             <i class="${prefix} ${type}" style="color:${color}"></i>
             <div class="title">${name.toUpperCase()}</div>
           </div>`;
    });
  }

  //estrapoliamo i tipi di icone
  const select = $("#type");

  //aggiungiamo i tipi alla select
  select.append('<option value="animals">Animals</option>');
  select.append('<option value="vegetables">Vegetables</option>');
  select.append('<option value="users">Users</option>');

  //al change mostriamo solo le icone filtrate

  const elementSelection = document.getElementById("type");

  elementSelection.addEventListener("change", (event) => {
    const choice = $("#type option:selected").val();

    const newFilterArray = colArray.filter((i) => i.family === choice);

    container.innerHTML = "";

    print(newFilterArray, container);

    if (choice == "all") {
      print(newColArray, container);
    }
  });
});
