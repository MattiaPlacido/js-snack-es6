// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//dichiarazione array
const bikes = [
  {
    brand: "Bianchi",
    weight: 20, //siccome stiamo parlando di bici è implicito che il peso sia in kg, stessimo parlando di qualcosa che può avere varie unità di peso definirei un altro attributo per descriverlo
  },
  {
    brand: "Bergamont",
    weight: 15,
  },
  {
    brand: "Fantic",
    weight: 17,
  },
  {
    brand: "Bmx",
    weight: 12,
  },
  {
    brand: "Bmc",
    weight: 23,
  },
];

//dichiaro la mia variabile di appoggio
let lightestBike = bikes[0];

//confronto tutte le bici utilizzando la mia variabile per far passare la più leggera
bikes.forEach((element) => {
  if (element.weight < lightestBike.weight) {
    lightestBike = element;
  }
});

//output
console.log(
  `La bici più leggera è ${lightestBike.brand}, con ${lightestBike.weight}kg di peso!`
);

// Snack 2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  {
    nome: "Inter",
    puntiFatti: 0,
    puntiSubiti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    puntiSubiti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Cagliari",
    puntiFatti: 0,
    puntiSubiti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Atalanta",
    puntiFatti: 0,
    puntiSubiti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juventus",
    puntiFatti: 0,
    puntiSubiti: 0,
    falliSubiti: 0,
  },
];

//dichiaro la funzione per generare numeri casuali
const randomNumberGen = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const falliSquadre = [];

//assegno i numeri random e pusho falli e nomi squadre
squadre.forEach((element) => {
  element.puntiFatti = randomNumberGen(1, 10);
  element.puntiSubiti = randomNumberGen(1, 10);
  element.falliSubiti = randomNumberGen(1, 10);
  falliSquadre.push(element);
});

//elimino i dati indesiderati rimasti dagli oggetti pushati nel nuovo array e stampo l'output all'utente
falliSquadre.forEach((element) => {
  delete element.puntiFatti;
  delete element.puntiSubiti;
  console.log(
    `La squadra ${element.nome} ha subito ${element.falliSubiti} falli`
  );
});

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const scorriArray = (array = [], a, b) => {
  if (a >= b) {
    allert("Inserisci indici validi, stai scorrendo un array");
  } else {
    const newArray = [];
    for (let i = a + 1; i < b; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
};

//provo la funzione
const arrayProva = scorriArray(
  ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  2,
  6
); //quando stampato dovrebbe avere da D ad F perchè sono compresi tra l'indice 2 e 6, se vanno compresi anche i valori negli indici 2 e 6 ho capito male, allora andrebbe modificata la riga 117 : let i = a; i <= b;

//output
console.log(arrayProva);
