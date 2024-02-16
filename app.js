let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

//La funcion hace que el codigo se pueda generar multiple times not just onces.



function generadorDominios(p, ad, n) {
  for (let a = 0; a < p.length; a++) {
    for (let b = 0; b < ad.length; b++)
      for (let c = 0; c < n.length; c++)
        console.log(`${p[a]}${ad[b]}${n[c]}.com`);
  }
}
generadorDominios(pronoun, adj, noun);
